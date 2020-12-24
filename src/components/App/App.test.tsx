import { renderWithRedux } from 'utils'
import Checkbox from 'components/Checkbox'
import App from '.'

jest.mock('../Checkbox', () => () => null)

describe('App', () => {
  it('renders Checkbox with name and label', () => {
    const renderer = renderWithRedux(<App />)

    const element = renderer.root.findByType(Checkbox)
    expect(element.props.name).toBe('anyCheckbox')
    expect(element.props.label).toBe('Please check me')
  })

  it('shows unchecked text, when checkbox is unchecked', () => {
    const renderer = renderWithRedux(<App />)

    const element = renderer.root.findByType('span')
    expect(element.props.children.join('')).toBe('Checkbox is unchecked')
  })

  it('shows checked text, when checkbox is checked', () => {
    const initialState = { checkboxes: { anyCheckbox: true } }

    const renderer = renderWithRedux(<App />, initialState)

    const element = renderer.root.findByType('span')
    expect(element.props.children.join('')).toBe('Checkbox is checked')
  })
})
