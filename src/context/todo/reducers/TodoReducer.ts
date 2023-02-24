import {
  addDocument,
  deleteDocument,
  updateDocument
} from '../../../firebase/firestore/firestore'
import {
  type TodoPayload,
  type DocumentFirebase,
  type Reducer,
  type TodoUser,
  type TodoUserDelete
} from '../../../utils/types'

const todoReducer = (state: DocumentFirebase[], action: Reducer<TodoPayload>): DocumentFirebase[] => {
  switch (action.type) {
    case 'add/todo': {
      const todoUser = action.payload as TodoUser

      void addDocument(todoUser.id, todoUser.todo)
      return [...state, todoUser.todo]
    }

    case 'delete/todo': {
      const deleteDoc = action.payload as TodoUserDelete
      void deleteDocument(deleteDoc.userid, deleteDoc.todoid)
      return state.filter(x => x.id !== deleteDoc.todoid)
    }

    case 'update/todo': {
      const todoUser = action.payload as TodoUser
      const NEW_STATE = state.filter(x => x.id !== todoUser.todo.id)
      void updateDocument(todoUser.id, todoUser.todo)
      return [...NEW_STATE, todoUser.todo]
    }

    case 'set/todo': {
      return [...action.payload as DocumentFirebase[]]
    }

    default: return state
  }
}

export {
  todoReducer
}
