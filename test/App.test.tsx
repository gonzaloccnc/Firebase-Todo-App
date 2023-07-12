import React from 'react'
import { render, screen } from '@testing-library/react'
import { RouterProvider } from 'react-router'
import AuthProvider from '../src/app/components/providers/AuthProvider'
import { router } from '../src/app/routes/BrowserRouter'

describe('App init', () => {
  test('should return to login page if not registered', () => {
    render(
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    )
    expect(screen.getByText('Login in your Account')).toBeDefined()
  })

  test('should return to root page if is registered', () => {

  })

  test('should show in the root the user name', () => {

  })
})
