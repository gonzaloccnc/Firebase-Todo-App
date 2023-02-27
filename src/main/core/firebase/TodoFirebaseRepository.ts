import { setDoc, type QuerySnapshot, doc, deleteDoc, collection, getDocs } from 'firebase/firestore'
import { type TodoModel } from '../../domain/models/TodoModel'
import { type TodoRepository } from '../../domain/repositories/TodoRepository'
import { db } from '../../infra/firebase/firebase'

export class TodoFirebaseRepository implements TodoRepository {
  createTodo = async (userid: string, todoValues: TodoModel): Promise<void> => {
    await setDoc(doc(db, 'users', userid, 'todos', todoValues.id), {
      todo: todoValues.todo,
      important: todoValues.important
    })
  }

  updateTodo = async (userid: string, todoValues: TodoModel): Promise<void> => {
    await setDoc(doc(db, 'users', userid, 'todos', todoValues.id), {
      todo: todoValues.todo,
      important: todoValues.important
    })
  }

  deleteTodo = async (userid: string, todoid: string): Promise<void> => {
    await deleteDoc(doc(db, 'users', userid, 'todos', todoid))
  }

  readTodo = async (userid: string): Promise<QuerySnapshot<TodoModel>> => {
    return await getDocs(collection(db, 'users', userid, 'todos')) as QuerySnapshot<TodoModel>
  }
}
