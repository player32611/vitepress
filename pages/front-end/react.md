# React

::: danger 警告
该页面尚未完工!
:::

## 目录

[[toc]]

## 什么是 React

## 搭建开发环境

**执行命令：**

````
npx create-react-app react-basic
````

## React 组件

组件 是 React 的核心概念之一。它们是构建用户界面（UI）的基础

### 定义组件

**第一步：导出组件**

export default 前缀是一种 JavaScript 标准语法（非 React 的特性）。它允许你导出一个文件中的主要函数以便你以后可以从其他文件引入它。

````JavaScript
export default
````

**第二步：定义函数**

使用 function Profile() { } 定义名为 Profile 的 JavaScript 函数。

````JavaScript
export default function Profile() {}
````

::: warning 警告
React 组件是常规的 JavaScript 函数，但 组件的名称必须以大写字母开头，否则它们将无法运行！
:::

**第三步：添加标签**

这个组件返回一个带有 src 和 alt 属性的 img  标签。img  写得像 HTML，但实际上是 JavaScript！这种语法被称为 JSX，它允许你在 JavaScript 中嵌入标签。

````JavaScript
export default function Profile() {
  return (
    <img
      src="https://i.imgur.com/MK3eW3Am.jpg"
      alt="Katherine Johnson"
    />
  )
}
````

### 使用组件

可以向正常使用 HTML 标签一样使用组件。

````JSX
<section>
    <h1>了不起的科学家</h1>
    <Profile />
    <Profile />
    <Profile />
</section>
````

### 组件样式控制

React 组件基础的样式控制有两种方式：

**行内样式控制** : 

````JSX
<div style={{ color: 'red' }}>this is div</div>
````

**class 类名控制** : 

::: code-group

```css [index.css]
.foo {
    color: red;
}
```

```JavaScript [App.js]
import './index.css'

function App () {
    return (
        <div>
            <span className='foo'>this is span</span>
        </div>
    )
}
```

:::

## State 状态管理

在 React 中，随时间变化的数据被称为状态（state）。你可以向任何组件添加状态，并按需进行更新。

### 添加状态变量

你可以用 useState 为组件添加状态。useState 让你声明一个状态变量。它接收初始状态并返回一对值：当前状态，以及一个让你更新状态的设置函数。

````JavaScript
const [index, setIndex] = useState(0);
const [showMore, setShowMore] = useState(false);
````

### 修改状态的规则

**状态不可变** : 在 React 中，状态被认为是只读的，我们应该始终替换它而不是修改它，直接修改状态不能引发视图更新。

````JavaScript
let [count, setCount] = useState(0)
const handleClick = () => {
    count++//直接修改无法引发视图更新 // [!code warning]
    console.log(count)
}
````

**修改对象状态** : 对于对象类型的状态变量，应该始终传给 set 方法一个全新的对象来进行修改。

````JavaScript
const [form, setForm] = useState({
    name: 'jack'
})
const handleChangeName = () => {
    form.name = 'john'//直接修改原对象，不引发视图变化 // [!code warning]
}
````

**正确方法:**

````JavaScript
const [form, setForm] = useState({
    name: 'jack'
})
const handleChangeName = () => {
    setForm({
        ...form,
        name: 'john',
    })
}
````

## Redux 集中状态管理

Redux 是 React 最常用的集中状态管理工具，可以独立于框架运行

Redux 把整个数据修改的流程分成了三个核心概念，分别是：**state**、**action**和**reducer**

**state** : 一个对象，存放着我们管理的数据状态

**action** : 一个对象，用来描述你想怎么改数据

**reducer** : 一个函数，根据 action 的描述生成一个新的 state

### 环境准备

在 React 项目中执行以下命令来安装 Redux Toolkit 和 react-redux ：

````
npm i @reduxjs/toolkit react-redux
````

### 实现 counter

**1.使用 React Toolkit 创建 counterStore**

::: code-group

```JavaScript [counterStore.js]

import { createSlice } from "@reduxjs/toolkit"

const counterStore = createSlice({
    name: 'counter',//模块名称
    initialState: {//初始化的状态
        count: 0
    },
    reducers: {//修改数据的同步方法
        increment (state) {
            state.count++
        },
        decrement (state) {
            state.count--
        },
    }
})

const { increment, decrement } = counterStore.actions//解构出创建action对象的函数
const counterReducer = counterStore.reducer//获取reducer函数
export { increment, decrement }
export default counterReducer
```

```JavaScript [store/index.js]
import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "./modules/counterStore"

const store = configureStore({
    reducer: {
        counter: counterReducer
    }
})

export default store
```

:::

**2.为 React 注入 store**

react-redux 负责把 Redux 和 React 链接起来，内置 Provider 组件通过 store 参数把创建好的 store 实例注入到应用中，链接正式建立

````JavaScript
//index.js
import store from './store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Provider store={store}>
        <App />
    </Provider>
)
````

**3. React 组件使用 store 中的数据**

在 React 组件中使用 store 中的数据，需要用到一个钩子函数 `useSelect` ，它的作用是把 store 中的数据映射到组件中

````JavaScript
//App.js
import { useSelector } from "react-redux"

function App() {
    const { count } = useSelcet(state => state.counter)
    return (
        <div className="App">
            {count}
        </div>
    );
}

export default App;
````

**4. React 组件修改 store 中的数据**

React 组件中修改 store 中的数据需要借助另外一个 hook 函数 `useDispatch` ，它的作用是生成提交 action 对象的 dispatch 函数

````JavaScript
//App.js
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './store/modules/counterStore'
function App () {
    const { count } = useSelect(state => state.counter)
    const dispatch = useDispatch()
    return (
        <div className="App">
            <button onClick={() => dispatch(decrement())}>-</button>
            <span>{count}</span>
            <button onClick={() => dispatch(increment())}>+</button>
        </div>
    )
}
````

### 提交 action 传参

在 reducers 的同步修改方法中添加 action 对象参数，在调用 actionCreater 的时候传递参数，参数会被传递到 action 对象 payload 属性上

::: code-group

```JavaScript [counterStore.js]
addToNum (state, action) {
    state.count = action.payload
}
```

```JavaScript [App.js]
<button onClick={() => dispatch(addToNum(10))}>add to 10</button>
```

:::

## ReactRouter 路由

### 创建路由开发环境

对 React 项目安装 ReactRouter :

````
npm i react-router-dom
````

### 抽象路由模块

::: code-group

```JavaScript [page/Login.js]
//路由级别组件
const Login = () =>{
    return <div>我是登录页</div>
}
export default Login
```

```JavaScript [router.js]
//引入组件配置
import Login from '../page/Login'

const { creatBrowserRouter } from 'react-router-dom'

const router = createrBrowserRouter([
    {
        path: '/login',
        element: <Login />
    }
])

export default router
```

```JavaScript [index.js]
//应用入口文件渲染
import { RouterProvider } from 'react-router-dom'
import router from './router'
const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}></RouterProvider>
)
```

:::

### 路由导航

路由系统中的多个路由之间需要进行路由跳转，并且在跳转的同时可能需要传递参数进行通信。

**声明式导航** : 在模板中通过`<Link/>`组件描述处要跳转到哪里去

````JavaScript
import {Link} from 'react-router-dom'
...
<Link to="/article">文章</Link>
````

通过给组件的to属性指定要跳转到路由path，组件会被渲染为浏览器支持的a链接，如果需要传参直接通过字符串拼接的当时拼接参数即可

**编程式导航** : 通过`useNavigate`钩子得到导航方法，然后通过调用方法以命令式的形式进行路由跳转

````JavaScript
import { useNavigate } from "react-routerdom"
const Login = () => {
    const navigate = useNavigate()
    return(
        <div>
            我是登录页
            <button onClick={() => navigate('/article')}>跳转至文章</button>
        </div>
    )
}
````

通过调用navigate方法传入地址path实现跳转

### 嵌套路由配置

在一级路由中又内嵌了其他路由，这种关系就叫做嵌套路由，嵌套至一级路由内的路由又称作二级路由。

**实现步骤**

1.使用 children 属性配置路由嵌套关系

````JavaScript
{
    path: '/',
    element: <Layout />,
    children: [
        {
            path: 'board',
            element: <Board />,
        },
        {
            path: 'about',
            element: <About />,
        },
    ],
}
````

2.使用 `<Outlet/>` 组件配置二级路由渲染位置

````JavaScript
const Layout = () => {
    return(
        <div>
            <div>我是Layout</div>
            <Link to="/board">面板</Link>
            <Link to="/about">关于</Link>

            {/* 二级路由出口 */}
            <Outlet />
        </div>
    )
}
````

### 默认二级路由

**场景** : 当访问的是一级路由时，默认的二级路由组件可以得到渲染。

只需要在二级路由的位置去掉 path ，设置 index 属性为 true 。

````JavaScript
children:[
    {
        index: true,
        element: <Board />,
    },
    {
        path: 'about',
        element: <About />,
    },
]
````

### 404路由配置

**场景** : 当浏览器输入 url 的路径在整个路由配置中都找不到对应的 path ，为了用户体验，可以使用 404 兜底组件进行渲染

**实现步骤**

1.准备一个 NotFound 组件

````JavaScript
const NotFound = () => {
    return <div>this is NotFound</div>
}
export default NotFound
````

2.在路由表数组的末尾，以 * 号作为路由 path 配置路由

````JavaScript
{
    path: '*',
    element: <NotFound />
}
````

## 更多信息

更多信息请点击[此处](https://zh-hans.react.dev/learn)