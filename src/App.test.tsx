import { renderWithRedux } from './utils'
import Checkbox from './Checkbox'
import App from './App'

describe('App', () => {
  it('renders Checkbox with name and label', () => {
    const renderer = renderWithRedux(<App />)

    const element = renderer.root.findByType(Checkbox)
    expect(element.props.name).toBe('anyCheckbox')
    expect(element.props.label).toBe('Please click me')
  })
})
