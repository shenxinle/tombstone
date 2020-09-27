# npm

## nvm
```shell
# nvm 常用命令
nvm install stable ## 安装最新稳定版 node，当前是node v9.5.0 (npm v5.6.0)
nvm install <version> ## 安装指定版本，可模糊安装，如：安装v4.4.0，既可nvm install v4.4.0，又可nvm install 4.4
nvm uninstall <version> ## 删除已安装的指定版本，语法与install类似
nvm use <version> ## 切换使用指定的版本node
nvm ls ## 列出所有安装的版本
nvm ls-remote ## 列出所有远程服务器的版本（官方node version list）
nvm current ## 显示当前的版本
nvm alias <name> <version> ## 给不同的版本号添加别名
nvm unalias <name> ## 删除已定义的别名
nvm reinstall-packages <version> ## 在当前版本 node 环境下，重新全局安装指定版本号的 npm 包

nvm alias default 8.4.0   ## 设置默认版本
```

## npm

```shell
# 查看全局安装的包
npm ls -g --depth 0 2>error.log   # 错误输出到 error.log

# config
npm config --help
npm config list --json

# link
1. 直接在项目内 npm link path/to/module-name
2. 在本地的模块(如 module-name)内执行 npm link, link 到全局, 再进入依赖该模块的项目内执行 npm link module-name
3. 结束后 npm unlink module-name

查看当前项目 link 的包
npm ls --depth=0 --link=true
```

## npm scrips

```shell
npm run script1.js & npm run script2.js   # 并行执行
npm run script1.js && npm run script2.js   # 继发执行（即只有前一个任务成功，才执行下一个任务）

# 钩子
"prebuild": "echo I run before the build script"
"build": "cross-env NODE_ENV=production webpack" 
"postbuild": "echo I run after the build script"
npm run build # 等于 npm run prebuild && npm run build && npm run postbuild

# npm 默认提供的钩子
prepublish，postpublish
preinstall，postinstall
preuninstall，postuninstall
preversion，postversion
pretest，posttest
prestop，poststop
prestart，poststart
prerestart，postrestart
```

## 常用模块

### local-web-server

```shell
npm install -g local-web-server
ws --help   # 查看使用方法
ws -d build -p 3001  # 在build文件夹内启动 localhost:3001, 没有-d的话就在本文件夹内
```
