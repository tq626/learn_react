# Day07 作业布置

## 一. 完成课堂所有的代码

- 重点
  - redux进行异步操作 ---> 通过中间件 ---> redux-thunk
  - 工具redux-toolkit的使用
  - connect函数的实现原理

## 二. redux中如何进行异步的操作？和同步操作有什么区别？

- 通过中间件
  - redux-thunk
  - redux-saga
- redux中的同步操作
  - 执行了dispatch函数之后,对应的reducer函数收到action对象后立即得到执行,reducer执行完了之后,state立即就改变了,此时store.getState函数,取到的是最新的值
- redux的异步操作
  - 原则上redux并没有提供异步action的处理方案,异步action需要依赖第三方的中间件解决
  - dispatch一个异步函数,目标state不会立即响应,而是要看异步函数内部的逻辑,来决定state什么时候响应

## 三. redux中如何进行reducer的拆分？拆分的原理和本质是什么？

- 主要利用模块化的思想,将不同的数据拆分到不同的模块
- 每一模块都有自己的目录结构
  - reducer ---> 接受action对象,返回最新的state
  - constants ---> 定义常量数据
  - actoinCreator ---> 定义创建action对象的函数
  - index ---> 导出reducer
- store中的index文件
  - 合并reducer,导出store实例

## 四. 什么是Redux Toolkit？核心API有哪些？并且说出他们的作用。

- configureStore
  - 包装createStore,同时提供简化的配置选项和良好的默认值
  - 自动组合单独的slice reducer
  - 可以添加任何中间件
    - 默认包含redux-thunk,并启用Redux-DevTools调试工具
- createSlice 
  - 接受一个具有render函数的对象
  - 可以配置切片名称
  - 初始状态值
  - 自动 生成切片,并带有相应的actions
- createAsyncThunk
  - 接受一个动作类型字符和一个返回承诺的函数
  - 生成一个pending/fulfilled/rejected基于该承诺分配动作类型的Thunk

## 五. 总结Redux的使用步骤，包括原始Redux用法和RTK用法。（重要）

- 原始的Redux的使用步骤
  - 先从react-redux中导入Providre包裹根组件
  - 将导出的store绑定到Provider组件的store属性中
  - 创建store,目录结构
    - actionCreator ---> 创建action对象
    - constant  ---> 定义常量数据
    - reducer ---> 处理action对象,返回最新的state
    - index ---> 人口文件,创建store,使用中间件
  - 组件中的使用方式
    - 定义函数 ---> mapStateToProps ---> 将store中的数据映射要组件的props中
    - 定义函数 --->  mapDispatchToProps ---> 将dispatch的操作映射到props中
    - 从react-redux中导入高阶组件对要导出的组件进行包裹,并把定义的函数传入connect函数
    - 组件触发相应的事件,dispatch相应的对象,store中的数据改变,组件重新渲染
- RTK用法
  - 先从react-redux中导入Providre包裹根组件
  - 将导出的store绑定到Provider组件的store属性中
  - 创建store,目录结构:
    - index.js ---> 入口文件  ---> 创建和配置store ---> 主要是合并render
    - features ---> 要管理的数据模块
      - 使用createSliceAPI创建一个slice对象
      - name ---> 配置slice对象的名称
      - initialState ---> 定义初始值
      - reducer ---> 定义reduce函数的对象
      - 导出slice对象的actions---> 组件中使用或者自己内部使用,
      - 导出slice对象的reducer---> index文件合并reducer



















































































