import configureStore from 'redux-mock-store'
import { CHECKBOX_CLICK } from 'actionTypes'
import { checkboxClick } from '.'

const mockStore = configureStore([])

describe('checkboxClick', () => {
  it('dispatches checkboxClick action with action name in payload', () => {
    const store = mockStore({})
    const checkboxName = 'anyName'

    store.dispatch(checkboxClick(checkboxName))

    expect(store.getActions()).toEqual([{ type: CHECKBOX_CLICK, payload: checkboxName }])
  })
})
