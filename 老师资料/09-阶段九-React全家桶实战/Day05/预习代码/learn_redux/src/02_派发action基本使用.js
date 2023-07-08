const store = require("./store")

store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch({
  type: "INCREMENT"
})

store.dispatch({
  type: "DECREMENT"
})

store.dispatch({
  type: "ADD_NUNBER",
  count: 5
})



