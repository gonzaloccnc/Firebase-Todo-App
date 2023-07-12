import React from 'react'
import { Outlet } from 'react-router-dom'

const AuthLayout: React.FC = () => {
  return (
    <main className='w-full h-screen flex'>
      <div
        className={'w-3/5 h-full bg-no-repeat bg-cover bg-center bg-login'} />
      <div className='flex flex-col items-center w-2/5 py-5'>
        <Outlet />
      </div>
    </main>
  )
}

export default AuthLayout
