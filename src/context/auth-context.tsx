"use client"

import React, { createContext, useEffect, useState } from "react"

interface User {
  id: string
  name: string
  email: string
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<void>
  register: (name: string, email: string, password: string) => Promise<void>
  logout: () => void
  loading: boolean
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  login: async () => {},
  register: async () => {},
  logout: () => {},
  loading: true,
})

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  const BASE_URL = "https://java-teste-deploy-production.up.railway.app"

  useEffect(() => {
    const storedUser = localStorage.getItem("metro-user")
    if (storedUser) setUser(JSON.parse(storedUser))
    setLoading(false)
  }, [])

  const register = async (name: string, email: string, password: string) => {
    const res = await fetch(`${BASE_URL}/api/users/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    })
    if (!res.ok) {
      const data = await res.json().catch(() => ({}))
      throw new Error(data.message || "Erro ao registrar")
    }
  }

  const login = async (email: string, password: string) => {
    const res = await fetch(`${BASE_URL}/api/users/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
    if (!res.ok) {
      const data = await res.json().catch(() => ({}))
      throw new Error(data.message || "Erro ao fazer login")
    }
    const data = await res.json()
    setUser({
      id: data.id.toString(),
      name: data.name,
      email: data.email,
    })
    localStorage.setItem("metro-user", JSON.stringify(data))
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("metro-user")
  }

  return (
    <AuthContext.Provider value={{ user, register, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  )
}
