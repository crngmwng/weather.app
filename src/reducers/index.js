import {combineReducers} from 'redux'

import towns from './towns'
import townsPage from './townsPage'
import hourly from './hourly'
import week from './week'
import day from './day'
import recentlyViewed from './recentlyViewed'

const rootReducer = combineReducers({
  towns,
  townsPage,
  hourly,
  week,
  day,
  recentlyViewed
})

export default rootReducer