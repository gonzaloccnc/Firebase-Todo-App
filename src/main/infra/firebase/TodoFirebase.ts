import { type QuerySnapshot } from 'firebase/firestore'
import { TodoFirebaseRepository } from '../../core/firebase/TodoFirebaseRepository'
import { type TodoModel } from '../../domain/models/TodoModel'

const todoClass = new TodoFirebaseRepository()

const createTodo = async (userid: string, todoValues: TodoModel): Promise<void> => {
  await todoClass.createTodo(userid, todoValues)
}

const updateTodo = async (userid: string, todoValues: TodoModel): Promise<void> => {
  await todoClass.updateTodo(userid, todoValues)
}

const deleteTodo = async (userid: string, todoid: string): Promise<void> => {
  await todoClass.deleteTodo(userid, todoid)
}

const readTodo = async (userid: string): Promise<QuerySnapshot<TodoModel>> => {
  return await todoClass.readTodo(userid)
}

export {
  createTodo,
  updateTodo,
  deleteTodo,
  readTodo
}
