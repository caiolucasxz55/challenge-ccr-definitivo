'use client'

import { createContext, useEffect, useState, ReactNode, useContext } from 'react'
import { useRouter } from 'next/navigation'
import { v4 as uuidv4 } from 'uuid'

type User = {
  id: string
  name: string
  email: string
  password: string
}

type AuthContextType = {
  user: User | null
  login: (email: string, password: string) => Promise<void>
  logout: () => void
  register: (name: string, email: string, password: string) => Promise<void>
  loading: boolean
}

export const AuthContext = createContext<AuthContextType>({} as AuthContextType)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setLoading(false)
  }, [])

  const login = async (email: string, password: string) => {
    const storedUsers: User[] = JSON.parse(localStorage.getItem('users') || '[]')

    const foundUser = storedUsers.find(
      (u) => u.email === email && u.password === password
    )

    if (foundUser) {
      setUser(foundUser)
      localStorage.setItem('user', JSON.stringify(foundUser))
      router.push('/')
    } else {
      throw new Error('Email ou senha incorretos')
    }
  }

  const register = async (name: string, email: string, password: string) => {
    const storedUsers: User[] = JSON.parse(localStorage.getItem('users') || '[]')

    const userExists = storedUsers.some((u) => u.email === email)

    if (userExists) {
      throw new Error('Email já cadastrado')
    }

    const newUser: User = { id: uuidv4(), name, email, password }
    const updatedUsers = [...storedUsers, newUser]

    localStorage.setItem('users', JSON.stringify(updatedUsers))
    localStorage.setItem('user', JSON.stringify(newUser))

    setUser(newUser)
    router.push('/')
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
    router.push('/login')
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, register, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
