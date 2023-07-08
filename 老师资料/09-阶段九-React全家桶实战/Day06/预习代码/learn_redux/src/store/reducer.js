import * as actionTypes from "./constants.js"

// 1.初始化的数据
const initialState = {
  counter: 0
}

// 2.一个reducer负责修改上面的数据
function reducer(state = initialState, action) {
  console.log("reducer被执行了")

  switch(action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + 1 }
    case "DECREMENT":
      return { ...state, counter: state.counter - 1 }
    case actionTypes.ADD_NUMBER:
      return { ...state, counter: state.counter + action.count }
    default:
      return state
  }
}

export default reducer
