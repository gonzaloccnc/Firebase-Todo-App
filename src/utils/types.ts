import { type Timestamp } from 'firebase/firestore'

export type dinamicObject = Record<string, string>

export interface DocumentFirebase {
  todo: string
  important: boolean
  id: string
}

export interface TodoUser {
  id: string
  todo: DocumentFirebase
}

export interface TodoUserDelete {
  userid: string
  todoid: string
}
export interface Reducer<T> {
  type: string
  payload: T
}

export interface TweetFirebase {
  likes: number
  user: string
  value: string
  id: string
  domain: string
  date: Timestamp
  logo: string
}

export interface TweetDelete {
  userid: string
  tweetid: string
}

export type TodoPayload = TodoUser | TodoUserDelete | DocumentFirebase[]

export type TweetPayload = TweetFirebase | TweetDelete | TweetFirebase[]

export interface UserDocument {
  edad: number
  email: string
  nombre: string
  id: string
}

export const defaultLogo = 'https://images.pexels.com/photos/3094799/pexels-photo-3094799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
