import React, { useContext, useEffect } from 'react'
import { AuthComponent } from '../../components/auth/AuthComponent'
import { type UserCredential } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { authContext } from '../../shared/context/AuthContext'
import { createEmailAndPassword, redirectWithGoogle } from '../../../main/infra/firebase/AuthFirebase'

const Register: React.FC = () => {
  const { login } = useContext(authContext)
  const navigate = useNavigate()

  const handleClick = async (credentials: { email: string, password: string }): Promise<UserCredential> => {
    return await createEmailAndPassword(credentials.email, credentials.password)
  }

  useEffect(() => {
    if (login === 'register/none') {
      navigate('/auth/create')
    }
  }, [login])

  return (
    <AuthComponent
      title='Register your Account'
      isLogin={false}
      clickWithoutProvider={handleClick}
      clickWithProvider={redirectWithGoogle}
    />
  )
}

export {
  Register
}
