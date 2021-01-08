# GIT

## git 安装

- [《安装 Git》](https://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000/00137396287703354d8c6c01c904c7d9ff056ae23da865a000)

## git 仓库

工作区：日常写代码的地方

暂存区：通过 git add .后代码所放的位置

本地仓库：通过 git commit -m 所存放的位置

## git 使用

> 基本操作

- git add .
  添加到工作区代码到暂存区
- git commit -m 备注
  将暂存区代码放到本地仓库中去
- git commit --amend -m 备注
  覆盖上一个存往本地仓库的备注

> 提交/拉取代码

- git clone 远程地址
  克隆远程代码 -b 分支名 指定分支
- git pull origin 分支名
  拉取远程仓库的代码到本地
- git push origin 分支名
  将本地仓库代码推往到远程仓库上去

> 分支操作

- git checkout -b
  创建分支并切换分支上去
- git checkout 分支名
  切换分支
- git branch -d 分支名
  删除分支
- git push origin --delete 分支名
  删除远程分支

> 查询操作

- git branch
  查询分支
- git status
  查询当前代码状态
- git log [--oneline]
  查询本地仓库
- git reflog
  查询历史记录

> 回退操作

- git reset --harf 仓库 id/^HEAD
  回退到想要回退的位置/回退上一次提交

## git 配置指令

- git config --list
  查询当前配置
- git config --global user.name 名字
  配置用户名
- git config --global user.email 邮箱
  配置邮箱
- git config --unset user.name/email
  取消配置
- git remote add 仓库别名 仓库地址
  配置本地仓库别名
- git remote remove 仓库别名
  删除配置仓库别名

## 同时配置 GitLab 和 GitHub

- 参考文献：

1. [同一台电脑同时使用 gitlab 和 github](https://blog.csdn.net/u014296452/article/details/79984867)
2. [配置同时使用 Gitlab 和 Github 的开发环境](https://www.cnblogs.com/kelsen/archive/2018/01/24/8342239.html)

- 配置步骤：

1. CD 到用户根目录下的 `.ssh` 文件夹中：`cd .ssh`
2. 生成 GitLab 秘钥：`ssh-keygen -t rsa -C "注册 gitlab 账户的邮箱"`，提示后输入 `id_rsa_gitlab`，这样就在 `.ssh` 目录下生成了 GitLab 的秘钥。
3. 生成 GitHub 秘钥：`ssh-keygen -t rsa -C "注册 github 账户的邮箱"`，提示后输入 `id_rsa_github`，这样就在 `.ssh` 目录下生成了 GitHub 的秘钥。

> 这时候我们 `.ssh` 目录中有文件：

```shell
id_rsa_github.pub	id_rsa_gitlab.pub
id_rsa_github		id_rsa_gitlab
```

4. 将 id_rsa_github.pub 和 id_rsa_gitlab.pub 各自复制到远程网址中去

5. ssh-add ~/.ssh/gitlab_id-rsa-work 添加私钥到本地

6. 添加完毕后，可以通过执行 ssh-add -l 验证下

7. 本地密钥的配置
   新建一个文件
   mikdir -p config
   编辑 config 文件，输入
   ```base
   Host github
    Port 22
    User userName1
    HostName github.com
    PreferredAuthentications publickey
    IdentityFile ~/.ssh/github_id-rsa
   Host gitlab
    Port 22
    User userName2
    HostName gitlab.com
    PreferredAuthentications publickey
    IdentityFile ~/.ssh/gitlab_id-rsa-work
   ```

- Host：仓库网站的别名
- Port：自定义的端口。默认为 22，可不配置
- User：仓库网站上的用户名
- HostName：真正连接的服务器地址
- PreferredAuthentications 指定优先使用哪种方式验证，支持密码和秘钥验证方式
- IdentityFile 本次连接使用的私钥的绝对路径

注：Host 就是可以替代 HostName 来使用的别名,比如我 github 上某个仓库的 clone 地址为：“git@github.com:test.git”，那么使用 Host 后就是：“git@github:test.git“

8. 查看是否配置 config 文件是否成功
   ssh -T 远程地址

## 参考文献

- [《Git 教程 - 廖雪峰》](https://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000)
