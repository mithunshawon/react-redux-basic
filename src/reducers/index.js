import { combineReducers } from 'redux'
import todos from './todo'
import visibilityFilter from './filters'

export default combineReducers({
  todos,
  visibilityFilter
})