import * as actionTypes from "./constants.js"

export const changeCounter = (count) => {
  return {
    type: actionTypes.ADD_NUMBER,
    count
  }
}