import React from 'react'
import { render, screen } from '@testing-library/react'
import { AuthProvider } from '../src/context/AuthContext'
import { RouterProvider } from 'react-router'
import { router } from '../src/routes/BrowserRouter'

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
