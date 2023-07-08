const store = require("./Store/index(优化前)")

// state中的数据发生变化就会调用这个函数, 其返回值也是一个函数, 调用这个函数就会停止订阅(state中的数据发生变化就不会自动监听了)

const unsubscribe = store.subscribe(() => {
  console.log("订阅数据的变化:", store.getState())
})

// 修改store中的数据: 必要action
const nameAction = { type: "change_name", name: "kobe" }
store.dispatch(nameAction)

const counterAction = { type: "change_counter", counter: 3 }
store.dispatch(counterAction)

// unsubscribe()
store.dispatch({ type: "change_name", name: "james"})