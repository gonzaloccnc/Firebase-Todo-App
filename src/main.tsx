import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/BrowserRouter'
import { AuthProvider } from './context/auth/AuthContext'
import { TodoProvider } from './context/todo/TodoContext'
import { TweetProvider } from './context/tweets/TweetsContext'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <AuthProvider>
      <TodoProvider>
        <TweetProvider>
          <RouterProvider router={router} />
        </TweetProvider>
      </TodoProvider>
    </AuthProvider>
  </React.StrictMode>
)
