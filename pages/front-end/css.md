# CSS

::: danger 警告
该页面尚未完工!
:::

## 目录

[[toc]]

## 常用属性

### background

background 简写属性在一个声明中设置所有的背景属性，可以设置如下属性：background-color、background-position、background-size、background-repeat、background-origin、background-clip、background-attachment、background-image。如果不设置其中的某个值，也不会出问题。

````css
{ 
    background: #00FF00 url(bgimage.gif) no-repeat fixed top;
}
````

### border 

border 简写属性在一个声明设置所有的边框属性。可以按顺序设置如下属性：border-width、border-style（必需）、border-color。如果不设置其中的某个值，也不会出问题。

````css
{
    border:5px solid red;
}
````

### color

color 属性规定文本的颜色。

````css
{
    color:red;
}
{
    color:#00ff00;
}
{
    color:rgb(0,0,255);
}
````

### cursor

cursor 属性规定要显示的光标的类型（形状）。其常用属性值如下：

|     属性    |      值                         |
|:-----------:| :-----------------------------: |
|url|需使用的自定义光标的 URL。|
|default|默认光标（通常是一个箭头）|
|auto|默认。浏览器设置的光标。|
|crosshair|光标呈现为十字线。|
|pointer|光标呈现为指示链接的指针（一只手）|

````css
{
    cursor:pointer;
}
````

### display

display 属性规定元素应该生成的框的类型。常用属性值如下：

|属性|值|
|:--------:| :---------: |
|none|此元素不会被显示。|
|block|此元素将显示为块级元素，此元素前后会带有换行符。|
|inline|默认。此元素会被显示为内联元素，元素前后没有换行符。|
|inline-block|行内块元素。（CSS2.1 新增的值）|

````css
{
    display:none;
}
````

### float

float 属性定义元素在哪个方向浮动。以往这个属性总应用于图像，使文本围绕在图像周围，不过在 CSS 中，任何元素都可以浮动。浮动元素会生成一个块级框，而不论它本身是何种元素。

**注释**：假如在一行之上只有极少的空间可供浮动元素，那么这个元素会跳至下一行，这个过程会持续到某一行拥有足够的空间为止。

````css
{
    float:left;
}
{
    float:right;
}
````

### font

font 简写属性在一个声明中设置所有字体属性，可以按顺序设置如下属性：font-style、font-variant、font-weight、font-size/line-height、font-family。可以不设置其中的某个值，未设置的属性会使用其默认值。

````css
{
    font:italic arial,sans-serif;
}
````

### height

height 属性设置元素的高度，在内容区外面可以增加内边距、边框和外边距。

````css
{
    height:100px;
}
````

### margin

margin 简写属性在一个声明中设置所有外边距属性。该属性可以有 1 到 4 个值。

````css
{
    margin:10px 5px 15px 20px;//上外边距是10px，右外边距是5px，下外边距是15px，左外边距是20px。
}
{
    margin:10px 5px 15px;//上外边距是 10px，右外边距和左外边距是 5px，下外边距是 15px。
}
{
    margin:10px 5px;//上外边距和下外边距是 10px，右外边距和左外边距是 5px。
}
{
    margin:10px;//所有 4 个外边距都是 10px。
}
````

### opacity

opacity 属性设置元素的不透明级别，从 0.0 （完全透明）到 1.0（完全不透明）。

````css
{
    opacity:0.5;
}
````

### overflow

overflow 属性规定当内容溢出元素框时发生的事情，其属性值如下：

|属性|值|
|:--------:| :---------: |
|visible|默认值。内容不会被修剪，会呈现在元素框之外。|
|hidden|内容会被修剪，并且其余内容是不可见的。|
|scroll|内容会被修剪，但是浏览器会显示滚动条以便查看其余的内容。|
|auto|如果内容被修剪，则浏览器会显示滚动条以便查看其余的内容。|
|inherit|规定应该从父元素继承 overflow 属性的值。|

````css
{
    overflow:hidden;
}
````

### padding

padding 简写属性在一个声明中设置所有内边距属性，与margin类似。

````css
{
    padding:10px 5px 15px 20px;
}
````

### position

position 属性规定元素的定位类型，其属性值如下：

|属性|值|
|:--------:| :---------: |
|absolute|生成绝对定位的元素，相对于 static 定位以外的第一个父元素进行定位。元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。|
|fixed|生成绝对定位的元素，相对于浏览器窗口进行定位。元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。|
|relative|生成相对定位的元素，相对于其正常位置进行定位。因此，"left:20" 会向元素的 LEFT 位置添加 20 像素。|
|static|默认值。没有定位，元素出现在正常的流中（忽略 top, bottom, left, right 或者 z-index 声明）。|
|inherit|规定应该从父元素继承 position 属性的值。|

````css
{
    position:fixed;
}
````

### resize

resize 属性规定是否可由用户调整元素的尺寸，长用于设置textarea。

**注释**：如果希望此属性生效，需要设置元素的 overflow 属性，值可以是 auto、hidden 或 scroll。

|属性|值|
|:--------:| :---------: |
|none|用户无法调整元素的尺寸。|
|both|用户可调整元素的高度和宽度。|
|horizontal|用户可调整元素的宽度。|
|vertical|用户可调整元素的高度。|

````css
{
    resize:none;
}
````

### text-align

text-align 属性规定元素中的文本的水平对齐方式。

|属性|值|
|:--------:| :---------: |
|left|把文本排列到左边。默认值：由浏览器决定。|
|right|把文本排列到右边。|
|center|把文本排列到中间。|
|justify|实现两端对齐文本效果。|

````css
{
    text-align:center;
}
````

### width

width 属性设置元素的宽度。

````css
{
    weight:100px;
}
````

## Flex布局

## Grid布局

## 选择器

## 更多信息

更多信息请点击[此处](https://www.w3school.com.cn/cssref/index.asp).