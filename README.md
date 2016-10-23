# react-koa-website
My website base on Koa 2.0.0, React and MongoDB.
## 技术栈
### 前端
前端界面使用`material-ui`，这是一个基于`React`编写的Material Design库。因此我不得不使用`React`来开发这个项目，顺便也能学习一下`React`。配合`Redux`来做state管理。
### 服务器端
服务器端用的是`Koa 2.0.0`框架，使用了属于ES7草案的`async/await`语法，需要引入`Babel`转制。服务器端做了页面直出，利用了`React`能在服务器端渲染的特点。这样能最快地显示页面，对SEO也很有帮助。
数据库用的是MongoDB。
### 部署
打包工具使用的是`Webpack`，开发和部署分别有不同的配置文件。