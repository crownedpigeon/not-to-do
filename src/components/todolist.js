import React from "react"
import Todo from "./todo"

const TodoList = ({todos, removeTodo}) => {
    return (
        <div>
            {todos.map((todo, index) =>  <Todo removeTodo={removeTodo} key={index} index={index} todo={todo}></Todo>)}
        </div>
    )
}

export default TodoList