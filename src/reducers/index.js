/**
  * id: ページ番号
  * text: 保存されたテキスト
  */
import { combineReducers } from 'redux'

const isStart = (state = false, action) => {
    switch (action.type) {
    case 'START':
        return true;
    default:
        return state;
    }
}

const initialData = {
    id: 0,
    text: [],
}

const data = (state = initialData, action) => {
    switch (action.type) {
    case 'SUBMIT':
        let log = state.text
        log.push({
            id: state.id,
            text: action.text
        })
        return {
            id: state.id + 1,
            text: log
        }
    default:
        return state
    }
}

const resultId = (state = { id: 0 }, action ) => {
    switch (action.type) {
    case 'TOGGLE_RESULT':
        return {
            id: state.id + 1,
        }
    default:
        return state
    }
}

const scamperApp = combineReducers({
    isStart,
    data,
    resultId
})

export default scamperApp
