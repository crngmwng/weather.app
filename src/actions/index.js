import {
    FETCH_TOWNS_START,
    FETCH_TOWNS_SUCCESS,
    FETCH_TOWNS_FAILURE
} from './actionTypes'

import fetchTownsApi from '../api'


export const fetchTowns = () => async dispatch => {
    dispatch({type: FETCH_TOWNS_START})
  
    try {
      const towns = await fetchTownsApi()
      dispatch({
        type: FETCH_TOWNS_SUCCESS,
        payload: towns
      })
    } catch (err) {
      dispatch({
        type: FETCH_TOWNS_FAILURE,
        payload: err,
        error: true
      })
    }
  }