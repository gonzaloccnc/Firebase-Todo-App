import React from 'react'
import './firebase/firebase.config'
import { Header } from './components/header/Header'
import { Outlet } from 'react-router-dom'

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default App
