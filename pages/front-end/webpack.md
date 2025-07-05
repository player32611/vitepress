# webpack

::: danger 警告
该页面尚未完工!
:::

## 目录

[[toc]]

## 什么是 webpack

webpack 是一个模块打包器（构建工具）。它的主要目标是将 JavaScript 文件打包在一起，缩减文件大小，打包后的文件用于在浏览器中使用，但它也能够胜任转换、打包或包裹任何资源。

## webpack 原理和概念

树结构：在一个入口文件中引入所有资源，形成所有依赖关系树状图

模块：对于 webpack 来说，所有的资源（css,img...）都算作模块

chunk：打包过程中被操作的模块文件叫做 chunk ，例如异步加载一个模块就是一个 chunk

bundel：bundle是最后打包后的文件，最终文件可以和 chunk 长得一模一样，但是大部分情况下他是多个 chunk 的集合。


## 使用 webpack

### 安装 webpack

**执行命令：**

````
npm i webpack webpack-cli --save-dev
````
### 配置命令

在 package.json 中配置以下命令:

````JavaScript
"script":{
    "build": "webpack"
},
````

### 打包

只有和入口产生直接/间接的引入关系，才会被打包。

## webpack 入口与与出口

### 入口

入口起点(entry point) 指示 webpack 应该使用哪个模块，来作为构建其内部 依赖图(dependency graph) 的开始。进入入口起点后，webpack 会找出有哪些模块和库是入口起点（直接和间接）依赖的。默认值是 `./src/index.js`，但你可以通过在 webpack configuration 中配置 entry 属性，来指定一个（或多个）不同的入口起点。

在项目根目录中创建 **webpack.config.js** 文件并配置以下代码：

````
module.exports = {
  entry: './path/to/my/entry/file.js',
};
````

### 出口

output 属性告诉 webpack 在哪里输出它所创建的 bundle，以及如何命名这些文件。主要输出文件的默认值是 ./dist/main.js，其他生成文件默认放置在 ./dist 文件夹中。你可以通过在配置中指定一个 output 字段，来配置这些处理过程：

**webpack.config.js**

````
const path = require('path');

module.exports = {
  entry: './path/to/my/entry/file.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js',
  },
};
````
**output.path** : 生成的文件夹地址

**output.filename** ：出口文件名称

### 自动生成 html 文件

`HtmlWebpackPlugin` 插件简化了 HTML 文件的创建，以便为你的 webpack 包提供服务。你可以让该插件为你生成一个 HTML 文件，使用 lodash 模板提供模板，或者使用你自己的 loader。

执行以下命令以安装该插件：

````
npm install --save-dev html-webpack-plugin
````

该插件将为你生成一个 HTML5 文件， 在 body 中使用 script 标签引入你所有 webpack 生成的 bundle。 只需添加该插件到你的 webpack 配置中，如下所示：

````JavaScript
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: 'index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index_bundle.js',
  },
  plugins: [new HtmlWebpackPlugin()],
};
````

这将会生成一个包含以下内容的 dist/index.html 文件：

````html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>webpack App</title>
  </head>
  <body>
    <script src="index_bundle.js"></script>
  </body>
</html>
````

**配置**

配置 `webpack.config.js` 让 webpack 拥有插件功能

````JavaScript
{
    entry: 'index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'index_bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'My App',
            template: './public/login.html',
            filename: './login/index.html'//输出文件
        })
    ]
}
````

更多配置请点击[此处](https://github.com/jantimon/html-webpack-plugin#options)

### webpack 打包 css 文件

### webpack 打包图片

## 更多信息

更多信息请点击[此处](https://webpack.docschina.org/)