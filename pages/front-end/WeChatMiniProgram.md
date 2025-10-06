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

### WXML 模板

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

### WXSS 样式

WXSS(WeiXin Style Sheets) 是一套样式语言，用于描述 WXML 的组件样式，类似于网页开发中的 CSS。

**WXSS 和 CSS 的区别**：

新增了 rpx 尺寸单位：CSS 中需要手动进行像素单位换算，例如 rem;WXSS 在底层支持新的尺寸单位 rpx，在不同大小的屏幕上小程序会自动进行换算。

提供了全局的样式和局部样式：项目根目录中的`app.wxss`会作用域所有小程序页面；局部页面的`.wxss`样式仅对当前页面生效。

WXSS 仅支持部分 CSS 选择器：.class 和#id、element、并集选择器、后代选择器、::after 和::before 等伪类选择器。

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

## JSON 配置文件

JSON 是一种数据格式，通过不同的 `.json` 文件，可以对小程序项目进行不同级别的配置。

小程序项目中由 4 种 json 配置文件分别是: 项目根目录中的`app.json`配置文件、项目根目录中的`project.config.json`配置文件、项目根目录中的`sitemap.json`配置文件、每个页面文件夹中的`.json`配置文件。

### app.json 文件

`app.json` 是当前小程序的全局配置，包括了小程序的所有页面路径、窗口外观、界面表现、底部 tab 等。

**pages**: 用来记录当前小程序所有页面的路径

**window**: 全局定义小程序所有页面的背景色、文字颜色等

**style**: 全局定义小程序组件所使用的样式版本

**sitemapLocation**: 用来指明 `sitemap.json` 的位置

### project.config.json 文件

`project.config.json` 是项目配置文件，用来记录我们对小程序开发工具所做的个性化配置。

**settings**: 保存了编译相关的配置

**projectname**: 保存的是项目名称

**appid**: 保存的是小程序的账号 ID

### sitemap.json 文件

微信现已开发小程序内搜索，效果类似于 PC 网页的 SEO。`sitemap.json'文件用来配置小程序页面是否允许微信索引。

当开发者允许微信索引时，微信会通过爬虫的形式，为小程序的页面内容建立索引。当用户的搜索关键字和页面的索引匹配成功的时候，小程序的页面将可能展示在搜索结果中。

sitemap 的索引提示默认是开启的，如需要关闭 sitemap 的索引提示，可在小程序项目配置文件`project.config.json`中 **setting** 中配置字段 **checkSiteMap** 为 **false**。

### 页面的.json 配置文件

小程序中的每一个页面，可以使用`.json`文件来对本页面的窗口外观进行配置，**页面中的配置项会覆盖`app.json`的 window 中相同的配置项**。

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

## 组件

小程序中的组件是由宿主环境提供的，开发者可以基于组件快速搭建出漂亮的页面结构。官方把小程序的组件分为了 9 大类，分别是：**视图容器**、**基础内容**、**表单组件**、导航组件、媒体组件、map 地图组件、canvas 画布组件、开放能力与无障碍访问。

## 常用的视图容器类组件

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

## 常用的基础内容组件

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

## 其它常用组件

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

## 小程序 API

### 小程序 API 概述

小程序中的 API 是由宿主系统提供的，通过这些丰富的小程序 API，开发者可以方便的调用微信提供的能力，例如：获取用户信息、本地存储、支付功能等。

### 小程序 API 的 3 大分类

**事件监听 API**：以 **on** 开头的 API，用来监听某些事件的触发

**同步 API**：以 **Sync** 结尾的 API，执行结果可以通过函数返回值直接获取，如果执行出错会抛出异常

**异步 API**：类似于 jQuery 中的 **$.ajax(options)** 函数，需要通过 **success**、**fail**、**complete** 接收调用的结果
