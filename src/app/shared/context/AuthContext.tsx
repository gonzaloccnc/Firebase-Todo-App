import { createContext } from 'react'

interface ContextType {
  login: 'idle' | 'register/none' | 'register/done'
  userid: null | string
  setLogin: (state: 'idle' | 'register/none' | 'register/done') => void
  setId: (id: string) => void
}

export const authContext = createContext<ContextType>({
  login: 'idle',
  userid: null,
  setLogin: () => { },
  setId: () => { }
})
