import React, { useState, type ChangeEvent, useContext } from 'react'
import { type dinamicObject } from '../../utils/types'
import { createUser } from '../../firebase/firestore/firestore'
import { v4 } from 'uuid'
import { auth } from '../../firebase/firebase.config'
import { authContext } from '../../context/auth/AuthContext'
import { type User, updateProfile } from 'firebase/auth'

const Create: React.FC = () => {
  const [form, setForm] = useState<dinamicObject>({
    name: '',
    age: ''
  })

  const { setLogin, setId } = useContext(authContext)

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setForm(crr => ({
      ...crr,
      [e.target.name]: e.target.value
    }))
  }

  const handleClick = async (): Promise<void> => {
    const newUser = {
      email: auth.currentUser?.email as string,
      nombre: form.name,
      edad: Number(form.age),
      id: v4()
    }
    await Promise.all([
      createUser(newUser),
      updateProfile(auth.currentUser as User, {
        displayName: form.name
      })
    ])

    setLogin('register/done')
    setId(newUser.id)
  }

  return (
    <section className='flex flex-col gap-8 justify-center items-center h-full'>
      <div className='flex flex-col gap-4'>
        <label htmlFor='name'>Nombres</label>
        <input
          type='text'
          id='name'
          name='name'
          className='outline-none border-b border-b-black p-2'
          value={form.name}
          onChange={handleChange}
        />
      </div>
      <div className='flex flex-col gap-4'>
        <label htmlFor='age'>Edad</label>
        <input
          type='number
        ' id='age'
          name='age'
          className='outline-none border-b border-b-black p-2'
          value={Number(form.age)}
          onChange={handleChange}
        />
      </div>
      <div>
        <button
          className='py-3 px-10 rounded-lg text-white bg-purple-700 disabled:opacity-70'
          onClick={(): void => { void handleClick() }}
        >
          Terminar
        </button>
      </div>
    </section>
  )
}

export {
  Create
}
