import React, { useState } from "react"
import "./todo.css"

const Todo = ({todo, removeTodo}) => {
    const [complete, setComplete] = useState('')

    return (
        <>
        <h2 className={`${todo.priority} ${complete}`}>{todo.text} <span onClick={() => {setComplete('complete'); /*set timeout for complete animition, then remove todo*/}}><span>✓</span>&nbsp;&nbsp;&nbsp;<span onClick={() => removeTodo(todo)}>x</span> </span> </h2>
        </>
    )
}

export default Todo