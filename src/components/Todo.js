import React from 'react'

const Todo = ({text}) => {
  return (
    <li className="todo">
      <div className="todo-item">{text}</div>
      <button className="complete-btn">BTN</button>
      <button className="trash-btn">X</button>
    </li>
  )
}

export default Todo
