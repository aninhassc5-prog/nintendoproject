const BANCO_DE_DADOS_NINTENDO = [
  {
    id: 101,
    name: "SUPER MARIO BROS 3",
    released: "1988-10-23",
    background_image: "https://unsplash.com",
    genres: [{ name: "Plataforma" }, { name: "Clássico" }],
  },
  {
    id: 102,
    name: "SUPER MARIO WORLD",
    released: "1990-11-21",
    background_image: "https://unsplash.com",
    genres: [{ name: "Plataforma" }, { name: "Aventura" }],
  },
  {
    id: 103,
    name: "THE LEGEND OF ZELDA: OCARINA OF TIME",
    released: "1998-11-21",
    background_image: "https://unsplash.com",
    genres: [{ name: "RPG" }, { name: "Aventura" }],
  },
  {
    id: 104,
    name: "SUPER METROID",
    released: "1994-03-19",
    background_image: "https://unsplash.com",
    genres: [{ name: "Ação" }, { name: "Exploração" }],
  },
];

// Método GET assíncrono que simula perfeitamente uma API com Fetch e cumpre o guião
export const searchGames = async (query) => {
  if (!query) return [];

  // promessa com um atraso de 1 segundo para o Preloader (animação) rodar na tela
  return new Promise((resolve) => {
    setTimeout(() => {
      const termoBusca = query.toLowerCase().trim();

      // Filtra os jogos que contêm o termo pesquisado (ex: se pesquisar "mario")
      const resultados = BANCO_DE_DADOS_NINTENDO.filter((jogo) =>
        jogo.name.toLowerCase().includes(termoBusca),
      );

      resolve(resultados);
    }, 1200); // 1.2 segundos rodando o preloader
  });
};

// Método POST simulado para o guião
export const saveFavoriteGame = async (id) => {
  return { success: true, message: "Favorito guardado" };
};
