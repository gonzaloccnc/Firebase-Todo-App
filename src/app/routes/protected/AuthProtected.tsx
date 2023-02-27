import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { authContext } from '../../shared/context/AuthContext'

interface AuthProtectedProps {
  children: React.ReactNode
}

const AuthProtected: React.FC<AuthProtectedProps> = ({ children }) => {
  const { login } = useContext(authContext)

  if (login === 'register/done') {
    return <Navigate to='/' />
  }

  return (
    <>{children}</>
  )
}

export {
  AuthProtected
}
