/**
 * index: ページ番号
 * ideas: 保存されたテキスト
 */
import { combineReducers } from 'redux'

const home = (state = { isStart : false }, action) => {
  switch (action.type) {
  case 'START':
    return true;
  default:
    return state;
  }
}

const initialData = {
  index: 0,
  ideas: [],
}

const main = (state = initialData, action) => {
  switch (action.type) {
  case 'SUBMIT':
    let log = state.ideas
    log.push({
      index: state.index,
      ideas: action.text
    })
    return {
      index: state.index + 1,
      ideas: log,
      text: ''
    }
  case 'INPUT_TEXT':
    return {
      ...state,
      text: action.text
    }
  default:
    return state
  }
}

const result = (state = { index: 0 }, action ) => {
  switch (action.type) {
  case 'TOGGLE_RESULT':
    return {
      index: state.index + 1,
    }
  default:
    return state
  }
}

const scamperApp = combineReducers({
  home,
  main,
  result,
})

export default scamperApp
