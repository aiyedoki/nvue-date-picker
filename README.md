# date-picker 年月选择器

> uni-app组件，只能配合uni-app项目进行使用。

从底部弹起的滚动选择器, 用于选择年月格式的日期。


[![jjUoNR.jpg](https://s1.ax1x.com/2022/07/24/jjUoNR.jpg)](https://imgtu.com/i/jjUoNR)



## 平台兼容性

| Vue3 | Android | IOS  | 微信小程序 | H5   |
| ---- | ------- | ---- | ---------- | ---- |
| √    | √       | √    | √          | √    |

# 

# 安装

1、[进入Releases发布页](https://github.com/aiyedoki/nvue-date-picker/releases/tag/publish)，下载 `nvue-date-picker-1.1.7z` 压缩包。

​	（ 不建议在DCloud插件市场下载，代码可能报错。）

2、解压后将 date-picker 文件夹复制到项目的 /components 目录内。

3、运行下列命令安装 day.js ,如已安装可跳过

```
$ npm install dayjs --save
```



# 使用方法

```html
<date-picker>
	<button> 测试按钮 </button>
</date-picker>
```



# 代码说明

> `<picker></picker>`用于从底部弹起的滚动选择器。

标签属性说明：

| 属性名   | 类型                              | 说明                                                         |
| -------- | --------------------------------- | ------------------------------------------------------------ |
| range    | 二维 Array / 二维 Array＜Object＞ | 数组的每项表示每列的数据。<br/>默认从`getRange()`方法获取年月选项。 |
| value    | Array                             | 索引数组，每一项的值表示选择了对应项中日期。<br/>例如选中2022年7月是 [ 22, 6 ]<br/>例如选中2009年1月是 [ 9, 0 ] |
| @change  | EventHandle                       | value 改变时触发 change 事件。<br/>event.detail = {value: value} |
| @cancel  | EventHandle                       | 取消选择时触发                                               |
| disabled | Boolean                           | 是否禁用。默认值：false                                      |



# Authors && Contributors

[kidoki](https://github.com/aiyedoki)
