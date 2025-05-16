"use client"

import { useState, useEffect } from "react"
import { useAuth } from "@/hooks/use-auth"
import type { SavedRoute } from "@/types/saved-route-type"

export function useSavedRoutes() {
  const [savedRoutes, setSavedRoutes] = useState<SavedRoute[]>([])
  const { user } = useAuth()

  // Load saved routes from localStorage when component mounts
  useEffect(() => {
    if (user) {
      const storedRoutes = localStorage.getItem(`metro-routes-${user.id}`)
      if (storedRoutes) {
        setSavedRoutes(JSON.parse(storedRoutes))
      }
    } else {
      setSavedRoutes([])
    }
  }, [user])

  // Save a new route
  const saveRoute = (route: SavedRoute) => {
    if (!user) return

    const updatedRoutes = [...savedRoutes, route]
    setSavedRoutes(updatedRoutes)
    localStorage.setItem(`metro-routes-${user.id}`, JSON.stringify(updatedRoutes))
  }

  // Delete a route
  const deleteRoute = (routeId: string) => {
    if (!user) return

    const updatedRoutes = savedRoutes.filter((route) => route.id !== routeId)
    setSavedRoutes(updatedRoutes)
    localStorage.setItem(`metro-routes-${user.id}`, JSON.stringify(updatedRoutes))
  }

  return {
    savedRoutes,
    saveRoute,
    deleteRoute,
  }
}
