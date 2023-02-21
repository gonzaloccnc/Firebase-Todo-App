import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthForm } from './AuthForm'
import { type dinamicObject } from '../../utils/types'
import { type UserCredential } from 'firebase/auth'
import { handleError } from '../../utils/handleError'

interface AuthComponentProps {
  title: string
  isLogin: boolean
  clickWithoutProvider: (credentials: { email: string, password: string }) => Promise<UserCredential>
  clickWithProvider: () => void
}

const AuthComponent: React.FC<AuthComponentProps> = ({ title, isLogin, clickWithProvider, clickWithoutProvider }) => {
  const textButtons = isLogin ? 'Login' : 'Register'
  const routeTo = isLogin ? '/auth/register' : '/auth'
  const textToLink = isLogin ? 'Are you register? ' : 'Do you have an account? '
  const linkText = isLogin ? 'Register' : 'Login'
  const [error, setError] = useState<null | string>(null)
  const [disabled, setDisabled] = useState<boolean>(false)

  const [credentials, setCredentials] = useState<dinamicObject>({
    email: '',
    password: ''
  })

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = target
    setCredentials(prev => ({ ...prev, [name]: value }))
  }

  const handleClick = (): void => {
    setDisabled(true)
    clickWithoutProvider(credentials as { email: string, password: string })
      .then(user => {
      })
      .catch(ex => {
        setError(handleError(ex))
      })
      .finally(() => {
        setDisabled(false)
      })
  }

  useEffect(() => {
    const delay = setTimeout(() => {
      if (error !== null) { setError(null) }
    }, 3000)

    return () => { clearTimeout(delay) }
  }, [error])

  return (
    <>
      <h1 className='text-5xl text-orange-800'>{title}</h1>
      <div className='flex flex-col gap-8 justify-center items-center h-full'>
        <AuthForm credentials={credentials} handleChange={handleChange} />
        <div className='flex flex-col gap-5'>
          <button
            className='py-3 px-10 rounded-lg text-white bg-purple-700 disabled:opacity-70'
            onClick={handleClick}
            disabled={disabled}
          >
            {textButtons}
          </button>
          <button
            className='py-3 px-10 rounded-lg text-white bg-purple-700 disabled:opacity-70'
            onClick={clickWithProvider}
            disabled={disabled}
          >
            {textButtons} with Google
          </button>
        </div>
        <span className='cursor-default'>
          {textToLink}
          <Link to={routeTo} className='underline underline-offset-4'>{linkText} now!</Link>
        </span>
        {
          error !== null
            ? <h1 className='text-redPure font-bold text-xl'>{error}</h1>
            : null
        }
      </div>
    </>
  )
}

export {
  AuthComponent
}
