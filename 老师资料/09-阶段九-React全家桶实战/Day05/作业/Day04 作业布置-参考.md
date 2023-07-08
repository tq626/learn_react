# Day04 作业布置

## 一. 完成课堂所有的代码







## 二. 非父子组件的通信有哪些方式？分别是什么作用？

- Context
  - 1.创建Context
  - 2.使用<context.Provider>包裹后代组件
  - 3.在要使用的后代xxxx组件引入context
    - xxxx.contextType = context
    - 在render方法中可以通过this.context拿到传递过来的值
- 事件总线EventBus

* Redux







## 三. 面试题：React的setState是同步的还是异步的？React18中是怎么样的？

* 在 React 中，可变状态通常保存在组件的 state 属性中，并且只能通过使用 setState()来更新

* React的setState是异步的 -- 不要指望在调用 `setState` 之后，`this.state` 会立即映射为新的值

* 在react18之前, 在setTimeout,Promise等中操作setState, 是同步操作

* 在react18之后, 在setTimeout,Promise等中操作setState,是异步操作(批处理)

  * 如果需要同步的处理怎么办呢? 需要执行特殊的`flushSync`操作

* 为什么要将setState设计成异步的

  * 首先,若是将setState设计成同步的,在`componentDidMount`中请求多个网络请求时,会堵塞后面的网络请求

  ```js
  componentDidMount() {
    // 网络请求一 : this.setState
    // 网络请求二 : this.setState
    // 网络请求三 : this.setState
    // 如果this.setState设计成同步的,会堵塞后面的网络请求
  }
  ```

  * 一. setState设计为异步，可以显著的提升性能

    * 如果每次调用 setState都进行一次更新，那么意味着render函数会被频繁调用，界面重新渲染，这样效率是很低的
    * 最好的办法应该是**获取到多个更新，之后进行批量更新**

    ```js
    // 在一个函数中有多个setState时,
    this.setState({}) --> 先不会更新,而是会加入到队列(queue)中 (先进先出)
    this.setState({}) --> 也加入到队列中
    this.setState({}) --> 也加入到队列中
    // 这里的三个setState会被合并到队列中去
    // 在源码内部是通过do...while从队列中取出依次执行的
    ```

  * 二: 如果同步更新了state，但是还没有执行render函数，那么state和props不能保持同步





## 四. 性能优化:什么是SCU优化？类组件和函数组件分别如何进行SCU的优化？

* **shouldComponentUpdate -- SCU** -- React提供给我们的声明周期方法

* SCU优化就是 一种巧妙的技术,用来减少DOM操作次数,具体为当React元素没有更新时,不会去调用render()方法

* 可以通过`shouldComponentUpdate`来判断`this.state`中的值是否改变

  ```js
  shouldComponentUpdate(nextProps, nextState) {
     const {message, counter} = this.state
     if(message !== nextState.message || counter !== nextState.counter) {
       return true
     }
     return false 
   }
  ```

* React已经帮我们提供好SCU优化的操作

  * 类组件: 将class继承自`PureComponent`
  * 函数组件: 使用一个高阶组件`memo`

  ```js
  import {mome} from 'react'
  
  const HomeFunc = mome(function(props) {
    console.log("函数式组件")
    return (
      <h4>函数式组件: {props.message}</h4>
    )
  })
  
  export default HomeFunc
  ```





## 五. React为什么要强调不可变的力量？如何实现不可变的力量？

* 不可变的力量: 不要直接去修改this.state中的值(主要指对象),若是想修改的话,应该是将这整个值全部修改掉
  * 注意: 值类型,在修改的时候,本身就全部替换掉了,所以不需要其他操作,直接改就可以
* 实现: 将对象浅拷贝赋值给一个新的变量,在将这个新的变量赋值给this.state中的值





## 六. React中获取DOM的方式有哪些？

* ref获取DOM

  ```jsx
  getDOM() {
  // 方式一: 在react元素上绑定ref字符串 - 这种方式react已经不推荐了
  // console.log(this.refs.http)
  
  // 方式二: 提前创建好ref对象, createRef(), 将创建出来的对象绑定到元素(推荐)
  // console.log(this.titleRef.current)
  
  // 方式三: 传入一个回调函数, 在对应的元素被渲染之后, 回调函数被执行, 并且将元素传入(16.3之前的版本)
  // console.log(this.titleEl)
  }
  <h3 ref="http">大大怪将军</h3>
  <h3 ref={this.titleRef}>小小怪下士</h3>
  <h3 ref={el => this.titleEl = el}>瑞克</h3>
  <button onClick={() => this.getDOM()}>获取DOM</button>
  ```

* ref获取组件实例 -- `createRef`

  ```jsx
  import React, { PureComponent, createRef } from 'react'
  
  constructor() {
      super()
      this.state = {}
      this.HWRef = createRef()
  }
  
  getComponent() {
      console.log(this.HWRef.current)
      this.HWRef.current.test()
  }
  
  <HelloWorld ref={this.HWRef} />
  <button onClick={() => this.getComponent()}>获取组件实例</button>
  ```

* ref获取函数组件 -- 函数式组件是没有实例的，所以无法通过ref获取他们的实例 -- `React.forwardRef`

  ```jsx
  import React, { PureComponent, createRef, forwardRef } from 'react'
  
  const HelloWorld = forwardRef(function(props, ref) {
    return (
      <div>
        <h2 ref={ref}>函数组件</h2>
        <h4>大大怪将军</h4>
      </div>
    )
  })
  constructor() {
      super()
      this.state = {}
      this.HWRef = createRef()
  }
  
  getComponent() {
      console.log(this.HWRef.current)
  }
  
  render() {
      return (
        <div>
          <HelloWorld ref={this.HWRef} />
          <button onClick={() => this.getComponent()}>获取DOM</button>
        </div>
      )
  }
  ```

  



## 七.性能优化:React的diff算法和key的作用

* React的渲染流程

  * 在render函数中返回jsx, jsx会创建出`ReactElement`对象(通过React.createElement的函数创建出来的)
  * `ReactElement`最终会形成一颗树结构, 这颗树结构就是vDOM
  * React会根据这样的vDOM渲染出真实DOM

* React更新流程

  * props/state发生改变
  * render函数重新执行
  * 产生新的DOM树结构
  * 新旧DOM树 进行diff算法
  * 计算出差异进行更新
  * 最后更新到真实DOM

  ```js
  什么是diff算法?
      diff算法并非React独家首创,但是React针对diff算法做了自己的优化,使得时间复杂度优化成了O(n)
  对比两颗树结构,然后帮助我们计算出vDOM中真正变化的部分,并只针对该部分进行实际的DOM操作,而非渲染整个页面,从而保证了每次操作后页面的高效渲染。
  ```

* React在props或state发生改变时，会调用React的render方法，会创建一颗不同的树

* React需要基于这两颗不同的树之间的差别来判断如何有效的更新UI

* 如果一棵树参考另外一棵树进行完全比较更新，那么即使是最先进的算法，该算法的**复杂程度为 O(n³)**，其中 n 是树中元素的数量

* 如果在 React 中使用了该算法，那么展示 1000 个元素所需要执行的计算量将在十亿的量级范围

* 这个开销太过昂贵了，于是，React对这个算法进行了优化，**将其优化成了O(n)**

  * 同层节点之间相互比较，不会垮节点比较(一旦某个节点不同,那么包括其后代节点都会被替换)

    ![Snipaste_2022-09-02_15-53-43](E:\Typora-文件\Typora图片位置\Snipaste_2022-09-02_15-53-43.png)

  * 不同类型的节点，产生不同的树结构(当根节点为不同类型的元素时，React 会拆卸原有的树并且建立起新的树)

  * 开发中，可以通过key属性标识哪些子元素在不同的渲染中可能是不变的

* 在遍历列表时，总是会提示一个警告，让我们加入一个key属性，当子元素拥有 key 时，React 使用 key 来匹配原有树上的子元素以及最新树上的子元素。

  * 在最后位置插入数据 -- 这种情况，有无key意义并不大
  * 在前面插入数据 -- 这种做法，在没有key的情况下，所有的li都需要进行修改
  * 在中间插入元素 -- 新增2014, key为2016元素仅仅进行位移，不需要进行任何的修改

  ```jsx
  <ul>
    <li key="2015">Duke</li>
    <li key="2016">Villanova</li>
  </ul>
  
  <ul>
    <li key="2015">Duke</li>
    <li key="2014">Connecticut</li>
    <li key="2016">Villanova</li>
  </ul>
  ```

  















































































