import './App.css'
import PersonContainer from './containers/PersonContainer'
import TodoContatiner from './containers/TodoContatiner'
import TodoFormContainer from './containers/TodoFormContainer'
import UserListContainer from './containers/UserListContainer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PersonContainer />
        <TodoContatiner />
        <TodoFormContainer />
        <UserListContainer />
      </header>
    </div>
  )
}

export default App
