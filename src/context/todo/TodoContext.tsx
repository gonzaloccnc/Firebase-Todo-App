import React, { createContext, useEffect, useReducer, useContext } from 'react'
import { type DocumentFirebase, type Reducer, type TodoPayload } from '../../utils/types'
import { todoReducer } from './reducers/TodoReducer'
import { getDocuments } from '../../firebase/firestore/firestore'
import { authContext } from './../auth/AuthContext'

interface TodoProviderProps {
  children: React.ReactNode
}

interface Context {
  todos: DocumentFirebase[]
  dispatch: (action: Reducer<TodoPayload>) => void
}

export const todoContext = createContext<Context>({ todos: [], dispatch: () => { } })

const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
  const [todos, dispatch] = useReducer(todoReducer, [])
  const { userid } = useContext(authContext)

  const readData = async (): Promise<void> => {
    const data: DocumentFirebase[] = []
    try {
      const qs = await getDocuments(userid as string)

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

export {
  TodoProvider
}
