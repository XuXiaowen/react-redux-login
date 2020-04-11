## React-Redux-Login 

### 1、前端环境搭建

```
npx create-react-app react-redux-login
yarn add redux react-redux react-thunk
yarn add redux-logger react-devtools-extension -dev
npm start
```

- 入口文件 src/index.js
  - 引入 reudx-logger、redux-thunk 中间件 
  - 增加 redux-devtools 配置（需在谷歌应用商店下载插件 redux-devtools）
  - 创建 store，用 Provider 连接 store 和容器组件

- 创建 reducers
  - combineReducers 合并 reducers
- UI 框架使用：Ant Design

--------------

### 2、后端环境搭建

- 创建 server
  - 创建 index.js

  - `npm init` `yarn add express`

  - server/index.js > 用 express 搭建服务器 端口2020
  - `node index.js` 
- 创建路由 routes
  - /api/users
- express 热更新
  - `yarn global add nodemon`
  - server/nodemon.json 配置
  - 使用 `npm start` 启动服务器

------

### 3、页面与路由搭建

`yarn add react-router-dom antd`

- SignupPage 注册页
- routes
- MenuBar 
- vs code 创建组件类模板
  - vs code: File -> Preferences -> User Snippets 

```
{
	"React Component":{
	    "scope": "",
         "prefix": "rc",
         "body": [
            "import React, { Component } from 'react'",
            "",
            "class $TM_FILENAME_BASE extends Component {",
            "",
            "\trender() {",
            "\t\treturn (",
            "\t\t\t<div>",
            "\t\t\t\t$TM_FILENAME_BASE",
            "\t\t\t</div>",
            "\t\t)",
            "\t}",
            "}",
            "",
            "export default $TM_FILENAME_BASE"
         ],
         "description": "create a React Componemt"
    }
}
```

- [create-react-app 实现 antd 的按需加载](https://www.jianshu.com/p/f93c56101041)
  - 显示目录下的隐藏文件 .git 并删除
  - npm run eject
  - yarn add babel-plugin-import -dev
  - package.json plugins 配置

### 4、实现注册页面

### 5、使用 fetch 发送请求

- 创建 actions
  - signupActions
- setupProxy.js 解决跨域
