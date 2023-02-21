import React, { useContext } from 'react'
import { authContext } from '../../context/AuthContext'
import { Navigate } from 'react-router-dom'

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
