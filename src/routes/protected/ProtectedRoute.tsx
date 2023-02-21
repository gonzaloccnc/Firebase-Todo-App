import React, { useContext } from 'react'

import { Navigate } from 'react-router-dom'
import { authContext } from '../../context/AuthContext'

interface HomeProtetedProps {
  children: React.ReactNode
}

const RouteProtected: React.FC<HomeProtetedProps> = ({ children }) => {
  const { login } = useContext(authContext)
  console.log(login)
  if (login === 'idle') {
    return <Navigate to='/auth' />
  }

  if (login === 'register/none') {
    return <Navigate to='/auth/create' />
  }

  return (
    <>
      {children}
    </>
  )
}

export {
  RouteProtected
}
