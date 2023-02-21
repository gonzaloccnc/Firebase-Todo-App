import React, { type ChangeEvent, useContext, useState } from 'react'
import { v4 } from 'uuid'
import { todoContext } from '../../context/TodoContext'
import { authContext } from '../../context/AuthContext'

const initForm = {
  todo: '',
  check: false
}

const TodoForm: React.FC = () => {
  const [form, setForm] = useState<Record<string, (string | boolean)>>(initForm)
  const { dispatch } = useContext(todoContext)
  const { userid } = useContext(authContext)

  const handleChange = ({ target: tg }: ChangeEvent<HTMLInputElement>): void => {
    setForm(prev => ({ ...prev, [tg.name]: tg.type === 'checkbox' ? tg.checked : tg.value }))
  }

  const handleClick = (): void => {
    const newTodo = {
      id: v4(),
      todo: form.todo as string,
      important: form.check as boolean
    }

    dispatch({
      type: 'add/todo',
      payload: {
        todo: newTodo,
        id: userid as string
      }
    })

    setForm(initForm)
  }

  return (
    <div className='w-1/2 mx-auto mt-5 flex flex-col gap-5'>
      <div className='flex flex-col gap-5'>
        <label htmlFor='todo'>Escribe algo!</label>
        <input
          type='text'
          name='todo'
          id='todo'
          onChange={handleChange}
          value={form.todo as string}
          placeholder='Que tienes pendiente hacer!'
          className='border-b border-b-green-800 outline-none'
        />
      </div>
      <div className='flex gap-3 items-center justify-end flex-row-reverse'>
        <label htmlFor='check'>importante</label>
        <input
          type='checkbox'
          name='check'
          id='check'
          checked={form.check as boolean}
          onChange={handleChange}
        />
      </div>
      <div className='w-full flex'>
        <button
          className='bg-purple-600 text-white px-8 py-2 rounded-md mx-auto'
          onClick={handleClick}
        >
          Agregar
        </button>
      </div>
    </div>
  )
}

export {
  TodoForm
}
