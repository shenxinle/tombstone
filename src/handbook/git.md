# git

## github

### 加快 clone 速度

1. `https://github.com/username/gitrepo.git` 替换为 `https://github.com.cnpmjs.org/username/gitrepo.git`
2. 将 clone 后的仓库 git remote url 配置改回 github。

### github action

todo: add + 1

## git

三种状态： working directory,  staging area,  .git directory(repository)

.git 目录

* HEAD  &emsp;  指示目前被检出的分支
* index  &emsp;  保存暂存区信息
* objects  &emsp;  存储所有数据内容
* refs  &emsp;  存储指向数据（分支）的提交对象的指针

### git config
git 配置文件的位置

* /etc/gitconfig  &emsp;  `git config --system`
* ~/.gitconfig 或 ~/.config/git/config  &emsp;  `git config --global`
* 本地仓库的 .git/config

`git config --list` / `git config --global --list`  &emsp;  显示配置列表

`git config key` / `git config --global key`  &emsp;  查看 key 的配置

`git config key value` / `git config --global key value`  &emsp;  修改配置

常见的配置项: user.name, user.email, core.editor

### git init
`git init`  把目录变成 git 仓库

### git clone
`git clone repo-name`

`git clone --recursive repo-name`  克隆含有子模块的仓库

### git add

### git status

### git diff

### git commit

### git reset

### git rm

### git mv

### git clean


### git branch

### git checkout

### git merge

### git log
`git log`

`git log --graph` 图形化

### git stash

### git tag

### git fetch

### git pull

### git push

### git remote

### git archive

### git submodule

### git show

### git shortlog

### git cherry-pick

### git rebase

### git revert

### gitk
gitk 是 git 自带的历史记录的图形化查看器

`gitk`  查看 HEAD

`gitk --all`  查看所有分支

### git gui
`git gui`  图形化 commit 界面
