import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-100 mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Metro App</h3>
            <p className="text-sm text-muted-foreground">Facilitando sua jornada diária no transporte público.</p>
          </div>

          <div>
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
                <Link href="/estacao-map" className="text-sm text-muted-foreground hover:text-foreground">
                  Mapa de Estações
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">
                  Sobre
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">Email: contato@metroapp.com</li>
              <li className="text-sm text-muted-foreground">Telefone: (11) 1234-5678</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Metro App. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
