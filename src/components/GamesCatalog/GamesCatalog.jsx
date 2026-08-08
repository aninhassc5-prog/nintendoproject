import React, { useState } from "react";
import "./GamesCatalog.css";
import Preloader from "../Preloader/Preloader";
import NotFound from "../NotFound/NotFound";

function GamesCatalog({
  games,
  isLoading,
  apiError,
  searchInitiated,
  hasMore,
  onShowMore,
}) {
  // Simulação de estado de Login (mude para true se quiser testar como utilizador logado)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Estado para guardar quais os IDs dos cartões que foram salvos (ficam azuis)
  const [savedCardIds, setSavedCardIds] = useState([]);

  // Função para formatar a data americana (AAAA-MM-DD) para o formato do Figma (D de mês de AAAA)
  const formatarData = (dataString) => {
    if (!dataString) return "Data desconhecida";
    const data = new Date(dataString);
    const meses = [
      "janeiro",
      "fevereiro",
      "março",
      "abril",
      "maio",
      "junho",
      "julho",
      "agosto",
      "setembro",
      "outubro",
      "novembro",
      "dezembro",
    ];
    return `${data.getDate()} de ${meses[data.getMonth()]}, ${data.getFullYear()}`;
  };

  const handleSaveClick = (id) => {
    if (!isLoggedIn) return; // Se não estiver logado, não faz nada ao clicar

    if (savedCardIds.includes(id)) {
      // Se já estava salvo, remove da lista (simula o DELETE)
      setSavedCardIds(savedCardIds.filter((cardId) => cardId !== id));
    } else {
      // Se não estava salvo, adiciona à lista (simula o POST /articles)
      setSavedCardIds([...savedCardIds, id]);
    }
  };

  return (
    <section className="games-catalog">
      <h2 className="games-catalog__title">Resultados de Pesquisa</h2>

      {isLoading && <Preloader />}
      {!isLoading && apiError && (
        <p className="games-catalog__error">{apiError}</p>
      )}
      {!isLoading && !apiError && searchInitiated && games.length === 0 && (
        <NotFound />
      )}

      {!isLoading && !apiError && games.length > 0 && (
        <>
          <div className="games-catalog__grid">
            {games.map((game) => {
              const estaSalvo = savedCardIds.includes(game.id);

              return (
                <article key={game.id} className="card-post">
                  {/* Área da Imagem com o Botão de Salvar posicionado por cima */}
                  <div className="card-post__image-container">
                    <img
                      src={game.background_image}
                      alt={game.name}
                      className="card-post__image"
                    />

                    {/* Botão Salvar (Ícone do Marcador) */}
                    <button
                      type="button"
                      className={`card-post__save-button ${estaSalvo ? "card-post__save-button_active" : ""}`}
                      onClick={() => handleSaveClick(game.id)}
                    >
                      {/* Desenho do marcador em SVG */}
                      <svg
                        width="14"
                        height="19"
                        viewBox="0 0 14 19"
                        fill="none"
                        xmlns="http://w3.org"
                      >
                        <path
                          d="M1 1V16.5L7 12L13 16.5V1H1Z"
                          stroke="#B0B0B0"
                          strokeWidth="2"
                          fill={estaSalvo ? "#2F71E5" : "none"}
                        />
                      </svg>

                      {/* Mensagem flutuante (Tooltip) se o utilizador não estiver logado */}
                      {!isLoggedIn && (
                        <span className="card-post__tooltip">
                          Faça o login para salvar os artigos.
                        </span>
                      )}
                    </button>
                  </div>

                  {/* Corpo de Texto Fixo em Baixo - Exatamente como no Figma */}
                  <div className="card-post__body">
                    <p className="card-post__date">
                      {formatarData(game.released)}
                    </p>
                    <h3 className="card-post__card-title">{game.name}</h3>
                    <p className="card-post__description">
                      {game.genres && game.genres.length > 0
                        ? `Géneros do jogo: ${game.genres.map((g) => g.name).join(", ")}.`
                        : "Breve resumo sobre este título do universo Nintendo."}
                    </p>
                    <p className="card-post__source">RAWG NINTENDO DATABASE</p>
                  </div>
                </article>
              );
            })}
          </div>

          {hasMore && (
            <button className="games-catalog__more-button" onClick={onShowMore}>
              Mostrar mais
            </button>
          )}
        </>
      )}
    </section>
  );
}

export default GamesCatalog;
