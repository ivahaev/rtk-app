import { configureStore } from '@reduxjs/toolkit'
import { Store } from './types'
import reducer from './redux'

export const createAppStore = (initialState?: Store) =>
  configureStore({
    reducer: {
      checkboxes: reducer,
    },
    preloadedState: initialState,
  })

export default createAppStore()
