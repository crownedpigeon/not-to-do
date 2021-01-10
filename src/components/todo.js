import React from "react"
import "./todo.css"

const Todo = ({todo}) => {
    return (
        <h2 className={todo.priority}>{todo.text}</h2>
    )
}

export default Todo