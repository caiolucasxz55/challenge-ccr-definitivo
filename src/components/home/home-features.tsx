import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Route, Save } from "lucide-react"

export function HomeFeatures() {
  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold text-center mb-12">Recursos do Sistema</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card>
          <CardHeader>
            <div className="mb-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Route className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Planejamento de Rotas</CardTitle>
            <CardDescription>Encontre o melhor caminho entre estações do metrô de São Paulo</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Nosso sistema calcula a rota mais eficiente entre qualquer par de estações, considerando conexões e
              transferências entre linhas.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="mb-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Save className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Rotas Salvas</CardTitle>
            <CardDescription>Salve suas rotas frequentes para acesso rápido</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Guarde suas rotas mais utilizadas e acesse-as com um clique, sem precisar inserir novamente os pontos de
              origem e destino.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="mb-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Informações das Estações</CardTitle>
            <CardDescription>Detalhes completos sobre cada estação do sistema</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Consulte informações detalhadas sobre cada estação, incluindo acessibilidade, conexões e localização.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
