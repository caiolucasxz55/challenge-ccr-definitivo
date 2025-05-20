"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { metroData } from "@/lib/metro-data"
import { useAuth } from "@/hooks/use-auth"
import { EstacaoMapa } from "@/components/estacao/estacao-mapa"
import { EstacaoListaAcessibilidade } from "@/components/estacao/estacao-lista-acessibilidade"
import type { Estacao } from "@/types/metro-type"

export default function EstacaoDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [station, setStation] = useState<Estacao | null>(null)
  const [loading, setLoading] = useState(true)
  const { user, loading: authLoading } = useAuth()

  // Redirect if not logged in
  useEffect(() => {
    if (!authLoading && !user) {
      router.push("/login")
    }
  }, [user, authLoading, router])

  useEffect(() => {
    if (params.stationid) {
      const stationId = params.stationid as string
      const foundStation = metroData.estacoes.find((s) => s.id === stationId)

      if (foundStation) {
        setStation(foundStation)
      }

      setLoading(false)
    }
  }, [params.stationid])

  // If still loading auth or no user, show loading state
  if (authLoading || !user) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <p>Carregando...</p>
      </div>
    )
  }

  if (loading) {
    return <div className="container mx-auto px-4 py-8 text-center">Carregando...</div>
  }

  if (!station) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-3xl font-bold mb-6">Estação não encontrada</h1>
        <Button onClick={() => router.back()}>Voltar</Button>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Button variant="outline" onClick={() => router.back()} className="mb-6">
        Voltar
      </Button>

      <h1 className="text-3xl font-bold mb-6">{station.nome}</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Mapa da Estação</CardTitle>
            </CardHeader>
            <CardContent>
              <EstacaoMapa estacao={station} />
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Informações</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p>
                  <strong>Linha:</strong> {station.linha}
                </p>
                <p>
                  <strong>Endereço:</strong> {station.endereco || "Não disponível"}
                </p>
                <p>
                  <strong>Horário de Funcionamento:</strong> 04:40 - 00:00
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Acessibilidade</CardTitle>
            </CardHeader>
            <CardContent>
              <EstacaoListaAcessibilidade estacao={station} />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
