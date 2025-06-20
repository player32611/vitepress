# 常用函数

::: danger 警告
该页面尚未完工!
:::

## 目录

[[toc]]

## 随机数

### randomise()

这个函数将种子设置为一个随机值。如果你想用真随机进行测试，你应该在游戏开始时调用这个函数。该函数将返回新的随机种子值（一个无符号的32位整数）。

### irandom(n)

它将随机返回一个从0到n的数字（含），只返回整数。

###  random(n)

这个函数适用于不需要返回整数的随机数生成。

### irandom_range(n1, n2)

该函数将返回一个在给定范围内（包括）的随机整数值。

### random_range(n1, n2)

这个函数返回一个在指定范围内的随机数，这个返回值不需要是一个整数。

### choose(val0, val1, val2... max_val)

这个函数在给定的所有值中随机选择一个

### random_get_seed()

用于获取当前的随机数种子。

### random_set_seed(val)

用于设置当前随机数种子。

### move_random(hsnap, vsnap)

通过这个函数，你可以将实例设置到room中的任何位置，但是要对准一个 "看不见的"网格。因此，hsnap和vsnap的值为32，将把实例设置为一个随机的位置，该位置与32x32的方格对齐。你可以把这些值设置为1，以获得room中的任何位置。

## 三角函数

### degtorad(deg)

这个函数使用公式将度数转换为弧度。

### radtodeg(rad)

这个函数用公式将弧度转换为度数。

### sin(val)

这个函数计算val的sin值，取值单位是弧度。

### dsin(val)

这个函数计算val的sin值，取值单位是度。

### arcsin(x)

返回x的反正弦，这只接受-1和1之间的值，返回的数值是弧度。

### darcsin(x)

返回x的反正弦，只接受-1和1之间的数字，函数返回的是度数。

### cos(val)

这个函数计算val的cos值，取值单位是弧度。

### dcos(val)

这个函数计算val的cos值，取值单位是度。

### arccos(x)

返回x的反余弦，只接受-1和1之间的数字，返回的数值是弧度。

### darccos(val)

返回x的反余弦，只接受-1和1之间的数字，返回的是度数。

### tan(val)

这个函数计算val的tan值，取值单位是弧度。

### dtan(val)

这个函数计算val的tan值，取值单位是度。

### arctan(x)

返回x的反切值，接受任何数字，返回的数值是弧度。

### darctan(x)

返回x的反正切值，接受任何数字，返回的是度数。

### arctan2(y, x)

这个函数返回一个角度y/x的反正切，返回的数值是弧度。

### darctan2(y, x)

该函数返回一个角度y/x的反正切，返回的值是度数。

## 基于矢量的函数

### point_direction(x1, y1, x2, y2)

这个函数返回由指定分量[x1,y1]和[x2,y2]组成的矢量的方向。

### point_distance(x1, y1, x2, y2)

这个函数返回由指定分量[x1,y1]和[x2,y2]组成的向量的长度。

### point_distance_3d(x1, y1, z1, x2, y2, z2)

这个函数接收提供的矢量分量，并返回矢量的长度（距离）。

### distance_to_object(obj)

这个函数计算从调用实例的边界框的边缘到指定的最近的实例的最近边缘的距离

### distance_to_point(x, y)

这个函数计算从调用实例的边界框的边缘到room中指定的x/y位置的距离

### dot_product(x1, y1, x2, y2)

用于计算两个向量的点积（也称为标量积或内积）。

### dot_product_3d(x1, y1, z1, x2, y2, z2)

用于计算两个三维向量的点积（也称为标量积或内积）。

### dot_product_normalised(x1, y1, x2, y2)

用于计算两个向量的归一化点积。

### dot_product_3d_normalised(x1, y1, z1, x2, y2, z2)

用于计算两个三维向量的归一化点积。

### angle_difference(dest, src)

用于计算两个角度之间的差异。

### lengthdir_x(len, dir)

这个函数用来获取从起点到方向为 "dir" 的位置 "len" 像素的x分量。

### lengthdir_y(len, dir)

这个函数用来获取从起点到方向为 "dir" 的位置 "len" 像素的y分量。