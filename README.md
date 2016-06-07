# react-koa-website
My website base on Koa 2.0.0, React and MongoDB.
## 技术栈
### 前端
前端界面是基于`material-ui`的，这是一个使用`React`编写的Material Design库，所以这个网站就使用了`React`来开发。配合`Redux`来做state管理，这里有一个问题是当浏览博客列表时，因为有分页，所以返回上一页时不会更新state，因此界面也不会改变。
为了解决这个问题而引入了`react-router-redux`库，浏览器的history发生改变时会触发一个reducer，在这个reducer中再出发请求博客列表的action。目前看来这是一种不够优雅的方法，但是能实现需要的功能。
### 服务器端
服务器端用的是`Koa 2.0.0`，使用了属于ES7草案的`async/await`语法，需要引入`Babel`转制。服务器端做了页面直出，利用了`React`能在服务器端渲染的特点。这样能最快地显示页面。
数据库使用了MongoDB。
### 部署
打包工具使用的是`Webpack`，开发和部署分别有不同的配置文件。