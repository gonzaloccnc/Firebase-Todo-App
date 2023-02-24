import React, { createContext, useEffect, useReducer } from 'react'
import { type Reducer, type TweetFirebase, type TweetPayload } from '../../utils/types'
import { getTwets } from '../../firebase/firestore/firestore'
import { tweetsReducer } from './reducers/TweetsReducer'

interface defaulContext {
  tweets: TweetFirebase[]
  dispatch: (action: Reducer<TweetPayload>) => void
}

interface TweetProviderProps {
  children: React.ReactNode
}

export const tweetContext = createContext<defaulContext>({
  tweets: [],
  dispatch: () => { }
})

const TweetProvider: React.FC<TweetProviderProps> = ({ children }) => {
  const [tweets, dispatch] = useReducer(tweetsReducer, [])

  const getTweets = async (): Promise<void> => {
    const tdata: TweetFirebase[] = []
    const list = await getTwets()
    list.forEach(data => {
      tdata.push({ ...data.data(), id: data.id })
    })
    dispatch({ type: 'set/tweet', payload: tdata })
  }

  useEffect(() => {
    void getTweets()
  }, [])

  return (
    <tweetContext.Provider value={{ tweets, dispatch }}>
      {children}
    </tweetContext.Provider>
  )
}

export {
  TweetProvider
}
