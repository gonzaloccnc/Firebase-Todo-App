import { type QuerySnapshot } from 'firebase/firestore'
import { TweetFirebaseRepository } from '../../core/firebase/TweetFirebaseRepository'
import { type TweetModel } from '../../domain/models/TweetModel'

const tweetFirebase = new TweetFirebaseRepository()

const createTweet = async (tweet: TweetModel): Promise<void> => {
  await tweetFirebase.createTweet(tweet)
}

const readTweet = async (): Promise<QuerySnapshot<TweetModel>> => {
  return await tweetFirebase.readTweet()
}

export {
  createTweet,
  readTweet
}
