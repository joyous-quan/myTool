git init    初始化git；

证明自己; 登陆自己的github

git config --global user.name "你的git名称"

git config --global user.email "你的git验证邮箱"

添加一个版本总共分成三步;

1. 先添加过去    git add 文件名; => 暂存区;

git status => 查看git add是否成功;

绿色的成功了

红色的没成功;

2. 放进版本库之中;  

git commit -m "注释"

git commit => 放进版本库之中;

-m  => 所有的暂存区中的文件;

"注释" => 必须有注释;当前版本提交注释信息;

版本日志 :  git reflog ;

版本退回 : git reset --hard 版本号;

查看版本不同; git diff


2. 放进版本库之中;  

git commit -m "注释"

git commit => 放进版本库之中;

-m  => 所有的暂存区中的文件;

"注释" => 必须有注释;当前版本提交注释信息;

版本日志 :  git reflog ;

版本退回 : git reset --hard 版本号;

查看版本不同; git diff
