import {combineReducers} from 'redux'

import towns from './towns'
import townsPage from './townsPage'

const rootReducer = combineReducers({
  towns,
  townsPage
})

export default rootReducer