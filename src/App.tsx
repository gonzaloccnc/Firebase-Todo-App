import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from './app/components/header/Header'
// import './main/infra/firebase/firebase'

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
