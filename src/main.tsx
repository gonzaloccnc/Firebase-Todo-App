import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { AuthProvider } from './app/components/providers/AuthProvider'
import { router } from './app/routes/BrowserRouter'
import { TodoProvider } from './app/components/providers/TodoProvider'
import { TweetProvider } from './app/components/providers/TweetProvider'
import './app/shared/css/index.css'

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
