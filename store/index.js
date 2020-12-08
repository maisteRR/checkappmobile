import { combineReducers } from 'redux'
import { createStore } from 'redux'
import checkInfo from './reducers/checkInfo'
import findCheck from './reducers/findCheck'
const rootReducer = combineReducers({
    findCheck,
    checkInfo
})

export default createStore(rootReducer)