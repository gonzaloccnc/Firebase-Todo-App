import { onAuthStateChanged } from 'firebase/auth'
import React, { createContext, useEffect, useState } from 'react'
import { auth } from '../../firebase/firebase.config'
import { getUser } from '../../firebase/firestore/firestore'
interface ContextType {
  login: 'idle' | 'register/none' | 'register/done'
  userid: null | string
  setLogin: (state: 'idle' | 'register/none' | 'register/done') => void
  setId: (id: string) => void
}

interface AuthProviderProps {
  children: React.ReactNode
}

const authContext = createContext<ContextType>({
  login: 'idle',
  userid: null,
  setLogin: () => { },
  setId: () => { }
})

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
