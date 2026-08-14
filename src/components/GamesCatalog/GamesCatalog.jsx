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
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [savedCardIds, setSavedCardIds] = useState([]);

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
    return `${data.getDate()} de ${meses[data.getMonth()]} de ${data.getFullYear()}`;
  };

  const handleSaveClick = (id) => {
    if (!isLoggedIn) return;

    if (savedCardIds.includes(id)) {
      setSavedCardIds(savedCardIds.filter((cardId) => cardId !== id));
    } else {
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
                  <div className="card-post__image-container">
                    <img
                      src={game.background_image}
                      alt={game.name}
                      className="card-post__image"
                    />

                    {/* Botão Salvar corrigido para usar SVG Inline sem depender da pasta images */}
                    <button
                      type="button"
                      className="card-post__save-button"
                      onClick={() => handleSaveClick(game.id)}
                    >
                      <svg
                        width="14"
                        height="19"
                        viewBox="0 0 14 19"
                        fill="none"
                        xmlns="http://w3.org"
                        className="card-post__bookmark-icon"
                      >
                        <path
                          d="M1 1V16.5L7 12L13 16.5V1H1Z"
                          stroke={estaSalvo ? "#2F71E5" : "#B0B0B0"}
                          strokeWidth="2"
                          fill={estaSalvo ? "#2F71E5" : "none"}
                        />
                      </svg>

                      {estaSalvo && (
                        <span className="card-post__saved-text">
                          Artigo salvo
                        </span>
                      )}

                      {!isLoggedIn && (
                        <span className="card-post__tooltip">
                          Faça o login para salvar os artigos.
                        </span>
                      )}
                    </button>
                  </div>

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
