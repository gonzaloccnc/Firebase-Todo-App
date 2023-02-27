import React, { useContext, useState } from 'react'
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai'
import { TodoEdit } from './TodoEdit'
import { todoContext } from '../../shared/context/TodoContext'
import { authContext } from '../../shared/context/AuthContext'

interface TodoCardProps {
  todo: string
  important: boolean
  id: string
}

const TodoCard: React.FC<TodoCardProps> = ({ todo, id, important }) => {
  const { dispatch } = useContext(todoContext)
  const [edit, setEdit] = useState<boolean>(false)
  const { userid } = useContext(authContext)

  const handleDelete = (): void => {
    dispatch({
      type: 'delete/todo',
      payload: {
        todoid: id,
        userid: userid as string
      }
    })
  }

  return (
    <>
      <div className='w-1/2 mx-auto text-center mt-5 text-white bg-cyan-600 py-4 px-4 rounded-lg flex justify-between items-center'>
        <h1 className='cursor-default'>{todo}</h1>
        <div className='flex gap-3'>
          <AiOutlineEdit
            fontSize='30'
            fill='purple'
            className='cursor-pointer'
            onClick={() => { setEdit(true) }}
          />
          <AiOutlineDelete
            fontSize='30'
            fill='red'
            className='cursor-pointer'
            onClick={handleDelete}
          />
        </div>
      </div>
      {
        edit ? <TodoEdit todo={todo} important={important} close={setEdit} id={id} /> : null
      }
    </>
  )
}

export {
  TodoCard
}
