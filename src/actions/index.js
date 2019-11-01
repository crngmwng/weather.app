import {
    FETCH_TOWNS_START,
    FETCH_TOWNS_SUCCESS,
    FETCH_TOWNS_FAILURE
} from './actionTypes'

import fetchTownsApi from '../api'


export const fetchTowns = () => async dispatch => {
    dispatch({type: FETCH_TOWNS_START})
  
    try {
      fetch('http://www.mocky.io/v2/5dbc0bc0310000d5ce4c0e32')
        .then(res => res.json())
        .then(towns => {
          dispatch({
            type: FETCH_TOWNS_SUCCESS,
            payload: towns
          })
        })
    }
    catch (err) {
      dispatch({
        type: FETCH_TOWNS_FAILURE,
        payload: err,
        error: true
      })
    }
  }

  