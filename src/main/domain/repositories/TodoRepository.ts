import { type QuerySnapshot } from 'firebase/firestore'
import { type TodoModel } from '../models/TodoModel'

export interface TodoRepository {
  createTodo: (userid: string, todoValues: TodoModel) => Promise<void>
  updateTodo: (userid: string, todoValues: TodoModel) => Promise<void>
  deleteTodo: (userid: string, todoid: string) => Promise<void>
  readTodo: (userid: string) => Promise<QuerySnapshot<TodoModel>>
}
