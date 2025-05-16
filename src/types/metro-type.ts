export interface Estacao {
  id: string
  nome: string
  linha: string
  conexoes: string[]
  endereco?: string
  acessibilidade?: {
    elevador: boolean
    rampa: boolean
    pisoTatil: boolean
    banheirosAcessiveis: boolean
    informacoesBraile: boolean
  }
}

export interface Linha {
  id: string
  nome: string
  cor: string
  estacoes: string[]
}

export interface MetroData {
  estacoes: Estacao[]
  linhas: Linha[]
}
