import React, { useContext } from 'react'
import { TodoContainer } from '../../components/todo/TodoContainer'
import { TodoForm } from '../../components/todo/TodoForm'
import { todoContext } from '../../shared/context/TodoContext'

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
