import {combineReducers} from 'redux'

import towns from './towns'
import townsPage from './townsPage'
import hourly from './hourly'

const rootReducer = combineReducers({
  towns,
  townsPage,
  hourly
})

export default rootReducer