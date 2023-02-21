import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/BrowserRouter'
import { AuthProvider } from './context/AuthContext'
import { TodoProvider } from './context/TodoContext'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <AuthProvider>
      <TodoProvider>
        <RouterProvider router={router} />
      </TodoProvider>
    </AuthProvider>
  </React.StrictMode>
)
