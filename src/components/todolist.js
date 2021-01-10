import React from "react"
import Todo from "./todo"

const TodoList = ({todos}) => {
    return (
        <div>
            {todos.map((todo, index) =>  <Todo key={index} index={index} todo={todo}></Todo>)}
        </div>
    )
}

export default TodoList