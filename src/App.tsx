import './App.css'
import Checkbox from './Checkbox'

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Checkbox name="anyCheckbox" label="Please check me" />
      </header>
    </div>
  )
}

export default App
