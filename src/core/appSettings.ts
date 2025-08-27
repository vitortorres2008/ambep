/**
 * Configurações globais do APP,
 * possui as constantes e demais configurações globais
 */
export const AppSettings = {
    nhaAuth: {
        Free: 0,
        LoginRequired: 1,
        NoAutorized: 2,
        AdminRequired: 3,
        Autorized: 4
    },
    img: {
        //imgCarteirinha: "https://ambep-api-2.azurewebsites.net/api/v1/CarteirinhaImagem/",
        imgCarteirinha: "https://api.ambep.org.br/api/v1/CarteirinhaImagem/",
        imgPublica: "https://servicos.ambep.org.br/publico/",
        linkShare: "https://servicos.ambep.org.br/",
    },
    serverApi: {
        //LOCAL
        //url: "https://localhost:5001",
        url: "https://api.ambep.org.br",
        //url: 'https://ambep-api-2.azurewebsites.net',
        imgCarteirinha: "https://api.ambep.org.br/api/v1/CarteirinhaImagem/",
        //imgCarteirinha: "https://ambep-api-2.azurewebsites.net/api/v1/CarteirinhaImagem/",
        //imgCarteirinha: "https://localhost:5001/api/v1/CarteirinhaImagem/",
        versionBase: "/api/v1",
    }
}
