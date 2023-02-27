import { type QuerySnapshot } from 'firebase/firestore'
import { type TweetModel } from '../models/TweetModel'

export interface TweetRepository {
  createTweet: (tweet: TweetModel) => Promise<void>
  readTweet: () => Promise<QuerySnapshot<TweetModel>>
}
