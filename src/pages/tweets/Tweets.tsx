import React, { type ChangeEvent, useState, useContext } from 'react'
import { TweetCard } from '../../components/tweets/TweetCard'
import { type TweetFirebase, defaultLogo } from '../../utils/types'
import { auth } from '../../firebase/firebase.config'
import { Timestamp } from 'firebase/firestore'
import { v4 } from 'uuid'
import { tweetContext } from '../../context/tweets/TweetsContext'

const Tweets: React.FC = () => {
  const { tweets: tweetsList, dispatch } = useContext(tweetContext)
  const [comment, setComment] = useState<string>('')

  const handleChange = ({ target }: ChangeEvent<HTMLTextAreaElement>): void => {
    setComment(target.value)
  }

  const handleClick = (): void => {
    const newTweet: TweetFirebase = {
      id: v4(),
      value: comment,
      date: Timestamp.fromDate(new Date(Date.now())),
      likes: 0,
      user: auth.currentUser?.displayName as string,
      domain: auth.currentUser?.email as string,
      logo: auth.currentUser?.photoURL ?? defaultLogo
    }
    dispatch({ type: 'add/tweet', payload: newTweet })
    setComment('')
  }

  return (
    <main className='w-full py-5 flex'>
      <aside className='w-1/4 flex flex-col items-center gap-5 pl-4'>
        <div className='flex flex-col items-center justify-center w-full'>
          <textarea
            name='tweet'
            value={comment}
            onChange={handleChange}
            id='tweet'
            className='outline-none bg-transparent border-b border-b-black px-2 resize-none w-full'
          />
        </div>
        <button
          className='bg-purple-600 text-white px-8 py-2 rounded-md mx-auto'
          onClick={handleClick}
        >
          Agregar
        </button>
      </aside>
      <div className='w-3/4 flex flex-col gap-5'>
        {
          tweetsList.map(tw => (
            <TweetCard
              key={tw.id}
              likes={tw.likes}
              tweet={tw.value}
              username={tw.user}
              userdomain={tw.domain}
              logo={tw.logo}
              date={tw.date.toDate()}
            />
          ))
        }
      </div>
    </main>
  )
}

export {
  Tweets
}
