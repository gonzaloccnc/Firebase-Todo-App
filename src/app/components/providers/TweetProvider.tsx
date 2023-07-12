import React, { useEffect, useReducer } from 'react'
import { type TweetModel } from '../../../main/domain/models/TweetModel'
import { tweetsReducer } from '../../shared/reducers/TweetsReducer'
import { tweetContext } from '../../shared/context/TweetsContext'
import { readTweet } from '../../../main/infra/firebase/TweetFirebase'

interface TweetProviderProps {
  children: React.ReactNode
}

const TweetProvider: React.FC<TweetProviderProps> = ({ children }) => {
  const [tweets, dispatch] = useReducer(tweetsReducer, [])

  const getTweets = async (): Promise<void> => {
    const tdata: TweetModel[] = []
    const list = await readTweet()
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

export default TweetProvider
