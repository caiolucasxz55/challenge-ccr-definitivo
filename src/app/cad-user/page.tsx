"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import {
  Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { registerUsuario } from "@/service/API/usuario" 

export default function RegisterPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!name || !email || !password || !confirmPassword) {
      setError("Por favor, preencha todos os campos")
      return
    }

    if (password !== confirmPassword) {
      setError("As senhas não coincidem")
      return
    }

    try {
      await registerUsuario(name, email)
      router.push("/login-user")
    } catch (err: any) {
      setError(err.message || "Erro ao cadastrar. Tente novamente.")
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 flex justify-center items-center min-h-[80vh]">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl">Cadastro</CardTitle>
          <CardDescription>Crie sua conta para acessar todos os recursos</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="font-medium">Nome</label>
              <Input id="name" type="text" placeholder="Seu nome" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="font-medium">Email</label>
              <Input id="email" type="email" placeholder="seu@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="font-medium">Senha</label>
              <Input id="password" type="password" placeholder="********" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="space-y-2">
              <label htmlFor="confirmPassword" className="font-medium">Confirmar Senha</label>
              <Input id="confirmPassword" type="password" placeholder="********" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <Button type="submit" className="w-full">Cadastrar</Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-muted-foreground">
            Já tem uma conta?{" "}
            <Link href="/login-user" className="text-primary hover:underline">Faça login</Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}
