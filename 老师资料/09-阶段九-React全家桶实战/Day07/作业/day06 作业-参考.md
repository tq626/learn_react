# Day06 作业布置

## 一. 完成课堂所有的代码







## 二. React中编写CSS的方式有哪些？各自有什么优缺点？
* 内联样式:
  * 优点:内联样式, 样式之间不会有冲突;可以动态获取当前state中的状态
  * 缺点:写法上都需要使用驼峰标识;某些样式没有提示;大量的样式, 代码混乱;某些样式无法编写(比如伪类/伪元素)
* 普通的css文件:
  * 优点:单独的css文件方便管理
  * 缺点:所有的样式都是全局的,样式之间会相互层叠掉
* css modules:
  * 优点: 样式文件需要修改成 .module.css/.module.less/.module.scss;引入后局部生效,样式直接不会相互影响
  * 缺点:引用的类名，不能使用连接符(.home-title)，在JavaScript中是不识别的;所有的className都必须使用{style.className} 的形式来编写;不方便动态来修改某些样式，依然需要使用内联样式的方式
* CSS in JS:通过JavaScript来为CSS赋予一些能力，包括类似于CSS预处理器一样的样式嵌套、函数定义、逻辑复用、动态修 改状态等等



## 三. styled-components有哪些技术特点？可以完成哪些功能？
* styled-components是最流行的CSS-in-JS库
* styled-components的本质是通过函数的调用，最终创建出一个组件:
  * 这个组件会被自动添加上一个不重复的class
  * styled-components会给该class添加相关的样式
  
  
* 支持类似于CSS预处理器一样的样式嵌套:
  * 支持直接子代选择器或后代选择器，并且直接编写样式
  * 可以通过&符号获取当前元素
  * 直接伪类选择器、伪元素等
* 支持传递props
* 支持样式的继承
* styled设置主题

     




## 四. 什么是redux？redux的核心思想是什么？
* Redux是JavaScript的状态容器，提供了可预测的状态管理
* Redux的核心理念:
  * store:用来存储状态
  * action:通过派发(dispatch)action来更新数据
  * reducer:纯函数,将传入的state和action结合起来生成一个新的state
* Redux的三大原则:
  * 单一数据源:整个应用程序的state被存储在一颗object tree中，并且这个object tree只存储在一个 store 中;Redux并没有强制让我们不能创建多个Store，但是那样做并不利于数据的维护;单一的数据源可以让整个应用程序的state变得方便维护、追踪、修改;
  * State是只读的:唯一修改State的方法一定是触发action，不要试图在其他地方通过任何的方式来修改State;这样就确保了View或网络请求都不能直接修改state，它们只能通过action来描述自己想要如何修改state; 这样可以保证所有的修改都被集中化处理，并且按照严格的顺序来执行，所以不需要担心race condition(竟态)的问题;
  * 使用纯函数来执行修改:通过reducer将 旧state和 actions联系在一起,并且返回一个新的State;随着应用程序的复杂度增加，我们可以将reducer拆分成多个小的reducers,分别操作不同state tree的一部分; 但是所有的reducer都应该是纯函数，不能产生任何的副作用;





## 五. redux如何进行文件，每个文件是什么作用？
* 将store、reducer、action、constants拆分成一个个单独文件
  * index.js文件:初始化store
  * reducer.js文件:初始化state,创建reducer函数
  * actionCreators.js文件:创建action的函数
  * constants.js文件:定义action中的type常量







## 六. redux如何和react结合在一起？如何共享数据，如何进行action操作？
* 在 componentDidMount 中订阅数据的变化，当数据发生变化时通过setState更新UI
* 在发生点击事件时，调用store的dispatch来派发对应的action
































































































