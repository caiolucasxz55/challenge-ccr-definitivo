

"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { metroData } from "@/lib/metro-data"
import { useAuth } from "@/hooks/use-auth"
import type { Estacao } from "@/types/metro-type"

type LineColorKey = "Azul" | "Vermelha" | "Verde" | "Amarela";

const lineColors: Record<LineColorKey, string> = {
  Azul: "#0035A1",
  Vermelha: "#EE2737",
  Verde: "#007E5E",
  Amarela: "#FFD400",
  // Adicione outras cores conforme necessário
};

export default function EstacaoMapPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredStations, setFilteredStations] = useState<Estacao[]>(metroData.estacoes)
  const { user, loading } = useAuth()
  const router = useRouter()

  // Redirect if not logged in
  useEffect(() => {
    if (!loading && !user) {
      router.push("/login")
    }
  }, [user, loading, router])

  // If still loading or no user, show loading state
  if (loading || !user) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <p>Carregando...</p>
      </div>
    )
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase()
    setSearchTerm(term)

    if (!term.trim()) {
      setFilteredStations(metroData.estacoes)
      return
    }

    const filtered = metroData.estacoes.filter((station) => station.nome.toLowerCase().includes(term))
    setFilteredStations(filtered)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Mapa de Estações</h1>

      <div className="mb-6">
        <Input
          type="text"
          placeholder="Buscar estação..."
          value={searchTerm}
          onChange={handleSearch}
          className="max-w-md"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredStations.map((station) => (
          <Card key={station.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              {/* Linha colorida no topo */}
              <div style={{ height: '4px', backgroundColor: lineColors[station.linha as keyof typeof lineColors] || '#888' }} />
              <CardTitle className="text-xl">{station.nome}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Linha: <span style={{ color: lineColors[station.linha as keyof typeof lineColors] || '#555', fontWeight: 'bold' }}>{station.linha}</span>
              </p>
              <Link href={`/estacao-map/${station.id}`}>
                <Button variant="outline" size="sm">
                  Ver Detalhes
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredStations.length === 0 && (
        <p className="text-center py-8 text-muted-foreground">Nenhuma estação encontrada com o termo `{searchTerm}`</p>
      )}
    </div>
  )
}