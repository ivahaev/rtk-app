import { act, renderWithRedux } from 'utils'
import Checkbox from '.'

describe('Checkbox', () => {
  it('renders checkbox input', () => {
    const checkboxName = 'anyName'

    const renderer = renderWithRedux(<Checkbox name={checkboxName} label="anyLabel" />)

    const element = renderer.root.findByType('input')
    expect(element.props.type).toBe('checkbox')
    expect(element.props.id).toBe(checkboxName)
  })

  it('renders label', () => {
    const labelText = 'anyLabel'
    const checkboxName = 'anyName'

    const renderer = renderWithRedux(<Checkbox name={checkboxName} label={labelText} />)

    const element = renderer.root.findByType('label')
    expect(element.props.children).toBe(labelText)
    expect(element.props.htmlFor).toBe(checkboxName)
  })

  it('changes it`s checked state when it`s clicked', () => {
    const initialState = { checkboxes: { anyName: false } }
    const renderer = renderWithRedux(<Checkbox name="anyName" label="anyLabel" />, initialState)
    const element = renderer.root.findByType('input')

    act(() => {
      element.props.onChange()
    })

    expect(element.props.checked).toBe(true)
  })

  describe('sets checked flag from store', () => {
    test('when it`s checked', () => {
      const initialState = { checkboxes: { anyName: true } }

      const renderer = renderWithRedux(<Checkbox name="anyName" label="anyLabel" />, initialState)

      const element = renderer.root.findByType('input')
      expect(element.props.checked).toBe(true)
    })

    test('when it`s unchecked', () => {
      const initialState = { checkboxes: { anyName: false } }

      const renderer = renderWithRedux(<Checkbox name="anyName" label="anyLabel" />, initialState)

      const element = renderer.root.findByType('input')
      expect(element.props.checked).toBe(false)
    })
  })
})
