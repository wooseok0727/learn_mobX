import { observer } from 'mobx-react'

export default observer(function Todo({ todos }) {
  if (todos.length === 0) {
    return (
      <div>
        <h1>Empty</h1>
      </div>
    )
  }

  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo.text}</li>
        ))}
      </ul>
    </div>
  )
})
