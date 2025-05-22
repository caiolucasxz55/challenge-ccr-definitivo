'use client'

import { createContext, useEffect, useState, ReactNode } from 'react'
import { useRouter } from 'next/navigation'

type User = {
  name: string
  email: string
}

type AuthContextType = {
  user: User | null
  login: (email: string, password: string) => Promise<void>
  logout: () => void
  register: (name: string, email: string, password: string) => Promise<void>
}

export const AuthContext = createContext<AuthContextType>({} as AuthContextType)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const router = useRouter()

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  const login = async (email: string, password: string) => {
    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]')

    const foundUser = storedUsers.find(
      (u: User & { password: string }) => u.email === email && u.password === password
    )

    if (foundUser) {
      const { name, email } = foundUser
      const loggedUser = { name, email }
      setUser(loggedUser)
      localStorage.setItem('user', JSON.stringify(loggedUser))
      router.push('/')
    } else {
      throw new Error('Email ou senha incorretos')
    }
  }

  const register = async (name: string, email: string, password: string) => {
    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]')

    const userExists = storedUsers.some((u: User) => u.email === email)

    if (userExists) {
      throw new Error('Usuário já cadastrado')
    }

    const newUser = { name, email, password }
    const updatedUsers = [...storedUsers, newUser]
    localStorage.setItem('users', JSON.stringify(updatedUsers))

    const loggedUser = { name, email }
    setUser(loggedUser)
    localStorage.setItem('user', JSON.stringify(loggedUser))

    router.push('/')
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
    router.push('/login')
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  )
}
