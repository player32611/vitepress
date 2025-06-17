# 网络请求

::: danger 警告
该页面尚未完工!
:::

## 目录

[[toc]]

## 网络请求方法

### fetch

`fetch()` 方法是一种常用的网络请求的方法，在现代浏览器中原生支持。

````JavaScript
fetch(url, {
  method: "get",// 没写默认是发送get请求
  headers: {
    // 请求头
  },
  body: {
    // 请求传递的参数
  }
})
const data = await res.json()
````

**更多 fetch 信息请点击[此处](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API)**

### XMLHttpRequest

使用 `XMLHttpRequest` 也可以发送请求，但是很多情况下都没有使用Fetch简便

xhr.open()参数的含义：

    ① 请求的方式

    ② 请求的地址

    ③ 指定ajax请求是异步处理还是同步处理，默认为true即异步处理，同步一定会影响用户体验

````JavaScript
const xhr = new XMLHttpRequest();
xhr.open("get", url, true);
xhr.setRequestHeader("", "");// 设置请求头
xhr.send();//发送请求，可携带参数
xhr.onreadystatechange = () => {
// 返回存有 XMLHttpRequest 的状态。
// 从 0 到 4 发生变化。0 未连接 1 打开连接 2 发送请求 3 交互 4 完成交互
  if (xhr.readyState == 4) {
    if (xhr.status == 200) {//返回状态码
      var data = xhr.response;
      return data;
    }
  }
}
````

### axios

Axios 是一个基于 promise 网络请求库，作用于node.js 和浏览器中。

使用前须安装

````Terminal
npm install axios
````

为了在CommonJS中使用 require（） 导入时获得TypeScript类型推断（智能感知/自动完成），请使用以下方法：

````JavaScript
const axios = require('axios').default;
// axios.<method> 能够提供自动完成和参数类型推断功能
````

**用例**

发起一个 `GET` 请求

````JavaScript
const axios = require('axios');

// 向给定ID的用户发起请求
axios.get('/user?ID=12345')
  .then(function (response) {
    // 处理成功情况
    console.log(response);
  })
  .catch(function (error) {
    // 处理错误情况
    console.log(error);
  })
  .finally(function () {
    // 总是会执行
  });

// 上述请求也可以按以下方式完成（可选）
axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    // 总是会执行
  });  

// 支持async/await用法
async function getUser() {
  try {
    const response = await axios.get('/user?ID=12345');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
````

**更多 axios 信息请点击[此处](https://www.axios-http.cn/docs/intro)**

## 状态码

HTTP 状态码用来表示特定的 HTTP 请求是否已成功完成。响应分为五类：信息响应(100–199)，成功响应(200–299)，重定向(300–399)，客户端错误(400–499)和服务器错误 (500–599)。

|Code|Text|Information|
|:--:|:--:|:---------:|
|200|OK|成功|
|301|Moved Permanently|永久重定向|
|302|Found|临时重定向|
|403|Forbiddenext|禁止访问|
|404|Not Found|找不到文件|