import React from "react";
import "./Main.css";
import fotofusajiro from "../../images/fusajiro.avif";
import fototransicao from "../../images/transicao.avif";
import fotomariobros from "../../images/mariobros.avif";
import fotozelda from "../../images/zelda.avif";
import fotogameboy from "../../images/gameboy.avif";
import fotoswitch from "../../images/switch.avif";

function Main() {
  const historiaNintendo = [
    {
      id: 1,
      titulo: "Fusajiro Yamauchi (1889)",
      foto: fotofusajiro,
      resumo:
        "O artesão que fundou a Nintendo em Quioto, originalmente como uma empresa familiar de cartas de baralho artesanais chamadas Hanafuda.",
      fonte: "HISTÓRIA DA NINTENDO",
    },
    {
      id: 2,
      titulo: "De Cartas de Baralho a Videojogos",
      foto: fototransicao,
      resumo:
        "Na década de 1970, liderada por Hiroshi Yamauchi, a empresa expandiu os seus horizontes para além dos brinquedos tradicionais, investindo em tecnologia eletrónica e criando a sua primeira consola, a Color TV-Game, em 1977.",
      fonte: "TRANSIÇÃO TECNOLÓGICA",
    },
    {
      id: 3,
      titulo: "Super Mario Bros (1985)",
      foto: fotomariobros,
      resumo:
        "O jogo lendário que revolucionou a indústria mundial de videojogos e transformou o Mario no maior ícone da marca.",
      fonte: "JOGOS CLÁSSICOS",
    },
    {
      id: 4,
      titulo: "The Legend of Zelda (1986)",
      foto: fotozelda,
      resumo:
        "Criado por Shigeru Miyamoto, introduziu o conceito de exploração em mundo aberto e salvamento de progresso em cartuchos.",
      fonte: "JOGOS CLÁSSICOS",
    },
    {
      id: 5,
      titulo: "Game Boy & Consolas Portáteis",
      foto: fotogameboy,
      resumo:
        "Lançado em 1989, este aparelho icónico dominou o mercado global de consolas portáteis, impulsionado pelo viciante fenómeno Tetris.",
      fonte: "APARELHOS E EVOLUÇÃO",
    },
    {
      id: 6,
      titulo: "Nintendo Switch (Era Atual)",
      foto: fotoswitch,
      resumo:
        "A consagração do conceito híbrido. Um aparelho atual que une o poder de uma consola de sala com a portabilidade total.",
      fonte: "APARELHOS E EVOLUÇÃO",
    },
  ];

  return (
    <main className="main-content">
      <h2 className="main-content__title">Marcos da História da Nintendo</h2>

      {/* Grid organizada em filas de 3, adaptando-se perfeitamente conforme o Figma */}
      <div className="main-content__grid">
        {historiaNintendo.map((artigo) => (
          <article key={artigo.id} className="card-post">
            <div className="card-post__image-container">
              <img
                src={artigo.foto}
                alt={artigo.titulo}
                className="card-post__image"
              />
            </div>

            <div className="card-post__body">
              <span className="card-post__category-tag">Artigo Histórico</span>
              <h3 className="card-post__card-title">{artigo.titulo}</h3>
              <p className="card-post__description">{artigo.resumo}</p>
              <p className="card-post__source">{artigo.fonte}</p>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}

export default Main;
