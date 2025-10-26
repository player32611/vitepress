# 微信小程序

::: danger 警告
该页面尚未完工!
:::

## 目录

[[toc]]

## 起步

### 注册开发者账号

https://mp.weixin.qq.com/

### 获取小程序的 AppID

登录后于 **管理**->**开发管理**->**开发设置**->**开发者 ID**->**AppID(小程序 ID)**

### 安装开发者工具

https://developers.weixin.qq.com/miniprogram/dev/devtools/stable.html

## 开发者工具使用指南

### 工具栏

**编译**: 在模拟器中查看最新的项目效果![An image](/images/WeChatMiniProgram/compile.png)

**预览**: 在真机中查看最新的项目效果![An image](/images/WeChatMiniProgram/preview.png)

### 项目结构

**pages**: 用来存放所有小程序的页面

**utils**: 用来存放工具性质的模块

**app.js(app.ts)**: 小程序项目入口文件

**app.json**: 小程序项目的全局配置文件

**app.wxss(app.less)**: 小程序项目的全局样式文件

**project.config.json**: 项目的配置文件

**sitemap.json**: 用来配置小程序及其页面是否允许被微信索引

### 页面组成结构

每个页面由 4 个基本文件组成，分别是：

**.js(.ts)**: 页面的脚本文件，存放页面的数据，事件处理函数等

**.json**: 当前页面的配置文件，配置窗口的外观、表现等

**.wxml**: 页面的模板结构文件

**.wxss(.less)**: 当前页面的样式表文件

## 基础知识

### .js(.ts) 文件

小程序中的 JS(TS) 文件分为三大类，分别是：

**`app.js(app.ts)`**: 是整个小程序项目的入口文件，通过调用`App()`函数来启动整个小程序。

**页面的`.js`(.ts)文件**：是页面的入口文件，通过调用`Page()`函数来创建并运行页面。

**普通的`.js`(.ts)文件**：是普通的功能模块文件，用来封装公共的函数或属性供页面使用。

### 宿主环境

宿主环境(host environment)指的是程序运行所必须的依赖环境，手机微信是小程序的宿主环境。小程序借助宿主环境提供的能力，可以完成许多普通网页无法完成的功能，例如：微信扫码、微信支付、微信登录、地理定位等。

**小程序宿主环境包含的内容**:通信模型、运行机制、组件、API

### 通信模型

小程序中通信的主体是渲染层和逻辑层，其中 WXML 模板和 WXSS 样式工作在渲染层；JS 脚本工作在逻辑层。

小程序中的通信模型分为两部分：

**渲染层和逻辑层之间的通信**：由微信客户端进行转发

**逻辑层和第三方服务器之间的通信**：由微信客户端进行转发

### 运行机制

**小程序启动**的过程分为五个步骤：把小程序的代码包下载到本地 -> 解析`app.json`全局配置文件 -> 执行`app.js`小程序入口文件，调用`App()`创建小程序实例 -> 渲染小程序首页 -> 小程序启动完成

**页面渲染**的过程分为四个步骤：加载解析页面的`.json`配置文件 -> 加载页面的`.wxml`模板和`.wxss`样式 -> 执行页面的`.js`文件，调用`Page()`创建页面实例 -> 页面渲染完成

### 小程序窗口的组成部分

![An image](/images/WeChatMiniProgram/windowComponents.png)

其中导航栏区域和背景区域可以通过全局的 **window** 节点来进行相关的配置

## 基础操作

### 新建小程序页面

只需要在`app.json`->`pages`中新增页面的存放路径，小程序开发者工具即可帮我们自动创建对应的页面文件。

```json
{
  "pages": [
    "pages/index/index",
    "pages/logs/logs",
    "pages/list/list" //新增的页面路径
  ]
}
```

### 修改项目首页

只需要调整`app.json`->`pages`数组中页面路径的前后顺序，即可修改项目的首页。小程序会把排在第一位的页面，当作项目首页进行渲染。

```json
{
  "pages": [
    "pages/list/list" //交换页面顺序
    "pages/index/index",
    "pages/logs/logs",
  ]
}
```

### 添加 loading 提示效果

调用**wx.showLoading()**方法，即可显示 loading 提示框，但需主动调用 **wx.hideLoading** 才能关闭提示框

```javascript
//上拉触底时加载数据
getDatas(){
  wx.showLoading({title: '数据加载中...'})
  wx.request({
    //...
    complete: ()=>{
      wx.hideLoading()
    }
  })
}
```

### 动态设置标题内容

调用 **wx.setNavigationBarTitle()** 方法，即可动态设置当前页面的标题内容。

```javascript
//页面初次渲染完成时设置标题
onReady(){
  wx.setNavigationBarTitle({
    title: 'test'
  })
}
```

## JSON 配置文件

JSON 是一种数据格式，通过不同的 `.json` 文件，可以对小程序项目进行不同级别的配置。

小程序项目中由 4 种 json 配置文件分别是: 项目根目录中的`app.json`配置文件、项目根目录中的`project.config.json`配置文件、项目根目录中的`sitemap.json`配置文件、每个页面文件夹中的`.json`配置文件。

### 全局配置

小程序根目录下的 `app.json` 文件是小程序的全局配置文件。常用的配置项如下：

- **pages**: 用来记录当前小程序所有页面的存放路径

- **window**: 全局定义小程序窗口的外观

  - **navigationBarTitleText**: 导航栏标题文字内容(**类型：String**)(**默认值: ""**)

  - **navigationBarBackgroundColor**: 导航栏背景颜色(**类型：HexColor**)(**默认值: "#000000"**)

  - **navigationBarTextStyle**: 导航栏标题颜色，仅支持 **black**/**white** (**类型：String**)(**默认值: "white"**)

  - **backgroundColor**: 窗口的背景色(**类型：HexColor**)(**默认值: "#ffffff"**)

  - **backgroundTextStyle**: 下拉 loading 的样式，仅支持 **dark**/**light** (**类型：String**)(**默认值: "dark"**)

  - **enablePullDownRefresh**: 是否全局开启下拉刷新(**类型：Boolean**)(**默认值: false**)

  - **onReachBottomDistance**: 页面上拉触底事件触发时距页面底部距离，单位为 px (**类型：Number**)(**默认值: 50**)

- **tabBar**: 设置小程序底部的导航栏效果

- **style**: 全局定义小程序组件所使用的样式版本（是否启用新版的组件样式）

- **sitemapLocation**: 用来指明 `sitemap.json` 的位置

### project.config.json 文件

`project.config.json` 是项目配置文件，用来记录我们对小程序开发工具所做的个性化配置。

**settings**: 保存了编译相关的配置

**projectname**: 保存的是项目名称

**appid**: 保存的是小程序的账号 ID

### sitemap.json 文件

微信现已开发小程序内搜索，效果类似于 PC 网页的 SEO。`sitemap.json'文件用来配置小程序页面是否允许微信索引。

当开发者允许微信索引时，微信会通过爬虫的形式，为小程序的页面内容建立索引。当用户的搜索关键字和页面的索引匹配成功的时候，小程序的页面将可能展示在搜索结果中。

sitemap 的索引提示默认是开启的，如需要关闭 sitemap 的索引提示，可在小程序项目配置文件`project.config.json`中 **setting** 中配置字段 **checkSiteMap** 为 **false**。

### 页面配置

小程序中，每个页面都有自己的 `.json` 配置文件，用来对当前页面的窗口外观，页面效果等进行配置。

如果某些小程序页面想要拥有特殊的窗口表现，此时，页面级别的 `.json` 配置文件，就可以实现这种需求。

::: warning 注意

- 当页面配置于全局配置冲突时，根据就近原则，最终的效果以页面配置为准。

- 页面配置文件中关于 **tabBar** 配置项，不包含在 **window** 配置项中。

:::

## 组件

小程序中的组件是由宿主环境提供的，开发者可以基于组件快速搭建出漂亮的页面结构。官方把小程序的组件分为了 9 大类，分别是：**视图容器**、**基础内容**、**表单组件**、导航组件、媒体组件、map 地图组件、canvas 画布组件、开放能力与无障碍访问。

常用的视图容器类组件包括`view`、`scroll-view`、`swiper`和`swiper-item`

`view`: 普通视图区域，类似于 HTML 中的`div`，是一个块级元素，常用来实现页面的布局效果

`scroll-view`: 可滚动视图区域，常用来实现滚动列表效果

`swiper`和`swiper-item`: 轮播图容器组件和轮播图 item 组件

### view 组件的基本使用

使用方法基本与`div`相同，可使用 flex 布局

```html
<view class="container">
  <view>A</view>
  <view>B</view>
  <view>C</view>
</view>
```

### scroll-view 组件的基本使用

将元素放置在`scroll-view`标签中，即可实现滚动效果

```html
<scroll-view class="container" scroll-y>
  <view>A</view>
  <view>B</view>
  <view>C</view>
</scroll-view>
```

**scroll-y**:允许纵向滚动

**scroll-x**:允许横向滚动

::: warning 警告

滚动区域高度(宽度)必须设置，否则滚动效果无效

:::

### swiper 和 swiper-item 组件的基本使用

`swiper`中放置`swiper-item`标签，`swiper-item`标签内为轮播图内容

```html
<swiper class="swiper1">
  <swiper-item>
    <view class="swiper1-item">A</view>
  </swiper-item>
  <swiper-item>
    <view class="swiper1-item">B</view>
  </swiper-item>
  <swiper-item>
    <view class="swiper1-item">C</view>
  </swiper-item>
</swiper>
```

swiper 轮播图组件的常用属性如下：

|          属性          |  类型   |      默认值       |         说明         |
| :--------------------: | :-----: | :---------------: | :------------------: |
|     indicator-dots     | boolean |       false       |  是否显示面板指示点  |
|    indicator-color     |  color  | rgba(0, 0, 0, .3) |      指示点颜色      |
| indicator-active-color |  color  |      #000000      | 当前选中的指示点颜色 |
|        autoplay        | boolean |       false       |     是否自动切换     |
|        interval        | number  |       5000        |   自动切换时间间隔   |
|        circular        | boolean |       false       |   是否采用衔接滑动   |

常用的基础内容组件包括`text`和`rich-text`

`text`: 文本组件，类似于 HTML 中的`span`标签，是一个行内元素

`rich-text`: 富文本组件，支持把 HTML 字符串渲染为 WXML 结构

### text 组件的基本使用

通过`text`组件的 **selectable** 属性，实现长按选中文本的效果

```html
<text selectable>长按选中文本</text>
```

### rich-text 组件的基本使用

通过`rich-text`组件的 **nodes** 属性节点，把 HTML 字符串渲染为对应的 UI 结构

```html
<rich-text nodes="<h1 style='color:red'>标题</h1>" />
```

其它常用组件包括`button`、`image`和`navigate`

`button`: 按钮组件，功能比 HTML 中的`button`标签丰富，通过 **open-type** 属性，可以调用微信提供的各种功能(客服、转发、获取用户授权、获取用户信息等)

`image`: 图片组件，默认宽度约为 300px、高度约为 240px

`navigatoe`: 页面导航组件、类似于 HTML 中的`a`链接

### button 组件的基本使用

通过 **type** 指定按钮类型，通过 **size** 设置尺寸，通过 **plain** 设置镂空

```html
<button type="default">按钮</button>
<button type="primary">主色调按钮</button>
<button type="warn">警告按钮</button>

<button size="mini">行内按钮</button>
<button size="default">块即按钮</button>

<button plain>镂空按钮</button>
```

### image 组件的基本使用

使用 **src** 指向图片路径

```html
<image src="https://img.alicdn.com/tfs/TB1.XbjQpXXXXX_XpXXXXXXXXXX-200-200.png/>
```

`image`组件的 **mode** 属性来指定图片的裁剪和缩放模式，常用的 **mode** 属性值如下：

| **mode** 值 |                                                              说明                                                              |
| :---------: | :----------------------------------------------------------------------------------------------------------------------------: |
| scaleToFill |                         (默认值)缩放模式，不保持纵横比缩放图片，使图片的宽高完全拉伸至填满`image`元素                          |
|  aspectFit  |                  缩放模式，保持纵横比缩放图片，使图片的长边能完全显示出来。也就是说，可以完整地将图片显示出来                  |
| aspectFill  | 缩放模式，保持纵横比缩放图片，只保证图片的短边能完全显示。也就是说，图片通常只在水平或垂直方向是完整的，另一个方向将会发生截取 |
|  widthFix   |                                      缩放模式，宽度不变，高度自动变化，保持图片宽高比不变                                      |
|  heightFix  |                                      缩放模式，高度不变，宽度自动变化，保持图片宽高比不变                                      |

```html
<image mode="aspectFill" />
```

## WXML 模板语法

WXML(WeiXin Markup Language) 是一种小程序框架设计的一套标签语言，用来构建小程序页面的结构，其作用类似于网页开发中的 HTML。

**WXML 和 HTML 的区别**：

标签名称不同:

| HTML |   WXML    |
| :--: | :-------: |
| div  |   view    |
| span |   text    |
| img  |   image   |
|  a   | navigator |

属性节点不同: HTML 中`<a href="#">超链接</a>`

WXML 中`<navigator url="/pagea/home/home"></navigator>`

提供了类似于 Vue 中的模板语法:包括数据绑定，列表渲染，条件渲染等

数据绑定的基本原则是：**在 data 中定义数据**、**在 WXML 中使用数据**

### 定义数据

在页面对应的`.js(.ts)`文件中，把数据定义到 **data** 对象中即可

```javascript
Page({
  data: {
    info: "init data",
    msgList: [{ msg: "hello" }, { msg: "world" }],
  },
});
```

### 使用数据

把 **data** 中的数据绑定到页面中渲染，使用 **Mustache** 语法(双大括号)将变量包起来即可。语法格式为：

```html
<view>{{ 要绑定的数据名称 }}</view>
<image src="{{ 要绑定的数据名称 }}"></image>
<view>{{ 要绑定的数据名称 ? 'true' : 'false' }}</view>
<view>{{ 要绑定的数据名称 * 100 }}</view>
```

### 事件绑定

事件是渲染层到逻辑层的通讯方式。通过事件可以将用户在渲染层产生的行为，反馈到逻辑层进行业务的处理。

在小程序中，不存在 HTML 中的 **onclick** 鼠标点击事件，而是通过 **tap** 事件来响应用户的触摸行为。

小程序中常用的事件有：

|  类型  |         绑定方式          |                    事件描述                     |
| :----: | :-----------------------: | :---------------------------------------------: |
|  tap   |    bindtap 或 bind:tap    | 手指触摸后马上离开，类似于 HTML 中的 click 事件 |
| input  |  bindinput 或 bind:input  |                文本框的输入事件                 |
| change | bindchange 或 bind:change |                 状态改变时触发                  |

::: code-group

```html [index.wxml]
<button bind:tap="btnTapHandler">按钮</button>
```

```javascript [index.js]
btnTapHandler(e){//按钮的 tap 事件处理函数
  console.log(e)//事件参数对象 e
}
```

:::

当事件回调触发的时候，会受到一个事件对象 **event** ，他的详细属性如下表所示：

|      属性      |    类型    |                     说明                     |
| :------------: | :--------: | :------------------------------------------: |
|      type      |   String   |                   事件类型                   |
|   timeStamp    |  Integer   |       页面打开到触发事件所经过的毫秒数       |
|   **target**   | **Object** |      **触发事件的组件的一些属性值集合**      |
| currentTarget  |   Object   |           当前组件的一些属性值集合           |
|   **detail**   | **Object** |                **额外的信息**                |
|    touches     |   Array    | 触摸事件，当前停留在屏幕中的触摸点信息的数组 |
| changedTouches |   Array    |     触摸事件，当前变化的触摸点信息的数组     |

::: tip 提示

**target** 是触发该事件的源头组件，而 **currentTarget** 则是当前事件所绑定的组件。

:::

### 数据修改

通过调用 **this.setData(dataObject)** 方法，可以给页面 **data** 中的数据重新赋值

```javascript
Page({
  data: {
    count: 0,
  },
  //修改count的值
  changeCount() {
    this.setData({
      count: this.data.count + 1,
    });
  },
});
```

小程序中的事件传参比较特殊，不能在绑定事件的同时为事件处理函数传递参数

```html {1}
<button bind:tap="changeCount(123)">不可行</button>
```

可以为组件提供 **data-\*** 自定义属性传参，其中 \* 代表的是参数的名字。在事件处理函数中，通过 **event.target.dataset.参数名** 即可获取到具体参数的值。

::: code-group

```html [index.wxml]
<button bind:tap="addNum" data-info="{{2}}">+</button>
```

```javascript [index.js]
addNum(e){
    this.setData({
        num: this.data.num+e.target.dataset.info
    })
},
```

:::

### 文本框绑定

在小程序中，通过 **input** 事件来响应文本框的输入内容。通过 **bindinput**，可以为文本框绑定输入事件;通过 **model:value**，为文本框实现数据双向绑定。

::: code-group

```html [index.wxml]
<input bindinput="inputHandler" />
<!-- 双向绑定 -->
<input model:value="{{input}}" />
```

```javascript [index.js]
inputHandler(e:any){
  console.log(e.detail.value)
},
```

:::

### 条件渲染

在小程序中使用 **wx:if** 来判断是否需要渲染该代码块，也可以用 **wx:elif** 和 **wx:else** 来添加 else 判断

```html
<view wx:if="{{condition}}">条件为真时渲染</view>
<view wx:elif="{{condition}}">条件为真时渲染</view>
<view wx:else>条件为假时渲染</view>
```

如果要一次性控制多个组件的展示与隐藏，可以使用一个 `block` 标签将多个组件包装起来，并在 `block` 标签上使用 **wx:if** 控制属性

```html
<block wx:if="{{condition}}">
  <view>条件为真时渲染</view>
  <view>条件为真时渲染</view>
</block>
```

::: tip 提示

`block` 并不是一个组件，它只是一个包裹性质的容器，不会在页面中做任何渲染。

:::

直接使用 **hidden** 也能控制元素的显示与隐藏

```html
<view hidden="{{condition}}">条件为真时渲染</view>
```

::: info **wx:if** 与 **hidden** 的对比

**wx:if**以动态创建的移除元素的方式，控制元素的展示与隐藏；**hidden** 以切换样式的方式(display:none/block;)，控制元素的显示与隐藏。

频繁切换时，建议使用 **hidden**；控制条件复杂时，建议使用 **wx:if** 搭配 **wx:elif**、**wx:else** 进行展示与隐藏的切换。

:::

### 列表渲染

通过 **wx:for** 可以根据指定的数组，循环渲染重复的组件结构。默认情况下，当前循环项的**索引**用 **index** 表示；当前循环项用 **item** 表示。

```html
<view wx:for="{{array}}"> 索引是：{{index}} 当前项是：{{item}} </view>
```

使用 **wx:for-index** 可以指定**当前循环项的索引**的变量名；使用 **wx:for-item** 可以指定**当前项**的变量名。

```html
<view wx:for="{{array}}" wx:for-index="idx" wx:for-item="itemName">
  索引是：{{idx}} 当前项是：{{itemName}}
</view>
```

小程序在实现列表渲染时，建议为渲染出来的列表项指定唯一的 **key** 值，从而提高渲染的效率

```html
<view wx:for="{{array}}" wx:key="id">使用数组项的id属性作为key</view>
<view wx:for="{{array}}" wx:key="index">使用数组项的索引作为key</view>
```

## WXSS 模板样式

WXSS(WeiXin Style Sheets) 是一套样式语言，用于描述 WXML 的组件样式，类似于网页开发中的 CSS。

**WXSS 和 CSS 的区别**：

新增了 rpx 尺寸单位：CSS 中需要手动进行像素单位换算，例如 rem;WXSS 在底层支持新的尺寸单位 rpx，在不同大小的屏幕上小程序会自动进行换算。

提供了全局的样式和局部样式：项目根目录中的`app.wxss`会作用域所有小程序页面；局部页面的`.wxss`样式仅对当前页面生效。

WXSS 仅支持部分 CSS 选择器：.class 和#id、element、并集选择器、后代选择器、::after 和::before 等伪类选择器。

### rpx 尺寸单位

rpx (responsive pixel)是微信小程序独有的，用来解决屏适配的尺寸单位。

rpx 的实现原理非常简单：鉴于不同设备屏幕的大小不同，为了实现屏幕的自动适配，rpx 把所有设备的屏幕在宽度上等分为 750 份(即：当前屏幕的总宽度为 750rpx)。在较小的设备上，1rpx 所代表的宽度较小；在较大的设备上，1rpx 所代表的宽度较大。

::: tip 提示

官方建议：开发微信小程序时，设计师可以用 iPhone6 作为视觉稿的标准。在 iPhone6 上如果要绘制宽 100px，高 20px 的盒子，换算成 rpx 单位，宽高分别为 200rpx 和 40rpx。

:::

### 样式导入

使用 WXSS 提供的 **@import** 语法，可以导入外联的样式表。

**@import** 后跟需要导入的外联样式表的相对路径，用 **;** 表示语句结束。

```css
@import "/common.wxss";
```

### 全局样式

定义在 `app.wxss` 中的样式为全局样式，作用于每一个页面，无须单独导入。

### 局部样式

在页面的 `.wxss` 文件中定义的样式为局部样式，只作用于当前页面。

::: warning 注意

- 当局部样式和全局样式冲突时，根据就近原则，局部样式会覆盖全局样式

- 当局部样式的权重大于或等于全局样式的权重时，才会覆盖全局的样式

:::

## WXS 脚本

WXS (WeiXin Script) 是小程序独有的一套脚本语言，结合 WXML，可以构建出页面的结构。

虽然 wxs 的语法类似于 JavaScript，但是 wxs 和 JavsScript 是完全不同的两种语言：

- wxs 有自己的数据类型： **number 数值类型**、**string 字符串类型**、**boolean 布尔类型**、**object 对象类型**、**function 函数类型**、**array 数组类型**、**date 日期类型**、**regexp 正则表达式类型**

- wxs 不支持类似于 ES6 及以上的语法形式

  - 不支持：**let**、**const**、**解构赋值**、**展开运算符**、**箭头函数**、**对象属性简写**、etc...

  - 支持：**var 定义变量**、**普通 function 函数等类似于 ES5 的语法**

- wxs 遵循 CommonJS 规范：**module 对象**、**require()函数**、**module.exports 对象**

wxs 典型的应用场景就是“过滤器”，经常配合 Mustache 语法进行使用。

### 内嵌 wxs 脚本

wxs 代码可以编写在 wxml 文件中的`wxs`标签内，就像 JavaScript 代码可以编写在 html 文件中的 `<script>`标签内一样。

wxml 文件中的每个 `<wxs></wxs>`标签，必须提供 **module** 属性，用来指定当前 wxs 的模块名称，方便在 wxml 中访问模块中的成员：

```
<view>{{m1.toUpper(username)}}</view>

<wxs module="wxsModule">
  module.exports.toUpper = function(str){
    return str.toUpperCase();
  }
</wxs>
```

### 外联的 wxs 脚本

wxs 代码还可以编写在以 `.wxs` 为后缀名的文件内，就像 javaScript 代码可以编写在以 `.js` 为后缀名的文件中一样。

```
function toLower(str){
  return str.toLowerCase();
}

module.exports = {
  toLower:toLower
};
```

在 wxml 中引入外联的 wxs 脚本时，必须为`<wxs>`标签添加 **module** 和 **src** 属性，其中：

- **module** 用来指定模块的名称

- **src** 用来指定要引入的脚本的路径，且必须是相对路径

```
<!-- 调用方法 -->
<view>{{m2.toLower(country)}}</view>

<!-- 应用外联脚本 -->
<wxs src="../../utils/tools.wxs" module="m2"></wxs>
```

::: warning 注意

在 wxs 中定义的函数不能作为组件的事件回调函数。例如，下面的用法是错误的：

```
<button bind:tap="m2.toLower">按钮</button>
```

:::

::: warning 注意

wxs 的运行环境和其它的 JavaScript 代码是隔离的。体现在如下两个方面：

- wxs 不能调用 js 中定义的函数

- wxs 不能调用小程序提供的 API

:::

::: details wxs 的优点

- 在 iOS 设备上，小程序内的 WXS 会比 JavaScript 代码快 2~20 倍

- 在 android 设备上，二者的运行效率无差异

:::

## 页面导航

页面导航指的是页面之间的相互跳转。小程序中实现页面导航的方式有如下两种：

- 声明式导航

  - 在页面上声明一个`<navigation>`导航组件

  - 通过点击`<navigation>`组件实现页面跳转

- 编程式导航

  - 调用小程序的导航 API，实现页面的跳转

### 导航到 tabBar 页面

tabBar 页面指的是被配置为 tabBar 中的项的页面。

在使用 `<navigation>` 组件跳转到指定的 tabBar 页面时，需要指定 **url** 属性和 **open-type** 属性，其中：

- url 表示要跳转的页面的地址，必须以 / 开头

- open-type 表示跳转的方式，必须为 switchTab

```html
<navigator url="/pages/logs/logs" open-type="switchTab">点击登录</navigator>
```

或是调用 **wx.switchTab()** 方法，可以跳转到 tabBar 页面。其中 Object 参数对象的属性列表如下：

|   属性   |   类型   | 是否必选 |                      说明                      |
| :------: | :------: | :------: | :--------------------------------------------: |
|   url    |  string  |    是    | 需要跳转的 tabBar 页面的路径，路径后不能带参数 |
| success  | function |    否    |             接口调用成功的回调函数             |
|   fail   | function |    否    |             接口调用失败的回调函数             |
| complete | function |    否    |             接口调用结束的回调函数             |

示例代码如下：

::: code-group

```html[lists.wxml]
<button bind:tap="gotoLogs">点击查看日志</button>
```

```javascript[lists.js]
gotoLogs(){
  wx.switchTab({
      url:'/pages/logs/logs'
  })
},
```

:::

### 导航到非 tabBar 页面

在使用 `<navigation>` 组件跳转到普通的非 tabBar 页面时，则需要指定 **url** 属性和 **open-type** 属性，其中：

- url 表示要跳转的页面的地址，必须以 / 开头

- open-type 表示跳转的方式，必须为 switchTab

```html
<navigator url="/pages/hidden/hidden" open-type="navigate">点击跳转</navigator>
```

::: warning 注意

为了简便，在导航到非 tabBar 页面时，**open-type=navigate** 属性可以省略

:::

或是调用 **wx.navigateTo()** 方法，可以跳转到非 tabBar 页面。其中 Object 参数对象的属性列表如下：

|   属性   |   类型   | 是否必选 |                        说明                        |
| :------: | :------: | :------: | :------------------------------------------------: |
|   url    |  string  |    是    | 需要跳转到的非 tabBar 页面的路径，路径后可以带参数 |
| success  | function |    否    |               接口调用成功的回调函数               |
|   fail   | function |    否    |               接口调用失败的回调函数               |
| complete | function |    否    |  接口调用结束的回调函数（调用成功、失败都会执行）  |

::: code-group

```html[lists.wxml]
<button bind:tap="goToHidden">点击跳转</button>
```

```javascript[lists.js]
goToHidden(){
  wx.navigateTo({
      url:'/pages/hidden/hidden'
  })
},
```

:::

### 后退导航

如果要后退到上一页面或多级页面，则需要指定 **open-type** 属性和 **delta** 属性，其中：

- open-type 的值必须是 **navigateBack**，表示要进行后退导航

- delta 的值必须是数字，表示要后退的层级

```html
<navigator open-type="navigateBack" delta="1">返回</navigator>
```

::: warning 注意

为了简便，如果只是后退到上一页面，则可以省略 **delta** 属性，因为其默认值就是 1。

:::

或是调用 **wx.navigateBack()** 方法，可以返回上一页面或多级页面。其中 Object 参数对象可选的属性列表如下：

|   属性   |   类型   | 默认值 | 是否必选 |                         说明                          |
| :------: | :------: | :----: | :------: | :---------------------------------------------------: |
|  delta   |  number  |   1    |    否    | 返回的页面数，如果 delta 大于现有页面数，则返回到首页 |
| success  | function |        |    否    |                接口调用成功的回调函数                 |
|   fail   | function |        |    否    |                接口调用失败的回调函数                 |
| complete | function |        |    否    |   接口调用结束的回调函数（调用成功、失败都会执行）    |

::: code-group

```html[hidden.wxml]
<button bind:tap="goToBack">返回</button>
```

```javascript[hidden.js]
goToBack(){
  wx.navigateBack()
},
```

:::

### 导航传参

对于声明式导航，`<navigator>` 组件的 **url** 属性用来指定将要跳转到的页面的路径。同时，路径的后面还可以携带参数：

- 参数与路径之间使用 **?** 分隔

- 参数键与参数值用 **=** 相连

- 不同参数用 **&** 分隔

```html
<navigator url="/pages/hidden/hidden?number=1&name=lists">传递参数</navigator>
```

对于编程式导航，调用 **wx.navigateTo()** 方法跳转页面时，也可以携带参数。

::: code-group

```html[lists.wxml]
<button bind:tap="goToHiddenWithParameter">传递参数</button>
```

```javascript[lists.js]
goToHiddenWithParameter(){
    wx.navigateTo({
        url:'/pages/hidden/hidden?number=2&name=lists'
    })
},
```

:::

### 接收导航参数

通过声明式导航传参或编程式导航传参所携带的参数，可以直接在 **onLoad** 事件中获取。

```javascript
data: {
  query:{}//参数对象
},

onLoad(options) {
  this.setData({
      query:options
  })
},
```

## 页面事件

### 下拉刷新事件

**下拉刷新**是移动端的专有名词，指的是通过手指在屏幕上的下拉滑动操作，从而重新加载页面数据的行为。

启用下拉刷新有两种方式：

- **全局开启下拉刷新**: 在 `app.json` 的 window 节点中，将 enablePullDownRefresh 设置为 true

- **局部开启下拉刷新**: 在页面的 `.json`配置文件中，将 enablePullDownRefresh 设置为 true

```json
{
  //...
  "enablePullDownRefresh": true
  //...
}
```

在实际开发中，推荐使用第 2 种方式，为需要的页面单独开启下拉刷新的效果。

在页面的 `.js`文件中，通过 **onPullDownRefresh()** 函数即可**监听**当前页面的下拉刷新事件。

```javascript
onPullDownRefresh() {
  console.log("刷新")
},
```

当处理完下拉刷新后，下拉刷新的 loading 效果会一直显示，不会主动消失，所以需要手动隐藏 loading 效果。此时，调用 **wx.stopPullDownRefresh()** 方法可以**停止**当前页面的下拉刷新。

```javascript
onPullDownRefresh() {
  console.log("刷新")
  wx.stopPullDownRefresh()
},
```

### 上拉触底事件

**上拉触底**是移动端的专有名词，通过手指在屏幕上的上拉滑动操作，从而加载更多数据的行为。

在页面的 `.js`文件中，通过 **onReachBottom()** 函数即可**监听**当前页面的上拉触底事件。

```javascript
onReachBottom() {
  console.log("上拉触底")
},
```

可以在全局或页面的 `.json`配置文件中，通过 **onReachBottomDistance** 属性来配置上拉触底的距离。小程序默认的触底距离是 50px。

```json
{
  //...
  "onReachBottomDistance": 200
  //...
}
```

## tabBar

**tabBar** 是移动端应用常见的页面效果，用于实现多页面的快速切换。小程序中通常将其分为底部 tabBar 和顶部 tabBar

::: warning 注意

- tabBar 中只能配置最少 2 个、最多 5 个 tab 页签

- 当渲染顶部 tabBar 时，不显示 icon，只显示文本

:::

### tabBar 的 6 个组成部分

- **backgroundColor**: tabBar 的背景色

- **selectedIconPath**: 选中时的图片路径

- **borderStyle**: tabBar 上边框的颜色

- **iconPath**: 未选中时的图片路径

- **selectedColor**: tab 上的文字选中时的颜色

- **color**: tab 上文字的默认(未选中)的颜色

### tabBar 节点的配置项

|      属性       |   类型   | 必填 | 默认值 |                    描述                     |
| :-------------: | :------: | :--: | :----: | :-----------------------------------------: |
|    position     |  String  |  否  | bottom |    tabBar 的位置，仅支持 **bottom/top**     |
|   borderStyle   |  String  |  否  | black  | tabBar 上边框的颜色，仅支持 **black/white** |
|      color      | HexColor |  否  |        |        tab 上文字的默认(未选中)颜色         |
|  selectedColor  | HexColor |  否  |        |          tab 上文字的选中时的颜色           |
| backgroundColor | HexColor |  否  |        |               tabBar 的背景色               |
|      list       |  Array   |  是  |        |  tab 页签的列表，最少 2 个、最多 5 个 tab   |

### 每个 tab 项的配置选项

|       属性       |  类型  | 必填 |                          描述                          |
| :--------------: | :----: | :--: | :----------------------------------------------------: |
|     pagePath     | String |  是  |         页面路径，页面必须在 pages 中预先定义          |
|       text       | String |  是  |                    tab 上显示的文字                    |
|     iconPath     | String |  否  | 未选中时的图标路径；当 position 为 top 时，不显示 icon |
| selectedIconPath | String |  否  |  选中时的图标路径；当 position 为 top 时，不显示 icon  |

### 配置方法

打开 `app.json` 文件，和 **pages**、**window** 平级，新增 **tabBar**节点

```json
"tabBar": {
    "list": [
      {
        "pagePath": "pages/lists/lists",
        "text": "lists"
      },
      {
          "pagePath": "pages/logs/logs",
          "text": "logs",
          "iconPath": "/images/logs.png",
          "selectedIconPath": "/images/logs-selected.png"
      },
      {
          "pagePath": "pages/index/index",
          "text": "index"
      }
  ]
}
```

## 网络请求

::: warning 注意

出于安全性方面的考虑，小程序官方对数据接口的请求做出了如下两个限制：

- 只能请求 **HTTPS** 类型的接口

- 必须将接口的域名添加到信任列表中

:::

### 配置 request 合法域名

1.登录微信小程序管理后台

2.在管理->开发管理->开发设置->服务器域名

::: warning 注意

- 域名只支持 https 协议

- 域名不能使用 IP 地址或 localhost

- 域名必须经过 ICP 备案

- 服务器域名一个月内最多可申请 5 次修改

:::

### 跳过 request 合法域名校验

如果后端程序员仅仅提供了 http 协议的接口、暂时没有提供 https 协议的接口。此时为了不耽误开发的进度，我们可以在微信开发者工具中，临时开启 [**不校验合法域名、web-view（业务域名）、TLS 版本以及 HTTPS 证书**] 选项，跳过 request 合法域名的校验。

::: warning 注意

跳过 request 合法域名校验的选项，仅限在开发与调试阶段使用！

:::

### 关于跨域与 Ajax 的说明

跨域问题只存在基于浏览器的 Web 开发中。由于小程序的宿主环境不是浏览器，而是微信客户端，所以小程序中不存在跨域的问题。

Ajax 技术的核心是依赖于浏览器中的 XMLHttpRequest 对象，由于小程序的宿主环境是微信客户端，所以小程序中不能叫做“**发起 Ajax 请求**”，而是叫做“**发起网络请求**”。

### 发起 GET 请求

调用微信小程序提供的 **wx.request()** 方法，可以发起 GET 数据请求

```javascript
getData(){
    wx.request({
        url:"url",//要请求的实际url
        method:'GET',
        data:{
            name:'qwe'
        },//请求传递的参数
        success:(res)=>{
            console.log(res)
        },//成功后的回调函数
    })
},
```

### 发起 POST 请求

```javascript
postData(){
    wx.request({
        url:"url",//要请求的实际url
        method:'POST',
        data:{
            name:'qwe'
        },//请求传递的参数
        success:(res)=>{
            console.log(res)
        },//成功后的回调函数
    })
},
```

## 生命周期函数

### 什么是生命周期

在小程序中，生命周期分为两类，分别是：

- **应用生命周期** : 特指小程序从启动 -> 运行 -> 销毁的过程

- **页面生命周期** : 特指小程序中，每个页面的加载 -> 渲染 -> 销毁的过程

### 什么是生命周期函数

**生命周期函数**：是由小程序框架提供的内置函数，会伴随着生命周期，自动按次序执行。

**生命周期函数的作用**：允许程序员在特定的时间点，执行某些特定的操作。例如，页面刚加载的时候，可以在 **onLoad()** 生命周期函数中初始化页面的数据。

小程序中的生命周期分为两类，分别是：

- **应用的生命周期函数** : 特指小程序从启动 -> 运行 -> 销毁期间依次调用的那些函数

- **页面的生命周期函数** : 特指小程序中，每个页面从加载 -> 渲染 -> 销毁期间依次调用的那些函数

### 应用的生命周期函数

小程序的应用生命周期函数需要在 `app.js` 中进行声明，示例代码如下：

```javascript
App({
  //当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
  onLaunch() {
    console.log("小程序初始化完成");
  },
  //当小程序启动，或从后台进入前台显示，会触发 onShow
  onShow(opts) {
    console.log(opts.query);
  },
  //当小程序从前台进入后台，会触发 onHide
  onHide() {
    console.log("小程序进入后台");
  },
});
```

### 页面的生命周期函数

小程序的页面生命周期函数需要在页面的 `.js` 中进行声明，示例代码如下：

```javascript
Page({
  onLoad() {}, //监听页面加载，一个页面只调用1次
  onShow() {}, //监听页面显示
  onReady() {}, //监听页面初次渲染完成，一个页面只调用1次
  onHide() {}, //监听页面隐藏
  onUnload() {}, //监听页面卸载，一个页面只调用1次
});
```

### 使用案例

**onLoad()** 使用案例有：在页面加载时自动发起网络请求获取数据

```javascript
onLoad(){
  this.getData()//网络请求的封装函数
}
```

## 小程序 API

### 小程序 API 概述

小程序中的 API 是由宿主系统提供的，通过这些丰富的小程序 API，开发者可以方便的调用微信提供的能力，例如：获取用户信息、本地存储、支付功能等。

### 小程序 API 的 3 大分类

**事件监听 API**：以 **on** 开头的 API，用来监听某些事件的触发

**同步 API**：以 **Sync** 结尾的 API，执行结果可以通过函数返回值直接获取，如果执行出错会抛出异常

**异步 API**：类似于 jQuery 中的 **$.ajax(options)** 函数，需要通过 **success**、**fail**、**complete** 接收调用的结果
