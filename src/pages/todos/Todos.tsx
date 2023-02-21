import React, { useContext } from 'react'
import { TodoContainer } from '../../components/todo/TodoContainer'
import { todoContext } from '../../context/TodoContext'
import { TodoForm } from '../../components/todo/TodoForm'

const Todos: React.FC = () => {
  const { todos } = useContext(todoContext)

  return (
    <>
      <TodoForm />
      <TodoContainer todos={todos} />
    </>
  )
}

export {
  Todos
}
