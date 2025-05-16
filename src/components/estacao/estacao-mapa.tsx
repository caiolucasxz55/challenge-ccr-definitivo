"use client"

import { useEffect, useRef } from "react"
import type { Estacao } from "@/types/metro-type"

interface EstacaoMapaProps {
  estacao: Estacao
}

export function EstacaoMapa({ estacao }: EstacaoMapaProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Draw station map (simplified example)
    drawStationMap(ctx, canvas.width, canvas.height, estacao)

    // Handle window resize
    const handleResize = () => {
      if (!canvasRef.current) return

      const canvas = canvasRef.current
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight

      if (ctx) {
        drawStationMap(ctx, canvas.width, canvas.height, estacao)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [estacao])

  return (
    <div className="w-full h-[400px] bg-muted rounded-md overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  )
}

function drawStationMap(ctx: CanvasRenderingContext2D, width: number, height: number, estacao: Estacao) {
  // Set background
  ctx.fillStyle = "#f8fafc"
  ctx.fillRect(0, 0, width, height)

  // Draw station platform
  ctx.fillStyle = "#e2e8f0"
  ctx.fillRect(width * 0.1, height * 0.4, width * 0.8, height * 0.2)

  // Draw train tracks
  ctx.strokeStyle = "#64748b"
  ctx.lineWidth = 4
  ctx.beginPath()
  ctx.moveTo(0, height * 0.5)
  ctx.lineTo(width, height * 0.5)
  ctx.stroke()

  // Draw station name
  ctx.fillStyle = "#0f172a"
  ctx.font = "bold 16px sans-serif"
  ctx.textAlign = "center"
  ctx.fillText(estacao.nome, width / 2, height * 0.3)

  // Draw line indicator
  const lineColor = getLineColor(estacao.linha)
  ctx.fillStyle = lineColor
  ctx.beginPath()
  ctx.arc(width / 2, height * 0.7, 20, 0, Math.PI * 2)
  ctx.fill()

  // Draw line name
  ctx.fillStyle = "#ffffff"
  ctx.font = "12px sans-serif"
  ctx.fillText(estacao.linha.charAt(0), width / 2, height * 0.7 + 4)
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
