import Link from "next/link"
import { Train } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-between flex-wrap"> {/* Usando Flexbox */}
          <div className="flex flex-col items-start mb-8 md:mb-0"> {/* Adicionando margem bottom em mobile */}
            <div className="flex items-center gap-2 font-bold text-xl mb-4">
              <Train className="h-6 w-6 text-primary" />
              <span>Smart Guide</span>
            </div>
            <p className="text-sm text-muted-foreground">Sistema de planejamento de rotas para o Metrô de São Paulo.</p>
          </div>

          <div className="flex flex-col items-start mb-8 md:mb-0"> {/* Adicionando margem bottom em mobile */}
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/route-planner" className="text-sm text-muted-foreground hover:text-foreground">
                  Planejador de Rotas
                </Link>
              </li>
              <li>
                <Link href="/my-routes" className="text-sm text-muted-foreground hover:text-foreground">
                  Minhas Rotas
                </Link>
              </li>
              <li>
                <Link href="/estacao-map" className="text-sm text-muted-foreground hover:text-foreground">
                  Mapa de Estações
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-start mb-8 md:mb-0"> {/* Adicionando margem bottom em mobile */}
            <h3 className="text-lg font-semibold mb-4">Informações</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">
                Este é um projeto demonstrativo para planejamento de rotas do Metrô de São Paulo.
              </li>
              <li className="text-sm text-muted-foreground">
                Os dados utilizados são apenas para fins de demonstração.
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-start">
            <h3 className="text-lg font-semibold mb-4">Parcerias</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://www.fiap.com.br/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground">
                  FIAP
                </a>
              </li>
              <li>
                <a href="https://www.ccr.com.br/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground">
                  CCR
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Metrô SP. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}