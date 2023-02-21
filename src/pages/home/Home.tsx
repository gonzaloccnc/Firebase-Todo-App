import React from 'react'
import { auth } from '../../firebase/firebase.config'

const Home: React.FC = () => {
  const user = auth.currentUser

  return (
    <h1 className='text-4xl'>Hola
      <span className='text-blue-800'> {user?.displayName}</span>,
      empezemos!!!
    </h1>
  )
}

export {
  Home
}
