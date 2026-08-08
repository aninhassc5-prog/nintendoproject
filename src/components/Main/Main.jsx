import React, { useState } from "react";
import "./Main.css";

function Main() {
  // Estado para controlar qual card está aberto (guarda o ID do card)
  const [cardAberto, setCardAberto] = useState(null);

  const jogos = [
    {
      id: 1,
      titulo: "Super Mario Bros (1985)",
      foto: "https://unsplash.com",
      resumo:
        "O jogo que revolucionou a indústria dos videojogos e transformou o Mario no ícone mundial da Nintendo.",
    },
    {
      id: 2,
      titulo: "The Legend of Zelda (1986)",
      foto: "https://unsplash.com",
      resumo:
        "Criado por Shigeru Miyamoto, introduziu a exploração de mundo aberto e o reino de Hyrule aos jogadores.",
    },
    {
      id: 3,
      titulo: "Game Boy (1989)",
      foto: "https://unsplash.com",
      resumo:
        "A consola portátil que dominou o mercado mundial, impulsionada pelo sucesso estrondoso do jogo Tetris.",
    },
  ];

  const alternarCard = (id) => {
    // Se clicar no mesmo, fecha. Se clicar num diferente, abre o novo.
    setCardAberto(cardAberto === id ? null : id);
  };

  return (
    <main className="main-content">
      <h2 className="main-content__title">Marcos da História da Nintendo</h2>
      <div className="main-content__grid">
        {jogos.map((jogo) => (
          <article
            key={jogo.id}
            className="card"
            onClick={() => alternarCard(jogo.id)}
          >
            <img src={jogo.foto} alt={jogo.titulo} className="card__image" />
            <div className="card__body">
              <h3 className="card__title">{jogo.titulo}</h3>
              <p className="card__hint"> Clique no card para ver o resumo</p>

              {/* Renderização condicional do texto baseada no clique */}
              {cardAberto === jogo.id && (
                <p className="card__text">{jogo.resumo}</p>
              )}
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}

export default Main;
