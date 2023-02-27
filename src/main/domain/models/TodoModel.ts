export interface TodoModel {
  todo: string
  important: boolean
  id: string
}

export interface TodoUser {
  id: string
  todo: TodoModel
}
