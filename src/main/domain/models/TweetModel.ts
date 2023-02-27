import { type Timestamp } from 'firebase/firestore'

export interface TweetModel {
  likes: number
  user: string
  value: string
  id: string
  domain: string
  date: Timestamp
  logo: string
}
