# Day08 作业布置

## 一. 完成课堂所有的代码







## 二. React Router6的基本创建过程是什么？进行步骤总结。

* 安装react-router-dom --  **npm install react-router-dom**

* 选择路由模式 BrowserRouter使用**history模式** / HashRouter使用**hash模式**

  ```jsx
  <HashRouter>
      <App />
  </HashRouter>
  ```

* 通过Routes包裹所有的Route, 在其中匹配路由

* Route用于路径的匹配

  * path属性：用于设置匹配到的路径
  * element属性：设置匹配到路径后，渲染的组件  --  Router5.x使用的是component属性
  
* 路由跳转 -- Link组件 / NavLink组件
  
  * to属性 -- 用于设置跳转到的路径
  
* 路由重定向 -- Navigate

* Not Found页面配置 -- path="*"

  ```jsx
  <Link to="/home">首页</Link>
  <Link to="/about">关于</Link>
  <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      {/**Home页面*/}
      <Route path="/home" element={<Home />}>
        <Route path="/home" element={<Navigate to="/home/homebanner" />} />
        <Route path="/home/homebanner" element={<HomeBanner />} />
        <Route path="/home/homerecommend" element={<HomeRecommend />} />
      </Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="*" element={<NotFount />}></Route>
  </Routes>
  ```





## 三. React Router6的路由嵌套如何配置？Outlet的作用是什么？

```jsx
// Home 页面
<Link to="/home/homebanner">轮播</Link>
<Link to="/home/homerecommend">推荐</Link>

<Outlet/>
```

* Outlet -- Outlet组件用于在父路由元素中作为子路由的占位元素, 类似于Vue中的 router-view





## 四. React Router6如何传递参数？如何在组件中获取参数？

* 路由参数传递有两种方式: 1. 动态路由的方式 2. search传递参数

* 动态路由

  ```jsx
  <Link to="/user/9978">用户</Link>
  <Route path="/user/:id" element={<User />}></Route>
  ```

  ```jsx
  // 获取动态路由参数 -- 需要通过 useParams 只能在函数式组件中使用
  import { useParams } from "react-router-dom";
  export function User() {
    const params = useParams()
    return (
      <div>
        <h4>User Page</h4>
        <h4>id: {params.id}</h4>
      </div>
    )
  }
  ```

* search传递参数

  ```jsx
  <Link to="/user?name=大大怪将军&age=19"">用户</Link>
  ```

  



## 五. 类组件无法直接使用navigate、location等参数，应该如何进行操作？

```jsx
import { useLocation, useNavigate, useParams, useSearchParams } from "react-router-dom";

function withRouter(WrapperComponent) {
  return function(props){
    // 1.导航
    const navigate = useNavigate()

    // 2.动态路由的参数: /detail/:id
    const params = useParams()

    // 3.查询字符串的参数: /user?name=why&age=18
    const location = useLocation();
    const [searchParams] = useSearchParams();
    const query = Object.fromEntries(searchParams);

    const router = {navigate, params, location, query}

    return <WrapperComponent {...props} router={router} />
  }
}
export default withRouter
```

```jsx
import React, { PureComponent } from 'react'
import withRouter from "../hoc/with_router"

export class About extends PureComponent {
  navigateTo(path) {
    const { navigate } = this.props.router
    navigate(path)
  }
  render() {
    const { query } = this.props.router
    return (
      <div>
        <h3>About Page</h3>
        <h4>name: {query.name}-age: {query.age}</h4>
      </div>
    )
  }
}
export default withRouter(About)
```



## 六. React Router6如何进行路由配置？如何配置路由的懒加载？

```js
// 在单独的router/index.js文件中

// 路由懒加载/按需加载/异步加载 ? 
// 这样暂时不会显示,因为是异步的要单独下载,需要加载一个loading动画React提供的Suspense组件
const Order = React.lazy(() => import("../page/Order"));
const User = React.lazy(() => import("../page/User"));

const router = [
    {
        path: '/',
        element: <Navigate to="/home" />,
    },
    {
        path: "/home",
        element: <Home />,
        children: []
    }
]
export default router
```

```jsx
<HashRouter>
  <Suspense fallback={<h4>Loading~~~~</h4>}>
    <App />
  </Suspense>
</HashRouter>
```





## 七. 什么是Hooks？和传统的函数式组件有什么区别？和类组件有什么区别？(面试)

* **Hook指的类似于useState、useEffect这样的函数, Hooks是对这类函数的统称**

* 首先需要了解函数式组件与类组件的优缺点

* 类组件可以定义自己的state,并且可以保存自己内部的状态

  * 函数式组件不能定义自己的状态的, 因为函数每次调用都会产生新的临时变量

* 类组件有自己的生命周期 -- 而函数式组件没有

* 类组件在状态改变是会重新执行render函数

  * 函数式组件时不会重新渲染的, 如果重新渲染, 整个函数会被重新执行, 相应的状态也会被重新赋值

* 同时类组件也有自己的缺点

  * 随着业务的增多,类组件会变得越来越复杂
  * 复用其中的状态也会很艰难,有时需要通过一些高阶组件

* **Hooks**可以让我们在不编写class的情况下使用state以及其他的React特性

  * Hook只能在函数组件中使用，不能在类组件
  * 通过Hook可以在函数式组件中 定义自己的状态 完成类似于class组件中的生命周期功能

  ```jsx
  // 类组件实现计数器
  import React, { PureComponent } from 'react'
  
  export class CounterClass extends PureComponent {
    constructor() {
      super()
      this.state = {
        counter: 100
      }
    }
    subCounter() {
      this.setState({counter: this.state.counter - 1})
    }
    addCounter() {
      this.setState({counter: this.state.counter + 1})
    }
    render() {
      const { counter } = this.state
      return (
        <div>
          类组件实现计数器
          <h2>counter: {counter}</h2>
          <button onClick={() => this.subCounter(1)}>-1</button>
          <button onClick={() => this.addCounter(1)}>+1</button>
        </div>
      )
    }
  }
  
  export default CounterClass
  ```

  ```jsx
  // Hooks实现计数器
  import React, { memo, useState } from 'react'
  const CounterHooks = memo(() => {
    let [counter, setCounter] = useState(100)
    return (
      <div>
        Hooks
        <h2>counter: {counter}</h2>
        <button onClick={e => setCounter(counter - 1)}>-1</button>
        <button onClick={e => setCounter(counter + 1)}>+1</button>
      </div>
    )
  })
  
  export default CounterHooks
  ```

  













































































































