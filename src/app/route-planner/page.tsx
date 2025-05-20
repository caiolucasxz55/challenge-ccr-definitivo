"use client"

import { Input } from "@/components/ui/input"
import { useState, useEffect, Suspense } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MetroRouteDisplay } from "@/components/metro/metro-route-display"
import { findRoute } from "@/lib/route-finder"
import { metroData } from "@/lib/metro-data"
import { useAuth } from "@/hooks/use-auth"
import { useSavedRoutes } from "@/hooks/use-saved-routes"
import { AlertCircle, Save } from "lucide-react"
import type { Estacao } from "@/types/metro-type"

// Componente que usa useSearchParams
function RouteParamsHandler({ 
  setOrigem, 
  setDestino, 
  setRota, 
  setRouteName 
}: { 
  setOrigem: (value: string) => void
  setDestino: (value: string) => void
  setRota: (value: Estacao[]) => void
  setRouteName: (value: string) => void
}) {
  const searchParams = useSearchParams()
  
  useEffect(() => {
    const from = searchParams.get("from")
    const to = searchParams.get("to")

    if (from && to) {
      setOrigem(from)
      setDestino(to)

      const route = findRoute(from, to)
      setRota(route)

      if (route.length > 0) {
        const originName = route[0].nome
        const destName = route[route.length - 1].nome
        setRouteName(`${originName} → ${destName}`)
      }
    }
  }, [searchParams, setOrigem, setDestino, setRota, setRouteName])
  
  return null
}

export default function RoutePlannerPage() {
  const [origem, setOrigem] = useState<string>("")
  const [destino, setDestino] = useState<string>("")
  const [rota, setRota] = useState<Estacao[]>([])
  const [error, setError] = useState<string>("")
  const [routeName, setRouteName] = useState<string>("")
  const { user, loading } = useAuth()
  const { saveRoute } = useSavedRoutes()
  const router = useRouter()

  // Redirect if not logged in
  useEffect(() => {
    if (!loading && !user) {
      router.push("/login")
    }
  }, [user, loading, router])

  if (loading || !user) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <p>Carregando...</p>
      </div>
    )
  }

  const handlePlanRoute = () => {
    if (!origem || !destino) {
      setError("Por favor, selecione estação de origem e destino")
      return
    }

    if (origem === destino) {
      setError("Origem e destino não podem ser iguais")
      return
    }

    setError("")
    const route = findRoute(origem, destino)
    setRota(route)

    if (route.length > 0) {
      const originName = route[0].nome
      const destName = route[route.length - 1].nome
      setRouteName(`${originName} → ${destName}`)
    }
  }

  const handleSaveRoute = () => {
    if (rota.length === 0) {
      setError("Não há rota para salvar")
      return
    }

    if (!routeName.trim()) {
      setError("Por favor, dê um nome para sua rota")
      return
    }

    saveRoute({
      id: Date.now().toString(),
      name: routeName,
      stations: rota.map((station) => station.id),
      createdAt: new Date().toISOString(),
    })

    setError("")
    alert("Rota salva com sucesso!")
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Componente com useSearchParams envolvido em Suspense */}
      <Suspense fallback={<div>Carregando parâmetros...</div>}>
        <RouteParamsHandler 
          setOrigem={setOrigem}
          setDestino={setDestino}
          setRota={setRota}
          setRouteName={setRouteName}
        />
      </Suspense>

      <h1 className="text-3xl font-bold mb-6">Planejador de Rotas</h1>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Selecione sua rota</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="space-y-2">
              <label htmlFor="origem" className="font-medium">
                Estação de Origem
              </label>
              <Select value={origem} onValueChange={setOrigem}>
                <SelectTrigger id="origem">
                  <SelectValue placeholder="Selecione a estação de origem" />
                </SelectTrigger>
                <SelectContent className="bg-white text-black border border-gray-200 rounded-md shadow-md">
                  {metroData.estacoes.map((estacao) => (
                    <SelectItem key={estacao.id} value={estacao.id}>
                      {estacao.nome}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

            </div>

            <div className="space-y-2">
              <label htmlFor="destino" className="font-medium">
                Estação de Destino
              </label>
              <Select value={destino} onValueChange={setDestino}>
                <SelectTrigger id="destino">
                  <SelectValue placeholder="Selecione a estação de destino" />
                </SelectTrigger>
                <SelectContent className="bg-white text-black border border-gray-200 rounded-md shadow-md">
                  {metroData.estacoes.map((estacao) => (
                    <SelectItem key={estacao.id} value={estacao.id}>
                      {estacao.nome}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

            </div>
          </div>

          {error && (
            <div className="bg-red-50 text-red-600 p-3 rounded-md flex items-start gap-2 mb-4">
              <AlertCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <Button onClick={handlePlanRoute} className="w-full">
            Planejar Rota
          </Button>
        </CardContent>
      </Card>

      {rota.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Sua Rota</CardTitle>
          </CardHeader>
          <CardContent>
            <MetroRouteDisplay route={rota} />

            <div className="mt-6 border-t pt-4">
              <div className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="routeName" className="font-medium">
                    Nome da Rota
                  </label>
                  <Input
                    id="routeName"
                    value={routeName}
                    onChange={(e) => setRouteName(e.target.value)}
                    placeholder="Ex: Casa → Trabalho"
                  />
                </div>

                <Button onClick={handleSaveRoute} className="w-full flex items-center gap-2">
                  <Save className="h-4 w-4" />
                  Salvar Rota
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}