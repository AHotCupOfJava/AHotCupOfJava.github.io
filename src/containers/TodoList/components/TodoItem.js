import React from 'react'

const TodoItem = ({ idx, item, todos, setTodos }) => {
  
  const finishItem = () => {
    // alert(`Task '${item}' completed!`)
    // alert is a JS function that pops up a little notif box in the browser
    // remove this item from my list of todos
    let newTodos = todos.slice()
    newTodos.splice(idx, 1)
    setTodos(newTodos)
  }

  return (
    <div>
      <li>{item}</li>
      <button onClick={finishItem}>Done!</button>
    </div>
  )
}

export default TodoItem