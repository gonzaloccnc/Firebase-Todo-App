import React, { lazy, Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from '../../App'

const Home = lazy(async () => await import('../pages/home/Home'))
const Login = lazy(async () => await import('../pages/auth/Login'))
const Register = lazy(async () => await import('../pages/auth/Register'))
const ErrorPage = lazy(async () => await import('../pages/error/ErrorPage'))
const Tweets = lazy(async () => await import('../pages/tweets/Tweets'))
const RouteProtected = lazy(async () => await import('./protected/ProtectedRoute'))
const Todos = lazy(async () => await import('../pages/todos/Todos'))
const Create = lazy(async () => await import('../pages/create/Create'))
const AuthProtected = lazy(async () => await import('./protected/AuthProtected'))
const AuthLayout = lazy(async () => await import('../pages/auth/AuthLayout'))
const CreateProtected = lazy(async () => await import('./protected/CreateProtedted'))
const TodoProvider = lazy(async () => await import('../components/providers/TodoProvider'))
const TweetProvider = lazy(async () => await import('../components/providers/TweetProvider'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <Suspense fallback={<div>loading</div>}><RouteProtected><App /></RouteProtected></Suspense>,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'todos',
        element: <TodoProvider><Todos /></TodoProvider>
      },
      {
        path: 'tweets',
        element: <TweetProvider><Tweets /></TweetProvider>
      }
    ]
  },
  {
    path: '/auth',
    element: <Suspense fallback={<div>loading</div>}><AuthProtected><AuthLayout /></AuthProtected></Suspense>,
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
    element: <Suspense fallback={<div>loading</div>}><ErrorPage /></Suspense>
  }
])

export {
  router
}
