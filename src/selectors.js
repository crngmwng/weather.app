import * as R from 'ramda'

const getTownById = (state, id) => R.prop(id, state.towns)

export const getTowns = state => {
  const towns = R.map(id => getTownById(state, id), state.townsPage.ids)

  return towns
}