import React from 'react'

const Todo = ({text, todos, setTodos, todo}) => {
  const deleteHandler = () => {
    setTodos(todos.filter(el => el.id !== todo.id))
  }
  
  const completeHandler = () => {
    setTodos(todos.map(el => {
      if (el.id === todo.id) {
        return {
          ...el, completed: !el.completed
        }
      }
      return el;
    }))
  } 

  return (
    <li className="todo">
      <div className={`todo-item ${todo.completed ? "completed" : ''}`}>{text}</div>
      <button onClick={completeHandler} className="complete-btn">done</button>
      <button onClick={deleteHandler} className="trash-btn">X</button>
    </li>
  )
}

export default Todo
