## 技术

### HTML
`HTML5`、`SVG`

### CSS
`CSS3`、`Sass`、`Flexbox layout`、`Responsive web design`

### JavaScript
`ES6`、`DOM`、`Module`、`Promise`、`Async/Await`、`Vue`、`MVVM`、`jQuery`、`Mocha`、`Nodejs`

### Development
`Webpack`、`Gulp`、`Babel`、`Postcss`、`Git`、`SVN`、`NPM`、`HTTP/HTTPS`

### Software & Tools
`SourceTree`、`Chrome develop tool`、`Charles`、`VSCode`、`Sublime Text`、`Photoshop`、`Sketch`

## 项目

### 远程构建脚手架 Fung

Fung 是一个能从远程仓库拉取模板并快速构建项目的脚手架，用户通过填写或选择选项来定制化自己的项目。

* 通过 git 命令追踪远程仓库的分支，并保持本地版本库的远程追踪分支与远程仓库的一致，使得准确获得远程仓库的上的所有模板。
* 通过配置文件进行问题配置，在构建的时候显示让用户填写或选择，填写或选择的结果将替换文件中的占位符。
* 对拉取到本地的模板进行广度遍历和深度遍历，过滤文件并替换占位符，拷贝到指定目录。

### HTML5打碟器

通过拖动音频选择播放，可控制音乐的播放停止，音量大小，播放速度，通过转动唱片可模拟摩擦声并改变唱片进度。

* 通过 HTML5音频API 处理音频源，变化音量大小、声调和播放速度。
* 通过 HTML5拖放API 拖动音频源，实现拖动唱片选择播放的动画。

### 专题模板

根据运营的配置选择的组件拼接成一个专题页面。

* 使用 Vue.js + Vuex 搭建模板。
* 根据模板信息接口返回决定动态加载并渲染指定的组件。
* 组件内的数据使用 data 进行数据绑定，组件间的数据共享使用 Vuex 实现。

### 手Y直播间竞猜玩法

在手Y的游戏模板下为主播提供竞猜工具，主播开启竞猜后，用户可以投注参与竞猜获取碎钻，用于抽奖。

* 投注过程有多个状态：进行中、封盘、流局、结束，通过广播进行状态的切换，赔率和比例条的变化。
* 模拟MVVM的单向数据绑定和双向数据绑定，根据广播的状态切换不同UI，和在不同模块下共用数据。
* 使用 Promise 和 Async/Await 控制多种不同类型的抽奖动画。

### 技术博客

[segmentfault](https://segmentfault.com/u/leechikit/articles)

获得 SegmentFault 2017年第三季度 Top Writer。