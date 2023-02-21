import React, { useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { IoMdPerson } from 'react-icons/io'
import { handleSignOut } from '../../firebase/auth/auth'
import { authContext } from '../../context/AuthContext'

const Header: React.FC = () => {
  const { setLogin } = useContext(authContext)
  const navigate = useNavigate()

  const handleClick = (): void => {
    void handleSignOut()
    setLogin('idle')
    navigate('/auth')
  }

  return (
    <header className='flex justify-around items-center bg-purple-700 text-white h-14'>
      <Link to='/'>
        <h1 className='text-2xl'>Todo App</h1>
      </Link>
      <nav className='flex gap-8'>
        <NavLink to='/todos'>Todos</NavLink>
        <NavLink to='/tweets'>Tweets</NavLink>
        <NavLink to='/music'>Music</NavLink>
      </nav>
      <div>
        <div
          className='border border-black w-10 h-10 rounded-full flex items-center
          justify-center relative' id='close-session'>
          <IoMdPerson fill='#ffff00' />
          <div className='bg-black py-3 px-5 absolute -bottom-12 rounded-md' id='close-now'>
            <p
              className='cursor-pointer'
              onClick={handleClick}
            >
              Salir
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}

export {
  Header
}
