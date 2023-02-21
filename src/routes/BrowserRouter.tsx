import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { Home } from '../pages/home/Home'
import { Login } from '../pages/auth/Login'
import { Register } from '../pages/auth/Register'
import { ErrorPage } from '../pages/error/ErrorPage'
import App from '../App'
import { Tweets } from '../pages/tweets/Tweets'
import { RouteProtected } from './protected/ProtectedRoute'
import { Todos } from '../pages/todos/Todos'
import { Create } from '../pages/create/Create'
import { AuthProtected } from './protected/AuthProtected'
import { AuthLayout } from '../pages/auth/AuthLayout'
import { CreateProtected } from './protected/CreateProtedted'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RouteProtected><App /></RouteProtected>,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'todos',
        element: <Todos />
      },
      {
        path: 'tweets',
        element: <Tweets />
      }
    ]
  },
  {
    path: '/auth',
    element: <AuthProtected><AuthLayout /></AuthProtected>,
    children: [
      {
        index: true,
        element: <Login />
      },
      {
        path: 'register',
        element: <Register />
      },
      {
        path: 'create',
        element: <CreateProtected><Create /></CreateProtected>
      }
    ]
  },
  {
    path: '*',
    element: <ErrorPage />
  }
])

export {
  router
}
