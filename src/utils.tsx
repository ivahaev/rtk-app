import { ReactElement } from 'react'
import { Provider } from 'react-redux'
import { act, create } from 'react-test-renderer'
import { Store } from './types'
import { createAppStore } from './store'

export const renderWithRedux = (node: ReactElement, initialState: Store = { checkboxes: {} }) => {
  const store = createAppStore(initialState)

  return create(<Provider store={store}>{node}</Provider>)
}

export { act }
