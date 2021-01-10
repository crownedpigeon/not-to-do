import React, {useState} from "react";
import Layout from "../components/layout";
import Form from "../components/form"
import TodoList from "../components/todolist"

const IndexPage = () => {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    //create a new todo list with the new todo, then use setTodos to update state
    const newTodos = [...todos, todo]
    setTodos(newTodos)
  }

  return (
    <Layout> 
      <Form addTodo={addTodo}></Form>
      <TodoList todos = {todos}></TodoList>
   </Layout>
   )
}

export default IndexPage
