"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/hooks/use-auth"
import { useSavedRoutes } from "@/hooks/use-saved-routes"
import { SavedRouteCard } from "@/components/metro/saved-route-card"
import { MapPin } from "lucide-react"

export default function MyRoutesPage() {
  const { user, loading } = useAuth()
  const { savedRoutes } = useSavedRoutes()
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

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Minhas Rotas Salvas</h1>

      {savedRoutes.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center">
            <div className="flex justify-center mb-4">
              <MapPin className="h-12 w-12 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-medium mb-2">Nenhuma rota salva</h3>
            <p className="text-muted-foreground mb-6">
              Você ainda não salvou nenhuma rota. Planeje uma rota para começar.
            </p>
            <Button onClick={() => router.push("/route-planner")}>Planejar Rota</Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {savedRoutes.map((route) => (
            <SavedRouteCard key={route.id} route={route} />
          ))}
        </div>
      )}
    </div>
  )
}
