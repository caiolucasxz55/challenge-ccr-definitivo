"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/hooks/use-auth"

export function HomeHero() {
  const { user } = useAuth()

  return (
    <div className="py-12 md:py-24 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">Metrô de São Paulo</h1>
      <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
        Planeje suas viagens pelo sistema metroviário de São Paulo com facilidade e praticidade
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        {user ? (
          <>
            <Link href="/route-planner">
              <Button size="lg" className="w-full sm:w-auto">
                Planejar Rota
              </Button>
            </Link>
            <Link href="/my-routes">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Minhas Rotas
              </Button>
            </Link>
          </>
        ) : (
          <>
            <Link href="/login">
              <Button size="lg" className="w-full sm:w-auto">
                Entrar
              </Button>
            </Link>
            <Link href="/register">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Cadastrar
              </Button>
            </Link>
          </>
        )}
      </div>
    </div>
  )
}
