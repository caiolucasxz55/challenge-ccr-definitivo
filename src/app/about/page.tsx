import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Sobre o Metro App</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Nossa Missão</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Facilitar o deslocamento urbano através de uma plataforma intuitiva e eficiente que ajuda os usuários a
              navegarem pelo sistema de metrô com facilidade.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Nossos Valores</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>Acessibilidade para todos os usuários</li>
              <li>Informações precisas e atualizadas</li>
              <li>Experiência do usuário simplificada</li>
              <li>Inovação constante</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>História</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            O Metro App foi desenvolvido para atender à crescente necessidade de uma solução digital que simplificasse a
            navegação no sistema de transporte público.
          </p>
          <p>
            Desde o seu lançamento, temos trabalhado continuamente para melhorar a experiência do usuário e adicionar
            novos recursos que tornam o planejamento de viagens mais eficiente e acessível.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Contato</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-2">Para sugestões, dúvidas ou suporte:</p>
          <p className="mb-1">
            <strong>Email:</strong> contato@metroapp.com
          </p>
          <p>
            <strong>Telefone:</strong> (11) 1234-5678
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
