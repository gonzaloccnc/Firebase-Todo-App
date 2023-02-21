import React from 'react'
import { AiFillHeart } from 'react-icons/ai'

interface TweetCardProps {
  logo: string
  username: string
  userdomain: string
  tweet: string
  date: Date
  likes: number
}

const TweetCard: React.FC<TweetCardProps> = ({ logo, username, userdomain, tweet, date, likes }) => {
  const onlyone = username.split(' ')[0]
  const datenow = new Date(Date.now())
  const diffdate = Math.round(((datenow.getTime() - date.getTime()) / 3600000) * 60)

  return (
    <article className='bg-darkBlue w-3/4 mx-auto text-white flex p-3 gap-3 rounded-lg'>
      <div className='h-full w-12'>
        <img src={logo} alt={username} className='w-12 aspect-[1/1] object-cover rounded-full' />
      </div>
      <div style={{ width: 'calc(100% - 48px)' }} className='flex flex-col gap-3'>
        <h1 className='font-bold'>{onlyone}
          <span className='text-gray-700'> {userdomain} *
            {` ${diffdate}`}m
          </span>
        </h1>
        <p>{tweet}</p>
        <div className='flex gap-2 items-center'>
          <AiFillHeart />
          <span>{likes}</span>
        </div>
      </div>
    </article>
  )
}

export {
  TweetCard
}
