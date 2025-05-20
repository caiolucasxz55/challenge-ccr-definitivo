import { Check, X } from "lucide-react"
import type { Estacao } from "@/types/metro-type"

interface EstacaoListaAcessibilidadeProps {
  estacao: Estacao
}

export function EstacaoListaAcessibilidade({ estacao }: EstacaoListaAcessibilidadeProps) {
  const acessibilidade = {
    elevador: true,
    rampa: true,
    pisoTatil: true,
    banheirosAcessiveis: true,
    informacoesBraile: false,
  }

  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">{estacao.nome}</h3>
      <ul className="space-y-2">
        <li className="flex items-center justify-between">
          <span>Elevador</span>
          {acessibilidade.elevador ? (
            <Check className="h-5 w-5 text-green-500" />
          ) : (
            <X className="h-5 w-5 text-red-500" />
          )}
        </li>
        <li className="flex items-center justify-between">
          <span>Rampa de acesso</span>
          {acessibilidade.rampa ? <Check className="h-5 w-5 text-green-500" /> : <X className="h-5 w-5 text-red-500" />}
        </li>
        <li className="flex items-center justify-between">
          <span>Piso tátil</span>
          {acessibilidade.pisoTatil ? (
            <Check className="h-5 w-5 text-green-500" />
          ) : (
            <X className="h-5 w-5 text-red-500" />
          )}
        </li>
        <li className="flex items-center justify-between">
          <span>Banheiros acessíveis</span>
          {acessibilidade.banheirosAcessiveis ? (
            <Check className="h-5 w-5 text-green-500" />
          ) : (
            <X className="h-5 w-5 text-red-500" />
          )}
        </li>
        <li className="flex items-center justify-between">
          <span>Informações em Braile</span>
          {acessibilidade.informacoesBraile ? (
            <Check className="h-5 w-5 text-green-500" />
          ) : (
            <X className="h-5 w-5 text-red-500" />
          )}
        </li>
      </ul>
    </div>
  )
}

