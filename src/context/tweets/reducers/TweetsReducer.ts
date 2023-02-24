import { addTweet } from '../../../firebase/firestore/firestore'
import {
  type Reducer,
  type TweetFirebase,
  type TweetPayload,
  type TweetDelete
} from '../../../utils/types'

const tweetsReducer = (state: TweetFirebase[], action: Reducer<TweetPayload>): TweetFirebase[] => {
  switch (action.type) {
    case 'add/tweet': {
      const tweet = action.payload as TweetFirebase
      void addTweet(tweet)
      return [...state, tweet]
    }

    case 'delete/tweet': {
      const tweet = action.payload as TweetDelete
      const stateToReplace = state.filter(tw => tw.id !== tweet.tweetid)
      // add to db firebase
      return stateToReplace
    }

    case 'update/tweet': {
      const tweetToUpdate = action.payload as TweetFirebase
      const stateToReplace = state.filter(tw => tw.id !== tweetToUpdate.id)
      // add to db firebase
      return [...stateToReplace, tweetToUpdate]
    }

    case 'set/tweet': {
      return [...action.payload as TweetFirebase[]]
    }

    default: return state
  }
}

export {
  tweetsReducer
}
