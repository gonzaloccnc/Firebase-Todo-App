import React, { useEffect, useContext } from 'react'
import { type UserCredential, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase/firebase.config'
import { useNavigate } from 'react-router-dom'
import { handleRedirectGoogle } from '../../firebase/auth/auth'
import { authContext } from '../../context/auth/AuthContext'
import { AuthComponent } from '../../components/auth/AuthComponent'

const Login: React.FC = () => {
  const { login } = useContext(authContext)
  const navigate = useNavigate()

  const handleClick = async (credentials: { email: string, password: string }): Promise<UserCredential> => {
    return await signInWithEmailAndPassword(
      auth,
      credentials.email,
      credentials.password
    )
  }

  useEffect(() => {
    if (login === 'register/none') {
      navigate('/auth/create')
    }
  }, [login])

  return (
    <AuthComponent
      title='Login in your Account'
      isLogin
      clickWithoutProvider={handleClick}
      clickWithProvider={handleRedirectGoogle}
    />
  )
}

export {
  Login
}
