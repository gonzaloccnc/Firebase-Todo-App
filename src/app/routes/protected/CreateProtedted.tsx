import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { authContext } from '../../shared/context/AuthContext'

interface CreateProtectedProps {
  children: React.ReactNode
}

const CreateProtected: React.FC<CreateProtectedProps> = ({ children }) => {
  const { login } = useContext(authContext)

  if (login === 'idle') {
    return <Navigate to='/auth' />
  }

  return (
    <>{children}</>
  )
}

export {
  CreateProtected
}
