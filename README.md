## React-Redux-Login 

### 1、前端环境搭建

```
npx create-react-app react-redux-login
cnpm i redux react-redux react-thunk --save
cnpm i redux-logger react-devtools-extension --save-dev
npm start
```

> 入口文件 src/index.js

- 引入 reudx-logger、redux-thunk 中间件 
- 增加 redux-devtools 配置（需在谷歌应用商店下载插件 redux-devtools）
- 创建 store，用 Provider 连接 store 和容器组件

> 创建 reducers

- combineReducers 合并 reducers

> UI 引用 [bootstrap cdn](https://www.bootcdn.cn/twitter-bootstrap/ )

