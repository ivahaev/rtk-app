import { CHECKBOX_CLICK } from 'actionTypes'
import reducer from '.'

describe('reducer', () => {
  it('creates default state', () => {
    const state = reducer(undefined, { type: 'anyAction' })

    expect(state).toEqual({})
  })

  it('sets checked flag', () => {
    const state = reducer(undefined, { type: CHECKBOX_CLICK, payload: 'anyName' })

    expect(state.anyName).toBe(true)
  })

  it('sets checked flag to false when it was checked', () => {
    const state = reducer({ anyName: true }, { type: CHECKBOX_CLICK, payload: 'anyName' })

    expect(state.anyName).toBe(false)
  })
})
