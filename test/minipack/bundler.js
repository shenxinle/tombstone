const fs = require('fs');
const path = require('path');
const babylon = require('babylon');
const traverse = require('babel-traverse').default;
const { transformFromAst } = require('babel-core');

let uid = 0;


function createAsset(filename) {
  const content = fs.readFileSync(filename, 'utf-8');
  const ast = babylon.parse(content, {
    sourceType: 'module'
  });
  const dependencies = [];

  traverse(ast, {
    ImportDeclaration: ({node}) => {
      dependencies.push(node.source.value);
    }
  });

  const { code } = transformFromAst(ast, null, {
    presets: ['env']
  });

  return {
    id: uid++,
    filename,
    dependencies,
    code
  };
}

function createGraph(entry) {
  const mainAsset = createAsset(entry);
  const quene = [mainAsset];

  for (const asset of quene) {
    const dirname = path.dirname(asset.filename);
    asset.mapping = {};

    asset.dependencies.forEach((relativePath) => {
      const absolutePath = path.join(dirname, relativePath);
      const childAsset = createAsset(absolutePath);

      asset.mapping[relativePath] = childAsset.id;
      quene.push(childAsset);
    });
  }

  return quene;
}

function bundle(graph) {
  let modules = '';
  graph.forEach((mod) => {
    modules += `${mod.id}: [
      function (require, module, exports) {
        ${mod.code}
      },
      ${JSON.stringify(mod.mapping)}
    ],`
  });

  const result = `
    (function (modules) {
      function require(index) {
        const [fn, mapping] = modules[index];
        const module = {exports:{}};

        function requireByName(name) {
          return require(mapping[name]);
        }

        fn(requireByName, module, module.exports);
        return module.exports;
      }

      require(0);
    })({${modules}})
  `;

  return result;
}

const graph = createGraph('./example/entry.js');
const code = bundle(graph);
fs.writeFileSync('dist.js', code, {
  encoding: 'utf-8'
});
