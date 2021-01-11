import React from "react"
import Todo from "./todo"

const TodoList = ({todos}) => {
    const comparePriority= (todoA, todoB) => {
        console.log(`SORTING ${JSON.stringify(todoA)} ${JSON.stringify(todoB)}`)
        if(todoA.order < todoB.order) return -1;
        if(todoA.order > todoB.order) return 1;
        return 0; 
    }

    return (
        <div>
            {todos.sort(comparePriority).map((todo, index) =>  <Todo key={index} index={index} todo={todo}></Todo>)}
        </div>
    )
}

export default TodoList