import { type TweetModel } from '../../../main/domain/models/TweetModel'
import { createTweet } from '../../../main/infra/firebase/TweetFirebase'
import { type TweetPayload } from '../utils/payloads'
import { type TweetDelete, type Reducer } from '../utils/types'

const tweetsReducer = (state: TweetModel[], action: Reducer<TweetPayload>): TweetModel[] => {
  switch (action.type) {
    case 'add/tweet': {
      const tweet = action.payload as TweetModel
      void createTweet(tweet)
      return [...state, tweet]
    }

    case 'delete/tweet': {
      const tweet = action.payload as TweetDelete
      const stateToReplace = state.filter(tw => tw.id !== tweet.tweetid)
      // add to db firebase
      return stateToReplace
    }

    case 'update/tweet': {
      const tweetToUpdate = action.payload as TweetModel
      const stateToReplace = state.filter(tw => tw.id !== tweetToUpdate.id)
      // add to db firebase
      return [...stateToReplace, tweetToUpdate]
    }

    case 'set/tweet': {
      return [...action.payload as TweetModel[]]
    }

    default: return state
  }
}

export {
  tweetsReducer
}
