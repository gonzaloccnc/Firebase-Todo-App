import React from 'react'
import { type DocumentFirebase } from '../../utils/types'
import { TodoCard } from './TodoCard'

interface TodoContainerProps {
  todos: DocumentFirebase[]
}

const TodoContainer: React.FC<TodoContainerProps> = ({ todos }) => {
  return (
    <section>
      {
        todos.length === 0
          ? (
            <h1 className='text-center text-purple-600 text-3xl py-5'>
              No hay Tareas que mostrar
            </h1>)
          : todos.map(todo => {
            return (
              <TodoCard
                key={todo.id}
                todo={todo.todo}
                id={todo.id}
                important={todo.important}
              />
            )
          })
      }
    </section>
  )
}

export {
  TodoContainer
}
