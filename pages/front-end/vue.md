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

绑定事件监听器指令：`v-on`

缩写：`@`

````vue
<template>
    <div>
        <button v-on:click="num--">-</button>
        <input type="text" size="2" v-model="num">
        <button @click="num++">+</button>
        <br>
        <button v-on:click="sub()">-</button>
        <input type="text" size="2" v-model="num">
        <button @click="add">+</button>
    </div>
</template>

<script>
    export default {
        name:"App",
        data(){
            return{
                num:0,
            }
        },
        methods:{
            sub(){
                this.num--
            },
            add(){
                this.num++
            }
        }
    }
</script>
````

`$event` : 事件对象，用在方法的参数传递中

**`v-on` 事件修饰符号**

|修饰符号|示例|示例描述|
|:-----------:|:-------------:|:----:|
|.stop|`<button @click.stop = "button()"></button>`|阻止事件冒泡，即不触发父元素事件|
|.self|`<button @click.self = "button()"></button>`|当事件在该元素本身触发时才触发事件|
|.capture|`<button @click.capture = "button()"></button>`|使用事件捕获模式，即将该事件的优先级提前|
|.prevent|`<a href="url" @click.prevent = "a()"></a>`|阻止默认事件|
|.once|`<button @click.once = "button()"></button>`|事件只触发一次|

::: tip 提示
事件修饰符号可叠加使用`<button @click.self.stop = "button()"></button>`
:::

### 条件判断

`v-if` : 是“真正”的条件渲染，切换过程中条件块内的事件监听器和子组件会被适当地销毁和重建

`v-show` : 基于 CSS 进行切换

````vue
<template>
    <button @click="isshow=!isshow">切换</button>
    <div v-if="isshow">
        {{ msg }}
    </div>
    <div v-show="isshow">
        {{ msg }}
    </div>
</template>

<script>
    export default {
        name:"App",
        data(){
            return{
                msg:"message",
                isshow:true
            }
        }
    }
</script>
````

`v-else` : 在 `v-if` 不渲染的条件下渲染，不需要传参

````vue
<template>
    <button @click="isshow=!isshow">切换</button>
    <div v-if="isshow">
        {{ msg }}
    </div>
    <div v-else>
        {{ msg2 }}
    </div>
</template>

<script>
    export default {
        name:"App",
        data(){
            return{
                msg:"message",
                msg2:"message2",
                isshow:true
            }
        }
    }
</script>
````

`v-else-if` : 在 `v-if` 不渲染的条件下进行条件渲染，需要传参

````vue
<div v-if="">
    {{ msg }}
</div>
<div v-else-if="">
    {{ msg2 }}
</div>
````

### 循环遍历

遍历指令：`v-for`

**遍历数组:**

````vue
<li v-for="(item,index) in list">{{index}} - {{ item }}</li>
````

`item` : 数组的各个子项

`index` : 索引

`list` : 需要遍历的数组

**遍历对象:**

````vue
<li v-for="(value,key,index) in obj">{{index}}:{{key}} - {{ item }}</li>
````

`value` : 对象的各个属性值

`key` : 对象的各个属性名

`index` : 索引

`obj` : 需要遍历的对象

**数组内遍历对象:**

````vue
<template>
    <ul>
        <li v-for="(item,index) in books">{{index+1}}-{{ item.name }}:{{ item.price }}</li>
    </ul>
<template>
    <script>
    export default {
        name:"App",
        data(){
            return{
                books:[
                    {id:1,name:"11",price:111},
                    {id:2,name:"22",price:222},
                    {id:3,name:"33",price:333},
                    {id:4,name:"44",price:444},
                    {id:5,name:"55",price:555}
                ]
            }
        }
    }
</script>
````

`:key` 唯一标识: 用于标识组件的唯一性，高效更新虚拟DOM

### 其它语法

`v-model` : 负责监听用户的输入事件，从而更新数据，并对一些极端场景进行一些特殊处理。同时，`v-model`会忽略所有表单元素的`value`、`checked`、`selected`特性的初始值，总是将 vue 实例中的数据作为数据来源。当输入事件发生时，实时更新 vue 实例中的数据。

````vue
<input type="text" v-model="msg">
````

**`v-model`的修饰符**:

`.lazy` : 懒加载

`.number` : 转换为 number 类型

`.trim` : 自动过滤空格

修饰符可叠加使用

## Vue 组件化开发

**组件的分类:** 页面级组件、业务上可复用的基础组件、与业务无关的独立功能组件

**组件开发三要素:** 

`prop` : 用于定义组件的属性

`自定义事件` : 用于触发组件的事件

`slot` : 用于组件功能的扩展

**组件设计需要考虑的问题** : 可扩展性强；组件中方法函数的抽离，便于复用，使用程度高；文档清除详细；颗粒度合适，适度抽象；功能尽可能单一，代码行数适中。

### 创建一个 Vue 组件

在项目的`src/components`文件夹下创建 vue 文件：

```vue
<template>
<div>
    <h1>{{ msg }}</h1>
</div>
</template>

<script>
    export default {
        name:"HelloWorld",
        data(){
            return{
                msg:"HelloWorld"
            }
        }
    }
</script>

<style scoped>

</style>
````

### 使用 vue 组件

先导入 vue 组件，再注册组件，最后使用组件：

````vue
<template>
<div>
    <input type="text" v-model="msg">
    <br>
    {{ msg }}
    <HelloWorld></HelloWorld>
</div>
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue';
    export default {
        name:"App",
        data(){
            return{
                msg:"msg"
            }
        },
        components:{
            HelloWorld
        }
    }
</script>

<style scoped>

</style>
````

::: tip 提示

父组件中定义的样式可在子类中使用。若不想在子组件内生效，则需在 `style` 后加上关键词 `scoped`

若想使用 scss 语法，则需加上 `lang="scss"`

:::

### 组件间通信

`props` : 用于父传子通信。在子组件中添加 `props` 属性并设置形参，并在父组件中为使用的子组件的对应形参传值。

::: code-group

````vue [App.vue]
<template>
<div>
    <HelloWorld :msg="app_msg" :ary="app_ary"></HelloWorld>
</div>
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue';
    export default {
        name:"App",
        data(){
            return{
                app_msg:"this is app msg",
                app_ary:['11','22','33']
            }
        },
        components:{
            HelloWorld
        }

    }
</script>

<style scoped>

</style>
````

````vue [HelloWorld.vue]
<template>
<div>
    <h1>{{ msg }}</h1>
    <ul>
        <li v-for="item in ary">{{ item }}</li>
    </ul>
</div>
</template>

<script>
    export default {
        name:"HelloWorld",
        props:['msg','ary'],
        data(){
            return{
                
            }
        }
    }
</script>

<style scoped>

</style>
````

:::

`props` 也可使用对象的方式书写：

````vue
props:{
    msg:{
        type:String,
        default:'########',
        required:true
    },
    ary:{
        type:Array,
        default:['aa','bb','cc']
    }
},
````

`type` : 数据类型

`default` : 默认值

`required` : 是否必需

## 更多信息

更多信息请点击[此处](https://cn.vuejs.org/guide/introduction)