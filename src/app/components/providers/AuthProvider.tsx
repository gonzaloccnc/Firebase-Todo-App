import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { authContext } from '../../shared/context/AuthContext'
import { getUser } from '../../../main/infra/firebase/UserFirebase'
import { auth } from '../../../main/infra/firebase/firebase'

interface AuthProviderProps {
  children: React.ReactNode
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [login, setLogin] = useState<'idle' | 'register/none' | 'register/done'>('idle')
  const [id, setId] = useState<null | string>(null)

  useEffect(() => {
    onAuthStateChanged(auth, currentUser => {
      if (currentUser !== null) {
        getUser(currentUser.email as string)
          .then(v => {
            if (v.id !== null) {
              setLogin('register/done')
              setId(v.id)
            } else {
              setLogin('register/none')
            }
          })
          .catch(e => {
            setLogin('register/none')
          })
      }
    })
  }, [])

  return (
    <authContext.Provider value={{ login, userid: id, setLogin, setId }}>
      {children}
    </authContext.Provider >
  )
}

export {
  authContext,
  AuthProvider
}
