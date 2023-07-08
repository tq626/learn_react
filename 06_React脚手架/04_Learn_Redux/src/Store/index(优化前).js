const { createStore } = require("redux")
const { ADD_NUMBER, CHANGE_NAME } = require('./constants')

// 初始化的数据
const initialState = {
  name: "tq",
  counter: 1
}

// 定义reducer函数: 纯函数
/*
  两个参数
  参数一: store中目前保存的state
  参数二: 本次需要更新的action(dispatch传入的action)
  返回值: 它的返回值会作为store之后存储的state
*/
function reducer(state = initialState, action) {
  // 有新数据进行更新的时候, 就返回一个新的state
  // if (action.type === "change_name") {
  //   return { ...state, name: action.name }
  // } else if (action.type === "change_counter") {
  //   return { ...state, counter: state.counter + action.counter }
  // }

  // 优化:
  switch(action.type) {
    case CHANGE_NAME:
      return { ...state, name: action.name }
    case ADD_NUMBER:
      return { ...state, counter: state.counter + action.counter }
    default:
      return state
  }

  // 没有新数据更新, 那么返回之前的state
  
}

// 创建的store
const store = createStore(reducer)

module.exports = store