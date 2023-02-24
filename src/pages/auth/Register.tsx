import React, { useContext, useEffect } from 'react'
import { handleCreateEmailAndPassword, handleRedirectGoogle } from '../../firebase/auth/auth'
import { AuthComponent } from '../../components/auth/AuthComponent'
import { type UserCredential } from 'firebase/auth'
import { authContext } from '../../context/auth/AuthContext'
import { useNavigate } from 'react-router-dom'

const Register: React.FC = () => {
  const { login } = useContext(authContext)
  const navigate = useNavigate()

  const handleClick = async (credentials: { email: string, password: string }): Promise<UserCredential> => {
    return await handleCreateEmailAndPassword(credentials.email, credentials.password)
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
      clickWithProvider={handleRedirectGoogle}
    />
  )
}

export {
  Register
}
