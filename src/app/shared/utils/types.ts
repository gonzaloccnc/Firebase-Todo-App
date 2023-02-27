
export type dinamicObject = Record<string, string>

export interface Reducer<T> {
  type: string
  payload: T
}

export interface TodoUserDelete {
  userid: string
  todoid: string
}

export interface TweetDelete {
  userid: string
  tweetid: string
}

export interface UserDocument {
  edad: number
  email: string
  nombre: string
  id: string
}

export const defaultLogo = 'https://images.pexels.com/photos/3094799/pexels-photo-3094799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
