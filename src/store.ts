import { AnyAction, createStore, combineReducers } from 'redux'
import { State } from 'types'
import reducer from 'reducers'

export const createAppStore = (initialState?: State) =>
  createStore<State, AnyAction, unknown, unknown>(
    combineReducers({
      checkboxes: reducer,
    }),
    initialState,
  )

export default createAppStore()
