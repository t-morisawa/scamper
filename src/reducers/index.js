/**
  * id: ページ番号
  * text: 保存されたテキスト
  */
import { combineReducers } from 'redux'

const initialData = {
    id: 0,
    text: [],
}

const data = (state = initialData, action) => {
    switch (action.type) {
    case 'SUBMIT':
        console.log(state)
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

const scamperApp = combineReducers({
    data,
})

export default scamperApp
