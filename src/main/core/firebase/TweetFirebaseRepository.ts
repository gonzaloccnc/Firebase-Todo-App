import { setDoc, type QuerySnapshot, doc, getDocs, collection } from 'firebase/firestore'
import { type TweetModel } from '../../domain/models/TweetModel'
import { type TweetRepository } from '../../domain/repositories/TweetRepository'
import { db } from '../../infra/firebase/firebase'

export class TweetFirebaseRepository implements TweetRepository {
  createTweet = async (tweet: TweetModel): Promise<void> => {
    await setDoc(doc(db, 'tweets', tweet.id), {
      date: tweet.date,
      domain: tweet.domain,
      likes: tweet.likes,
      logo: tweet.logo,
      user: tweet.user,
      value: tweet.value
    })
  }

  readTweet = async (): Promise<QuerySnapshot<TweetModel>> => {
    return await getDocs(collection(db, 'tweets')) as QuerySnapshot<TweetModel>
  }
}
