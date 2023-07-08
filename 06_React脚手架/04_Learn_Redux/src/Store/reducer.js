const { ADD_NUMBER, CHANGE_NAME } = require("./constants")

// 初始化的数据
const initialState = {
  name: "tq",
  counter: 100
}

function reducer(state = initialState, action) {
  switch(action.type) {
    case CHANGE_NAME:
      return { ...state, name: action.name }
    case ADD_NUMBER:
      return { ...state, counter: state.counter + action.counter }
    default:
      return state
  }
}

module.exports = reducer