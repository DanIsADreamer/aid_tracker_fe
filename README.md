# Aid Tracker

> 请严格要求与对待

## 开始

- 安装 Taro 2.0.5

```
  npm install -g @tarojs/cli@2.0.5
```

- 安装项目配置,并执行

```
  npm install
  npm run dev:weapp
```

- 执行 mock

```
  npm run mock
```

- 打开小程序开发者工具即可看到

## 代码提交规范：

- git add / git commit（commit 规范见下面）
- git pull --rebase
- git push

## Git commit message

- template: `type: [name] content`
- example: `test: [mike] add edge case for login test`

`type` only can be one of these types and their meaning as show follow:

- _feat_: new feature
- _test_: add or change some test case
- _refactor_: refactor of the code and not change the behavior of code itself
- _style_: format the code style, such as indent of code, not related to code itself
- _chore_: changes to the build process or code infrastructure
- _fix_: fix the bug
- _docs_: documentation related, such add content to documentation or add some comments
- _revert_: revert the previous commit
- _temporary_: temporary change something maybe for pipeline
- _hotfix_: fix the bug for emergency
