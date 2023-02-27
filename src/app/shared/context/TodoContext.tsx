import { createContext } from 'react'
import { type Reducer } from '../../shared/utils/types'
import { type TodoPayload } from '../../shared/utils/payloads'
import { type TodoModel } from '../../../main/domain/models/TodoModel'

interface Context {
  todos: TodoModel[]
  dispatch: (action: Reducer<TodoPayload>) => void
}

export const todoContext = createContext<Context>({ todos: [], dispatch: () => { } })
