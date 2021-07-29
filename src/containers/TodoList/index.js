import React from 'react'
import { useState } from 'react'
import TodoItem from './components/TodoItem'
import { Link } from 'react-router-dom'
import FormInput from './components/FormInput'
import { Title } from '../Home/styles'

export const TodoList = () => {
  
  // const todos = ["buy apple juice", "practice React", "read a book"]
  const [todos, setTodos] = useState(["buy apple juice", "practice React", "read a book"])
  const [newItem, setNewItem] = useState("")

  const addItem = () => {
    let newItems = todos.slice()
    newItems.push(newItem)
    setTodos(newItems)
  }

  return (
    <>
      <Title>To-Do:</Title>
      {todos.map((item, idx) => <TodoItem key={idx} idx={idx} item={item} todos={todos} setTodos={setTodos}/>)}
      <FormInput type="text" placeholder="Enter a To-Do" value={newItem} setValue={setNewItem}/>
      <button onClick={addItem}>Add Item</button>
      <Link to="/">Back to Home</Link>
    </>
  )
}