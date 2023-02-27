import { type TodoUser, type TodoModel } from '../../../main/domain/models/TodoModel'
import { createTodo, deleteTodo, updateTodo } from '../../../main/infra/firebase/TodoFirebase'
import { type TodoPayload } from '../utils/payloads'
import { type TodoUserDelete, type Reducer } from '../utils/types'

const todoReducer = (state: TodoModel[], action: Reducer<TodoPayload>): TodoModel[] => {
  switch (action.type) {
    case 'add/todo': {
      const todoUser = action.payload as TodoUser

      void createTodo(todoUser.id, todoUser.todo)
      return [...state, todoUser.todo]
    }

    case 'delete/todo': {
      const deleteDoc = action.payload as TodoUserDelete
      void deleteTodo(deleteDoc.userid, deleteDoc.todoid)
      return state.filter(x => x.id !== deleteDoc.todoid)
    }

    case 'update/todo': {
      const todoUser = action.payload as TodoUser
      const NEW_STATE = state.filter(x => x.id !== todoUser.todo.id)
      void updateTodo(todoUser.id, todoUser.todo)
      return [...NEW_STATE, todoUser.todo]
    }

    case 'set/todo': {
      return [...action.payload as TodoModel[]]
    }

    default: return state
  }
}

export {
  todoReducer
}
