import React from 'react'
import { type dinamicObject } from '../../utils/types'

interface AuthFromProps {
  credentials: dinamicObject
  handleChange: (target: React.ChangeEvent<HTMLInputElement>) => void
}

const AuthForm: React.FC<AuthFromProps> = ({ credentials, handleChange }) => {
  return (
    <div className='flex flex-col gap-8 justify-center items-center'>
      <div>
        <input
          type='email'
          id='email'
          name='email'
          value={credentials.email}
          onChange={handleChange}
          placeholder='Type your email'
          className='outline-none border-b border-b-black p-2'
        />
      </div>
      <div>
        <input
          type='password'
          id='password'
          name='password'
          value={credentials.password}
          onChange={handleChange}
          placeholder='Type your password'
          className='outline-none border-b border-b-black p-2'
        />
      </div>
    </div>
  )
}

export {
  AuthForm
}
