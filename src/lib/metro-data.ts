
import type { MetroData } from "@/types/metro-type"

export const metroData: MetroData = {
  estacoes: [
    // Linha Azul
    { id: "az1", nome: "Jabaquara", linha: "Azul", conexoes: ["az2"] },
    { id: "az2", nome: "Conceição", linha: "Azul", conexoes: ["az1", "az3"] },
    { id: "az3", nome: "São Judas", linha: "Azul", conexoes: ["az2", "az4"] },
    { id: "az4", nome: "Saúde", linha: "Azul", conexoes: ["az3", "az5"] },
    { id: "az5", nome: "Praça da Árvore", linha: "Azul", conexoes: ["az4", "az6"] },
    { id: "az6", nome: "Santa Cruz", linha: "Azul", conexoes: ["az5", "az7"] },
    { id: "az7", nome: "Vila Mariana", linha: "Azul", conexoes: ["az6", "az8"] },
    { id: "az8", nome: "Ana Rosa", linha: "Azul", conexoes: ["az7", "az9", "ve8"] },
    { id: "az9", nome: "Paraíso", linha: "Azul", conexoes: ["az8", "az10", "ve7"] },
    { id: "az10", nome: "Vergueiro", linha: "Azul", conexoes: ["az9", "az11"] },
    { id: "az11", nome: "São Joaquim", linha: "Azul", conexoes: ["az10", "az12"] },
    { id: "az12", nome: "Liberdade", linha: "Azul", conexoes: ["az11", "az13"] },
    { id: "az13", nome: "Sé", linha: "Azul", conexoes: ["az12", "az14", "vm10"] },
    { id: "az14", nome: "São Bento", linha: "Azul", conexoes: ["az13", "az15"] },
    { id: "az15", nome: "Luz", linha: "Azul", conexoes: ["az14", "az16", "am11"] },
    { id: "az16", nome: "Tiradentes", linha: "Azul", conexoes: ["az15", "az17"] },
    { id: "az17", nome: "Armênia", linha: "Azul", conexoes: ["az16", "az18"] },
    { id: "az18", nome: "Portuguesa-Tietê", linha: "Azul", conexoes: ["az17", "az19"] },
    { id: "az19", nome: "Carandiru", linha: "Azul", conexoes: ["az18", "az20"] },
    { id: "az20", nome: "Santana", linha: "Azul", conexoes: ["az19", "az21"] },
    { id: "az21", nome: "Jardim São Paulo", linha: "Azul", conexoes: ["az20", "az22"] },
    { id: "az22", nome: "Parada Inglesa", linha: "Azul", conexoes: ["az21", "az23"] },
    { id: "az23", nome: "Tucuruvi", linha: "Azul", conexoes: ["az22"] },

    // Linha Verde
    { id: "ve1", nome: "Vila Madalena", linha: "Verde", conexoes: ["ve2"] },
    { id: "ve2", nome: "Sumaré", linha: "Verde", conexoes: ["ve1", "ve3"] },
    { id: "ve3", nome: "Clinicas", linha: "Verde", conexoes: ["ve2", "ve4"] },
    { id: "ve4", nome: "Consolação", linha: "Verde", conexoes: ["ve3", "ve5", "am7"] },
    { id: "ve5", nome: "Trianon-Masp", linha: "Verde", conexoes: ["ve4", "ve6"] },
    { id: "ve6", nome: "Brigadeiro", linha: "Verde", conexoes: ["ve5", "ve7"] },
    { id: "ve7", nome: "Paraíso", linha: "Verde", conexoes: ["ve6", "ve8", "az9"] },
    { id: "ve8", nome: "Ana Rosa", linha: "Verde", conexoes: ["ve7", "ve9", "az8"] },
    { id: "ve9", nome: "Chácara Klabin", linha: "Verde", conexoes: ["ve8", "ve10"] },
    { id: "ve10", nome: "Santos-Imigrantes", linha: "Verde", conexoes: ["ve9", "ve11"] },
    { id: "ve11", nome: "Alto do Ipiranga", linha: "Verde", conexoes: ["ve10", "ve12"] },
    { id: "ve12", nome: "Sacomã", linha: "Verde", conexoes: ["ve11", "ve13"] },
    { id: "ve13", nome: "Tamanduateí", linha: "Verde", conexoes: ["ve12", "ve14"] },
    { id: "ve14", nome: "Vila Prudente", linha: "Verde", conexoes: ["ve13"] },

    // Linha Vermelha
    { id: "vm1", nome: "Barra Funda", linha: "Vermelha", conexoes: ["vm2"] },
    { id: "vm2", nome: "Marechal Deodoro", linha: "Vermelha", conexoes: ["vm1", "vm3"] },
    { id: "vm3", nome: "Santa Cecília", linha: "Vermelha", conexoes: ["vm2", "vm4"] },
    { id: "vm4", nome: "República", linha: "Vermelha", conexoes: ["vm3", "vm5", "am10"] },
    { id: "vm5", nome: "Anhangabaú", linha: "Vermelha", conexoes: ["vm4", "vm6"] },
    { id: "vm6", nome: "Sé", linha: "Vermelha", conexoes: ["vm5", "vm7", "az13"] },
    { id: "vm7", nome: "Pedro II", linha: "Vermelha", conexoes: ["vm6", "vm8"] },
    { id: "vm8", nome: "Brás", linha: "Vermelha", conexoes: ["vm7", "vm9"] },
    { id: "vm9", nome: "Bresser-Mooca", linha: "Vermelha", conexoes: ["vm8", "vm10"] },
    { id: "vm10", nome: "Belém", linha: "Vermelha", conexoes: ["vm9", "vm11"] },
    { id: "vm11", nome: "Tatuapé", linha: "Vermelha", conexoes: ["vm10", "vm12"] },
    { id: "vm12", nome: "Carrão", linha: "Vermelha", conexoes: ["vm11", "vm13"] },
    { id: "vm13", nome: "Penha", linha: "Vermelha", conexoes: ["vm12", "vm14"] },
    { id: "vm14", nome: "Vila Matilde", linha: "Vermelha", conexoes: ["vm13", "vm15"] },
    { id: "vm15", nome: "Guilhermina-Esperança", linha: "Vermelha", conexoes: ["vm14", "vm16"] },
    { id: "vm16", nome: "Patriarca", linha: "Vermelha", conexoes: ["vm15", "vm17"] },
    { id: "vm17", nome: "Artur Alvim", linha: "Vermelha", conexoes: ["vm16", "vm18"] },
    { id: "vm18", nome: "Corinthians-Itaquera", linha: "Vermelha", conexoes: ["vm17"] },

    // Linha Amarela
    { id: "am1", nome: "Vila Sônia", linha: "Amarela", conexoes: ["am2"] },
    { id: "am2", nome: "São Paulo-Morumbi", linha: "Amarela", conexoes: ["am1", "am3"] },
    { id: "am3", nome: "Butantã", linha: "Amarela", conexoes: ["am2", "am4"] },
    { id: "am4", nome: "Pinheiros", linha: "Amarela", conexoes: ["am3", "am5"] },
    { id: "am5", nome: "Faria Lima", linha: "Amarela", conexoes: ["am4", "am6"] },
    { id: "am6", nome: "Fradique Coutinho", linha: "Amarela", conexoes: ["am5", "am7"] },
    { id: "am7", nome: "Paulista", linha: "Amarela", conexoes: ["am6", "am8", "ve4"] },
    { id: "am8", nome: "Higienópolis-Mackenzie", linha: "Amarela", conexoes: ["am7", "am9"] },
    { id: "am9", nome: "Marechal Deodoro", linha: "Amarela", conexoes: ["am8", "am10"] },
    { id: "am10", nome: "República", linha: "Amarela", conexoes: ["am9", "am11", "vm4"] },
    { id: "am11", nome: "Luz", linha: "Amarela", conexoes: ["am10", "az15"] }
  ],

  linhas: [
    { id: "l1", nome: "Azul", cor: "#0153a5", estacoes: Array.from({ length: 23 }, (_, i) => `az${i + 1}`) },
    { id: "l2", nome: "Verde", cor: "#008061", estacoes: Array.from({ length: 14 }, (_, i) => `ve${i + 1}`) },
    { id: "l3", nome: "Vermelha", cor: "#ee1c25", estacoes: Array.from({ length: 18 }, (_, i) => `vm${i + 1}`) },
    { id: "l4", nome: "Amarela", cor: "#ffcc00", estacoes: Array.from({ length: 11 }, (_, i) => `am${i + 1}`) }
  ]
}
