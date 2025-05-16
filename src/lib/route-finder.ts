import { metroData } from "./metro-data"
import type { Estacao } from "@/types/metro-type"

// Simplified route finding algorithm using breadth-first search
export function findRoute(startId: string, endId: string): Estacao[] {
  // If start and end are the same, return just that station
  if (startId === endId) {
    const station = metroData.estacoes.find((s) => s.id === startId)
    return station ? [station] : []
  }

  // Create a map of stations by ID for quick lookup
  const stationsMap = new Map<string, Estacao>()
  metroData.estacoes.forEach((station) => {
    stationsMap.set(station.id, station)
  })

  // Queue for BFS
  const queue: { id: string; path: string[] }[] = [{ id: startId, path: [startId] }]
  // Keep track of visited stations
  const visited = new Set<string>([startId])

  while (queue.length > 0) {
    const { id, path } = queue.shift()!

    // Get the current station
    const station = stationsMap.get(id)
    if (!station) continue

    // Check each connection
    for (const connectionId of station.conexoes) {
      // If we've already visited this station, skip it
      if (visited.has(connectionId)) continue

      // Mark as visited
      visited.add(connectionId)

      // Create a new path including this connection
      const newPath = [...path, connectionId]

      // If this is our destination, we're done
      if (connectionId === endId) {
        // Convert path of IDs to array of station objects
        return newPath.map((id) => stationsMap.get(id)!).filter(Boolean)
      }

      // Otherwise, add to queue to explore later
      queue.push({ id: connectionId, path: newPath })
    }
  }

  // If we get here, no path was found
  return []
}
