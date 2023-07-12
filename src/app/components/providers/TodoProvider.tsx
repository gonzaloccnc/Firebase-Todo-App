import React, { useEffect, useReducer, useContext } from 'react'
import { type TodoModel } from '../../../main/domain/models/TodoModel'
import { todoReducer } from '../../shared/reducers/TodoReducer'
import { todoContext } from '../../shared/context/TodoContext'
import { readTodo } from '../../../main/infra/firebase/TodoFirebase'
import { authContext } from '../../shared/context/AuthContext'

interface TodoProviderProps {
  children: React.ReactNode
}

const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
  const [todos, dispatch] = useReducer(todoReducer, [])
  const { userid } = useContext(authContext)

  const readData = async (): Promise<void> => {
    const data: TodoModel[] = []
    try {
      const qs = await readTodo(userid as string)

      qs.forEach(docs => {
        data.push({ ...docs.data(), id: docs.id })
      })
      dispatch({ type: 'set/todo', payload: data })
    } catch (ex) {
      console.error(ex)
    }
  }

  useEffect(() => {
    if (userid !== null) {
      void readData()
    }
  }, [userid])

  return (
    <todoContext.Provider value={{ todos, dispatch }}>
      {children}
    </todoContext.Provider>
  )
}

export default TodoProvider
