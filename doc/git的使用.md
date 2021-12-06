# git的使用

## 1.git的安装

使用库安装

sudo apt update

sudo apt-get install git 

测试：git --version

## 2.git工作流程

![image-20211124172602314](image-20211124172602314.png)

概念：

**工作区：**就是你在电脑里能看到的目录。

**暂存区：**英文叫 stage 或 index。一般存放在 **.git** 目录下的 index 文件（.git/index）中，所以我们把暂存区有时也叫作索引（index）。

**版本库：**工作区有一个隐藏目录 **.git**，这个不算工作区，而是 Git 的版本库。

![image-20211124173656391](image-20211124173656391.png)

![image-20211128161704255](image-20211128161704255.png)

## 3.git常用指令

1)git项目创建

新建一个目录，再次目录下执行：git init

执行后，会创建一个隐藏的.git目录

![image-20211124173135973](image-20211124173135973.png)

  2)add

![image-20211128162901133](image-20211128162901133.png)

3)commit

提交文件到本地库。

提交所有在staging area 中的文件到registory：

git commit -m [message]

message是提交时的命令

![image-20211128163414619](image-20211128163414619.png)

![image-20211128164200102](image-20211128164200102.png)

4）push

上传远程代码到远程仓库并合并。

前提：远程有仓库。

![image-20211128170132018](image-20211128170132018.png)

url栏里就是远程仓库地址。

先添加远程仓库：

git remote add 别名 远程仓库url

![image-20211128170716593](image-20211128170716593.png)

错误的原因是没有指定远程的branch，需要指定为master。

注意：github页面上将master分支名改成了“main”，但push时还是需要用master，master对应web页面上的main。

![image-20211128170808180](image-20211128170808180.png)

push时命令正确，认证失败：

![image-20211128171544083](image-20211128171544083.png)

获取token的方法：

![image-20211128171723146](image-20211128171723146.png)

点击右上角代表自己的图标，选择settings：

![image-20211128171902227](image-20211128171902227.png)

选developer settings：

![image-20211128171933687](image-20211128171933687.png)

选择personal access tokens：

![image-20211128172053289](image-20211128172053289.png)

点击右侧的蓝色

![image-20211128172143750](image-20211128172143750.png)

在页面上填写相关信息后：

![image-20211128172421895](image-20211128172421895.png)

点击Generate token：

![image-20211128172801591](image-20211128172801591.png)

关闭页面之前，需要把token拷贝出来，以后当成密码使用：

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

再次push：

![image-20211128173122462](image-20211128173122462.png)

password需要输入token。

5)clone

将远程仓库clone到本地：

git clone 远程仓库url

![image-20211201162629566](image-20211201162629566.png)

clone后的操作步骤“

(1)修改文件(project正常进程)

(2)add

(3)commit

(4)远程同步：

分支问题：从本地开始创建的项目，主分支是master，从远程开始，主分支是main

a)添加远程仓库：

git remote add 别名 远程仓库url

![image-20211201164817471](image-20211201164817471.png)

注意：password不能输入github的用户密码，而要输入token。

6)diff

查看工作区和staging area文件的区别

7)查看提交历史log

![image-20211201171948875](image-20211201171948875.png)

8)恢复reset

git reset -hard HEAD^1

![image-20211201171922878](image-20211201171922878.png)

回退到上一个版本，--hard将直接修改工作区文件内容。

4.在vscode中使用 git

1)用命令行进行git初始化

在vscode打开项目之前，已经执行了：git init,git add

在此目录下打开，可以直接用vscode的版本管理。

2)用vscode进行git初始化















