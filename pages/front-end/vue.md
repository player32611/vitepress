# Vue

::: danger 警告
该页面尚未完工!
:::

## 目录

[[toc]]

## 什么是 Vue

**Vue** 是一套用于构建用户界面的渐进式框架。

**响应式的数据绑定**: 当数据发生改变，视图可以自动更新，可以不用关心 dom 操作，而专心数据操作

**可组合的视图组件**: 把视图按照功能切分成若干基本单元，组件可以一级一级组合整个应用形成倒置组件树，可维护，可重用，可测试

**vue-cli** 是 Vue 官方提供的脚手架工具，默认已经帮我们搭建好了一套利用 Webpack 管理 Vue 的项目结构

**create vue** 启动 Vite 驱动的 Vue 项目的推荐方法

## 引入 Vue

### CDN 方式引入

````html
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
````

### 使用 create vue 搭建开发环境

````
npm create vue@latest
````

`node_modules` 第三方库储存目录

`src` 源码文件储存目录

`src/assets` 静态资源(图片，css等)储存目录

`src/components` 页面内小组件储存目录

`src/router` 路由

`src/store` 状态管理

`src/views` 页面大组件储存目录

`dist` 打包后的目录

## 使用 Vue

### CDN 使用案例

````html
<body>
    <div id="app">{{message}}</div>
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    <script>
        const app = Vue.createApp({
            data() {
                return {
                    message: 'this is a test'
                }
            }
        }).mount("#app")
    </script>
</body>
````

### 开发环境使用案例

::: code-group

```vue[App.vue]
<template>
    <div>
    {{ msg }}
    </div>
</template>

<script>
    export default {
        name:"App",
        data(){
            return{
                msg:'hello'
            }
        }
    }
</script>

<style scoped>

</style>
```

```JavaScript [main.js]
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
```

```html [index.html]
<!DOCTYPE html>
<html lang="">

<head>
  <meta charset="UTF-8">
  <link rel="icon" href="/favicon.ico">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vite App</title>
</head>

<body>
  <div id="app"></div>
  <script type="module" src="/src/main.js"></script>
</body>

</html>
```

:::

## vue 模板基础语法

### 插值操作

**插值：**

````vue
<div>{{msg}}</div>
````


**指令：**

````vue
<p v-text='msg'></p>
````

|简单指令|示例|示例描述|
|:-----------:|:-------------:|:----:|
|v-pre|`<h2 v-pre>{{msg}}</h2>`|不解析插值变量|
|v-once|`<h2 v-once>{{msg}}</h2>`|只读取插值变量初始值|
|v-text|`<h2 v-text="msg"></h2>`|读取变量并写入元素内|
|v-html|`<h2 v-html="msg"></h2>`|允许读取含 html 标签的变量|

在进行数据绑定时，支持 js 单个表达式

### `v-bind` 绑定属性

````vue
<h2 v-bind:title="msg"></h2>
<h2 :title="msg"></h2>
````

使用 `v-bind:` 或 `:` 可使属性值与变量动态绑定

也可使样式与变量绑定：

````vue
<template>
    <div :style="[fontSize,backgroundColor]">123</div>
</template>

<script>
    export default {
        data(){
            return{
                fontSize:'font-size:100px',
                backgroundColor:'background-color:red'
            }
        },
    }
</script>
````

也可使类与属性绑定：

````vue
<template>
     <div :class="[one,two]">112233</div>
     <div :class="actives">112233</div>
     <div :class="{one:isone,two:istwo}">112233</div>
     <div :class="{isone,istwo}">112233</div>
     <div :class="getStyleArr()">112233</div>
     <div :class="getStyleObj()">112233</div>
</template>

<script>
    export default {
        name:"App",
        data(){
            return{
                one:'one',
                two:'two',
                actives:['one','two'],
                isone:true,
                istwo:true
            }
        },
        methods:{
            getStyleArr(){
                return[this.one,this.two]
            },
            getStyleObj(){
                return{one:this.isone,two:this.istwo}
            }
        }
    }
</script>

<style scoped>
.one{
    font-size: 100px;
}
.two{
    background-color: pink;
}
.isone{
    font-size: 50px;
}
.istwo{
    background-color: blue;
}
</style>
````

### 计算属性

计算属性关键词： `computed`

使用方法同变量相同，用于组合变量，只有用于组合的变量变化时才会重新执行其中内容

````vue
<script>
    export default {
        name:"App",
        data(){
            return{
                name:'123',
                slogen:'666'
            }
        },
        computed:{
            title:{
                set(values){
                    let arr=values.split(' - ')
                    this.name = arr[0]
                    this.slogen=arr[1]
                },
                get(){
                    return this.name+'-'+this.slogen
                }
            }
        } 
    }
</script>
````
`set()`: 用于主动修改计算属性中的值

`get()`: 返回计算属性的值

### 事件监听

### 条件判断

### 循环遍历

### 其它语法

## 更多信息

更多信息请点击[此处](https://cn.vuejs.org/guide/introduction)