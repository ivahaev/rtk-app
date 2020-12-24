import { useSelector } from 'react-redux'
import './App.css'
import { getCheckboxState } from 'selectors'
import Checkbox from 'components/Checkbox'

const App: React.FC = () => {
  const checkboxName = 'anyCheckbox'
  const checked = useSelector(getCheckboxState(checkboxName))

  return (
    <div className="App">
      <header className="App-header">
        <Checkbox name={checkboxName} label="Please check me" />
        <span>Checkbox is {checked ? 'checked' : 'unchecked'}</span>
      </header>
    </div>
  )
}

export default App
