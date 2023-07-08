// const redux = require("redux")
import redux from "redux"
import reducer from "./reducer.js"

// 3.根据reducer创建一个store对象
const store = redux.createStore(reducer)

// module.exports = store
export default store
