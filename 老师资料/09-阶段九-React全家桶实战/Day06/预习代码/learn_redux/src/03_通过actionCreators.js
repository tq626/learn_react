import { changeCounter } from "./store/actionCreators.js"
import store from "./store/index.js"

store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch(changeCounter(10))
