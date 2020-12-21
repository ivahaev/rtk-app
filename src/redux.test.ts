import reducer, { checkboxClick } from './redux'

describe('reducer', () => {
  it('creates default state', () => {
    const state = reducer(undefined, { type: 'anyAction' })

    expect(state).toEqual({})
  })

  it('sets checked flag', () => {
    const state = reducer(undefined, checkboxClick('anyName'))

    expect(state.anyName).toBe(true)
  })

  it('sets checked flag to false when it was checked', () => {
    const state = reducer({ anyName: true }, checkboxClick('anyName'))

    expect(state.anyName).toBe(false)
  })
})
