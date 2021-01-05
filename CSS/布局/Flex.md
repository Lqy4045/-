# Flex 布局

## 开启 Flex 布局

在布局盒子外添加一个`display:flex`,此时当前盒子里面的子元素就具有了主轴和竖轴的概念，接下来，所有的自盒子都会按照这些轴的方向上排列

## Flex 属性

> 作用在父盒子上的属性

1. `flex-diretion`（决定主轴方向）

- `row` - （默认）水平方向，起点在左端
- `row-reverse` - 水平方向，起点在右端
- `column` - 垂直方向，起点在上沿
- `column-reverse` - 垂直方向，起点在下沿

2. `flex-wrap`（一条轴线排不下时如何解决）

- `nowrap` - （默认）不换行
- `wrap` - 换行，第一行在上方
- `wrap-reverse` - 换行，第一行在下方

3. `flex-flow`（flex-flow = flex-direction + flex-wrap。即 flex-flow 是这两个属性的合集）

- `row nowrap` - （默认）水平方向，起点在左端，不换行

4. `justify-content` （主轴方向排序）

- `flex-start` - 左边对齐
- `flex-end` - 右边对齐
- `center` - 居中对齐
- `space-between` - 两端对齐，空格在中间
- `space-around` - 空格环绕

5. `align-item` （定义竖轴方向排列顺序）

- `flex-start` - 顶部对齐，即文字图片等顶部同一条线上
- `flex-end` - 底部对其，即文字图片等底部在同一条线上
- `center` - 中间对其，即文字图片不管多高，都拿它们的中间放在同一条线上
- `stretch` - 将文字图片充满整个容器的高度，强制统一
- `baseline` - 将每项的第一行文字做统一在一条线上对齐

6. `align-content`（定义多根轴线的对齐方式。如果只有一根轴线（只有一行），该属性不起作用）

- `flex-start` - 这几行顶部对齐
- `flex-end` - 这几行底部对齐
- `center` - 这几行居中对齐
- `stretch` - 这几行进行扩展或者缩放，从而填满容器高
- `space-between` - 这几行中间使用空格进行填充
- `space-around` - 这几行两边及中间进行填充

> 作用在子盒子上的属性

1. `order` （属性定义项目的排列顺序。数值越小，排列越靠前，默认为 0）

2. `flex-grow`（属性定义项目的放大比例，默认为 0，即如果存在剩余空间，也不放大。）
3. `flex-shrink`（属性定义了项目的缩小比例，默认为 1，即如果空间不足，该项目将缩小。）
4. `flex-basis`（属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为 auto，即项目的本来大小）
5. `flex`（flex-grow，flex-shrink，flex-basis 的缩写，默认 1，1，auto）
6. `align-self`（覆盖父元素的 align-item，自己独自设计）
