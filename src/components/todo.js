import React, { useState } from "react"
import "./todo.css"

const Todo = ({todo, removeTodo}) => {
    const [complete, setComplete] = useState('')
    const [timer, setTimer] = useState()

    // TODO: check out react transition group for animation?
    const completeAndRemove = (todo) => {
        setComplete('complete'); 
        const newTimer = setTimeout(() => {
            setComplete('')
            removeTodo(todo);
        },  900)
        setTimer(newTimer)
    }

    return (
        <>
        <h2 className={`${todo.priority} ${complete}`}>{todo.text} <span><span onClick={() => completeAndRemove(todo)}>✓</span>&nbsp;&nbsp;&nbsp;<span onClick={() => removeTodo(todo)}>x</span> </span> </h2>
        </>
    )
}

export default Todo