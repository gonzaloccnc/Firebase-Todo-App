import React, { useContext } from 'react'
import { authContext } from '../../context/AuthContext'
import { Navigate } from 'react-router-dom'

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
