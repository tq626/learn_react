const store = require("./Store/index(优化前)")

// 修改store中的数据: 必要action
const nameAction = { type: "change_name", name: "kobe" }
store.dispatch(nameAction)

const counterAction = { type: "change_counter", counter: 3 }
store.dispatch(counterAction)

console.log(store.getState())