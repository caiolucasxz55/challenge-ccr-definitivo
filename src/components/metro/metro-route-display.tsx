"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp, Clock, MapPin, Train } from "lucide-react"
import type { Estacao } from "@/types/metro-type"

interface MetroRouteDisplayProps {
  route: Estacao[]
}

export function MetroRouteDisplay({ route }: MetroRouteDisplayProps) {
  const [expanded, setExpanded] = useState(true)

  if (!route.length) {
    return <p>Nenhuma rota encontrada</p>
  }

  const origin = route[0]
  const destination = route[route.length - 1]
  const estimatedTime = route.length * 3 // 3 minutes per station

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-medium">
            {origin.nome} → {destination.nome}
          </h3>
          <div className="flex items-center text-sm text-muted-foreground mt-1">
            <Clock className="w-4 h-4 mr-1" />
            <span>Tempo estimado: {estimatedTime} minutos</span>
          </div>
        </div>

        <Button variant="ghost" size="sm" onClick={() => setExpanded(!expanded)}>
          {expanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </Button>
      </div>

      {expanded && (
        <div className="space-y-2">
          {route.map((station, index) => (
            <Card key={station.id} className="border-l-4" style={{ borderLeftColor: getLineColor(station.linha) }}>
              <CardContent className="p-3 flex items-center">
                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center mr-3">
                  {index === 0 || index === route.length - 1 ? (
                    <MapPin className="w-4 h-4" />
                  ) : (
                    <Train className="w-4 h-4" />
                  )}
                </div>
                <div>
                  <p className="font-medium">{station.nome}</p>
                  <p className="text-xs text-muted-foreground">Linha {station.linha}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}

function getLineColor(linha: string): string {
  const colors: Record<string, string> = {
    Azul: "#0153a5",
    Verde: "#008061",
    Vermelha: "#ee1c25",
    Amarela: "#ffd526",
    Lilás: "#9b3894",
    Rubi: "#ca016b",
    Diamante: "#97a5a7",
    Esmeralda: "#01a9a7",
    Turquesa: "#00b1ec",
    Coral: "#f37321",
    Safira: "#1c2d90",
    Jade: "#00b352",
  }

  return colors[linha] || "#64748b"
}
