# Day02 作业布置

## 一. 完成课堂所有的代码







## 二. JSX绑定事件，this绑定有哪些规则？如何给函数传递参数？

* this绑定规则

  * 普通绑定 - `onClick={this.btnClick}` - 在内部是独立函数调用,所以this为undefined
  * this绑定方式一: bind绑定 - `onClick={this.btnClick.bind(this)}`
  * this绑定方式二: ES6 class fields - `onClick={this.btnClick}` - `btnClick = () => {}`
  * this绑定方式三: 直接传入一个箭头函数 - `onClick={() => this.btnClick()}`

* 给函数传递参

  * event参数的传递 - `onClick={(event) => this.btn1Click(event)}`
  * 额外参数的传递 - `onClick={(event) => this.btn2Click(event, "http", 18)}`

  ```js
  btn1Click(event) {
    console.log(event);
  }
  btn2Click(event, name, age) {
    console.log(event, name, age);
  }
  ```





## 三. JSX的代码是如何被编译为React代码的？它的本质是进行什么操作？

* jsx是通过babel工具转换编译成React代码的
* 本质
  * jsx 仅仅只是 React.createElement(component, props, ...children) 函数的语法糖
  * 所有的jsx最终都会被转换成React.createElement的函数调用

`



## 四. 什么是虚拟DOM？虚拟DOM在React中起到什么作用？

* 什么是虚拟DOM？
  * Virtual DOM 是一种编程概念，UI以一种理想化或者说虚拟化的方式保存在内存中
  * Virtual DOM 本质上是 JavaScript 对象，是真实 DOM 的描述，⽤⼀个 JS 对象来描述⼀个 DOM 节点
  * 我们知道jsx转成React代码的本质是 - 转换成React.createElement的函数调用
  * 通过React.createElement的函数创建出来的`ReactElement`对象
  * React利用`ReactElement`对象组成了一个JavaScript的对象树 - JavaScript的对象树就是**虚拟DOM**
* 虚拟DOM在React中的作用
  * 虚拟DOM 通过diff算法 - 以最⼩的代价更新变化的视图
  * 跨平台渲染
  * 声明式编程 - 虚拟DOM帮助我们从命令式编程转到了声明式编程的模式
    * 你只需要告诉React希望让UI是什么状态
    * React来确保DOM和这些状态是匹配的
    * 不需要直接进行DOM操作，就可以从手动更改DOM、属性操作、事件处理中解放出来







## 五. 分析脚手架创建的React项目目录结构，并且删除文件后自己编写代码

* public
  * favicon.ico -- 应用程序顶部icon图标
  * index.html -- 应用的index.html入口文件
  * logo192.png -- 在manifest.json中被使用
  * logo512.png -- 在manifest.json中被使用
  * manifest.json -- 与web app配置相关
  * robots.text -- 指定搜索引擎可以或者不可以爬取那些信息
* src
  * App.css -- App组件相关样式
  * App.js -- App组件代码文件
  * App.test.js -- App组件的测试代码文件
  * index.css -- 全局样式文件
  * index.js -- 整个应用程序的入口文件
  * logo.svg -- 启动项目时,所看到的React图标
  * reportWebVitals.js -- 默认帮我们写好的 注册pwa相关的代码
  * setupTests.js -- 测试初始文件
* **pwa是什么?** 全称Progressive Web App，即渐进式WEB应用
  * 一个 PWA 应用首先是一个网页, 可以通过 Web 技术编写出一个网页应用
  * 随后添加上 App Manifest 和 Service Worker 来实现 PWA 的安装和离线等功能
  * 这种Web存在的形式，我们也称之为是 Web App
  * pwa可以将网页添加至主屏幕，点击主屏幕图标可以实现启动动画以及隐藏地址栏
  * pwa实现离线缓存功能，即使用户手机没有网络，依然可以使用一些离线功能
  * pwa实现了消息推送





## 六. 选做：寻找之前课程中的一些案例，尝试使用React来实现































































































