"use client"

import { useRouter } from "next/navigation"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, MapPin, Trash2 } from "lucide-react"
import { metroData } from "@/lib/metro-data"
import { useSavedRoutes } from "@/hooks/use-saved-routes"
import type { SavedRoute } from "@/types/saved-route-type"

interface SavedRouteCardProps {
  route: SavedRoute
}

export function SavedRouteCard({ route }: SavedRouteCardProps) {
  const router = useRouter()
  const { deleteRoute } = useSavedRoutes()

  // Get station objects from IDs
  const stations = route.stations.map((id) => metroData.estacoes.find((station) => station.id === id)).filter(Boolean)

  const origin = stations[0]
  const destination = stations[stations.length - 1]
  const estimatedTime = stations.length * 3 // 3 minutes per station

  // Format date
  const formattedDate = new Date(route.createdAt).toLocaleDateString("pt-BR", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })

  const handleUseRoute = () => {
    if (origin && destination) {
      router.push(`/route-planner?from=${origin.id}&to=${destination.id}`)
    }
  }

  const handleDeleteRoute = () => {
    if (confirm("Tem certeza que deseja excluir esta rota?")) {
      deleteRoute(route.id)
    }
  }

  if (!origin || !destination) {
    return null
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{route.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-primary mt-0.5" />
            <div>
              <p className="font-medium">De: {origin.nome}</p>
              <p className="text-sm text-muted-foreground">Linha {origin.linha}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-primary mt-0.5" />
            <div>
              <p className="font-medium">Para: {destination.nome}</p>
              <p className="text-sm text-muted-foreground">Linha {destination.linha}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">Tempo estimado: {estimatedTime} minutos</p>
          </div>

          <p className="text-xs text-muted-foreground">Salvo em: {formattedDate}</p>
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button onClick={handleUseRoute} className="flex-1">
          Usar Rota
        </Button>
        <Button variant="outline" size="icon" onClick={handleDeleteRoute}>
          <Trash2 className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  )
}
