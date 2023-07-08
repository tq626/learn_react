# Day05 作业布置

## 一. 完成课堂所有的代码





## 二. 什么是受控组件和非受控组件，如何使用？

* 受控组件

  * 在 React 中，可变状态通常保存在组件的 state 属性中，并且只能通过使用 setState()来更新
  * 我们将两者结合起来，使React的state成为“唯一数据源”
  * 渲染表单的 React 组件还控制着用户输入过程中表单发生的操作
  * 被 React 以这种方式控制取值的表单输入元素就叫做“受控组件”

  ```jsx
  this.state = {
    message: ""
  }
  changeInput(event) {
    console.log(event.target.value)
    this.setState({ message: event.target.value })
  }
  
  render(){
     <input type="text" value={message} onChange={(event) => this.changeInput(event)} />
  }
  ```

* 非受控组件

  * 在受控组件中，表单数据是由 React 组件来管理的
  * 非受控组件中，表单数据将交由 DOM 节点来处理

  ```jsx
  this.messageRef.current.value
  
  // 在非受控组件中通常使用defaultValue来设置默认值
  render(){
      <input type="text" defaultValue={message} ref={this.messageRef} />
  }
  ```





## 三. 什么是高阶组件？高阶组件在React开发中起到什么作用？

* 高阶函数: (满足一下调教之一) -- filter、map、reduce都是高阶函数
  * 接受一个或多个函数作为输入
  * 输出一个函数
* 高阶组件: Higher-Order Components，简称为 HOC
  * 高阶组件是参数为组件，返回值为新组件的函数 -- 就是传入一个组件,对这个组件进行一些功能的增强,在返回出来新的组件
  * 注意: 首先 高阶组件 本身不是一个组件，而是一个函数 其次，这个函数的参数是一个组件，返回值也是一个组件
  * HOC 是 React 中用于复用组件逻辑的一种高级技巧。HOC 自身不是 React API 的一部分，它是一种基于 React 的组合特性而形成的设计模式

- 高级组件应用的场景
  - props的增强
  - 利用高阶组件来共享Context
  - 渲染判断鉴权
  - 生命周期劫持
  - ....



## 四. 什么是Fragment，有什么作用？

- Fragment 允许将子列表分组，而无需向 DOM 添加额外节点；
- 它的简写看起来像空标签  <> </>
- 如果我们需要在Fragment中添加key，那么就不能使用短语法



## 五. 什么是React的严格模式，在开发中有什么作用？

严格模式

- StrictMode 是一个用来突出显示应用程序中潜在问题的工具：
- 与 Fragment 一样，StrictMode 不会渲染任何可见的 UI；
- 它为其后代元素触发额外的检查和警告；

严格模式作用

- 识别不安全的生命周期：
- 使用过时的ref API
- 检查意外的副作用 这个组件的constructor会被调用两次； 这是严格模式下故意进行的操作，让你来查看在这里写的一些逻辑代码被调用多次时，是否会产生一些副作用； 在生产环境中，是不会被调用两次的；
- 使用废弃的findDOMNode方法 在之前的React API中，可以通过findDOMNode来获取DOM，不过已经不推荐使用了，可以自行学习演练一下
- 检测过时的context API 早期的Context是通过static属性声明Context对象属性，通过getChildContext返回Context对象等方式来使用Context的



## 六. React中如何实现过渡动画？常见的过渡动画组件有哪些？

- React社区为我们提供了react-transition-group用来完成过渡动画

常见的过渡动画组件

- Transition   在前端开发中，一般是结合CSS来完成样式，所以比较常用的是CSSTransition；
- CSSTransition   在前端开发中，通常使用CSSTransition来完成过渡动画效果
- SwitchTransition   两个组件显示和隐藏切换时，使用该组件
- TransitionGroup   将多个动画组件包裹在其中，一般用于列表中元素的动画；































































































