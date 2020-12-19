import { AnyAction, createStore, combineReducers } from 'redux'
import { Store } from './types'
import reducer from './reducers'

export const createAppStore = (initialState?: Store) =>
  createStore<Store, AnyAction, unknown, unknown>(
    combineReducers({
      checkboxes: reducer,
    }),
    initialState,
  )

export default createAppStore()
