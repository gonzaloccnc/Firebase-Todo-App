import React, { useEffect, useContext } from 'react'
import { type UserCredential, signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { AuthComponent } from '../../components/auth/AuthComponent'
import { authContext } from '../../shared/context/AuthContext'
import { auth } from '../../../main/infra/firebase/firebase'
import { redirectWithGoogle } from '../../../main/infra/firebase/AuthFirebase'

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
      clickWithProvider={redirectWithGoogle}
    />
  )
}

export {
  Login
}
