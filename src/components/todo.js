import React from "react"
import "./todo.css"

const Todo = ({todo, removeTodo}) => {
    return (
        <>
        <h2 className={todo.priority}>{todo.text} <span onClick={() => removeTodo(todo)}>x</span></h2>
        </>
    )
}

export default Todo