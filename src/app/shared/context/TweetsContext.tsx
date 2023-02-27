import { createContext } from 'react'
import { type TweetModel } from '../../../main/domain/models/TweetModel'
import { type TweetPayload } from '../../shared/utils/payloads'
import { type Reducer } from '../../shared/utils/types'

interface defaulContext {
  tweets: TweetModel[]
  dispatch: (action: Reducer<TweetPayload>) => void
}

export const tweetContext = createContext<defaulContext>({
  tweets: [],
  dispatch: () => { }
})
