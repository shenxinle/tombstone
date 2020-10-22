// fn1(ctx, next)
module.exports = function(fns) {
  return async (ctx, next) => {
    let index = -1;
    function run(i) {
      if (i <= index) return Promise.reject(new Error('next() called multiple times'));
      index = i;

      let fn = fns[i];
      if (i === fns.length) {
        fn = next;
      }

      if (!fn) return Promise.resolve();

      try {
        return Promise.resolve(
          fn(ctx, run.bind(null, i + 1))
        )
      } catch(err) {
        return Promise.reject(err);
      }
    }

    run(0);
  }
}
