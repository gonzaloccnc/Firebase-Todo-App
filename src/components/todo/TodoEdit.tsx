import React, { type ChangeEvent, useState, useContext } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import { todoContext } from '../../context/todo/TodoContext'
import { authContext } from '../../context/auth/AuthContext'

interface TodoEditProps {
  id: string
  todo: string
  important: boolean
  close: (state: boolean) => void
}

const TodoEdit: React.FC<TodoEditProps> = ({ todo, important, close, id }) => {
  const [form, setForm] = useState<Record<string, (string | boolean)>>({
    todo,
    checkUp: important
  })

  const { dispatch } = useContext(todoContext)
  const { userid } = useContext(authContext)

  const handleChange = ({ target: tg }: ChangeEvent<HTMLInputElement>): void => {
    setForm(prev => ({
      ...prev,
      [tg.name]: tg.type === 'checkbox'
        ? tg.checked
        : tg.value
    }))
  }

  const handleClick = (): void => {
    close(false)
  }

  const handleUpdate = (): void => {
    dispatch({
      type: 'update/todo',
      payload: {
        id: userid as string,
        todo: {
          todo: form.todo as string,
          important: form.checkUp as boolean,
          id
        }
      }
    })

    close(false)
  }

  return (
    <section
      className='w-full h-screen absolute bg-[rgba(0,0,0,0.7)] top-0 left-0 flex
      justify-center items-center'>
      <AiFillCloseCircle
        className='absolute top-5 right-5'
        fontSize='35'
        fill='#ff0000'
        onClick={handleClick}
      />
      <div
        className='flex flex-col gap-5 bg-white w-1/2 rounded-md h-80 items-center
        justify-center'>
        <div>
          <input
            type='text'
            name='todo'
            className='border-b outline-none border-black px-3'
            value={form.todo as string}
            onChange={handleChange}
          />
        </div>
        <div className='flex gap-3 items-center justify-end flex-row-reverse'>
          <label htmlFor='checkUp'>Importante</label>
          <input
            type='checkbox'
            id='checkUp'
            name='checkUp'
            checked={form.checkUp as boolean}
            onChange={handleChange} />
        </div>
        <div>
          <button
            className='bg-purple-600 text-white px-8 py-2 rounded-md mx-auto'
            onClick={handleUpdate}
          >
            Actualizar
          </button>
        </div>
      </div>
    </section>
  )
}

export {
  TodoEdit
}
