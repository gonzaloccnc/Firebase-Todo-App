import React from 'react'
import { auth } from '../../../main/infra/firebase/firebase'

const Home: React.FC = () => {
  const user = auth.currentUser

  return (
    <h1 className='text-4xl'>Hola
      <span className='text-blue-800'> {user?.displayName}</span>,
      empezemos!!!
    </h1>
  )
}

export default Home
