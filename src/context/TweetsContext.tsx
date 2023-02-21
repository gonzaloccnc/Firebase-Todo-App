import React, { createContext, useEffect, useState } from 'react'
import { type TweetFirebase } from '../utils/types'
import { getTwets } from '../firebase/firestore/firestore'

interface defaulContext {
  tweets: TweetFirebase[]
}

interface TweetProviderProps {
  children: React.ReactNode
}

export const tweetContext = createContext<defaulContext>({ tweets: [] })

const TweetProvider: React.FC<TweetProviderProps> = ({ children }) => {
  const [tweets, setTweets] = useState<TweetFirebase[]>([])

  const getTweets = async (): Promise<void> => {
    const tdata: TweetFirebase[] = []
    const list = await getTwets()
    list.forEach(data => {
      tdata.push({ ...data.data(), id: data.id })
    })
    setTweets(tdata)
  }

  useEffect(() => {
    void getTweets()
  }, [])

  return (
    <tweetContext.Provider value={{ tweets }}>
      {children}
    </tweetContext.Provider>
  )
}

export {
  TweetProvider
}
