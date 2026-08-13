const BASE_URL = "https://pokeapi.co";

// Método GET real que busca na PokeAPI da Nintendo online
export const searchGames = async (query) => {
  if (!query) return [];
  try {
    // Converte para minúsculas porque a PokeAPI exige nomes em minúsculas
    const termo = query.toLowerCase().trim();
    const response = await fetch(`${BASE_URL}/pokemon/${termo}`);

    // Se não encontrar o termo pesquisado, retorna array vazio para o "Nada Encontrado"
    if (!response.ok) {
      return [];
    }

    const data = await response.json();

    // Mapeia os dados exatamente no formato que o seu GamesCatalog.jsx já lê
    return [
      {
        id: data.id,
        name: data.name.toUpperCase(),
        released: "Universo Nintendo",
        background_image:
          data.sprites.other["official-artwork"].front_default ||
          data.sprites.front_default,
        genres: data.types.map((t) => ({ name: t.type.name })),
      },
    ];
  } catch (error) {
    throw new Error("Erro na ligação ao servidor");
  }
};

// Método POST simulado para cumprir a estrutura do guião
export const saveFavoriteGame = async (id) => {
  return { success: true, message: "Favorito guardado com sucesso" };
};
