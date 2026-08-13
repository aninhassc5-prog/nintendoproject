import React from "react";
import "./NotFound.css";

function NotFound() {
  return (
    <section className="not-found">
      <div className="not-found__content">
        {/* Ícone ou imagem triste simulando a Nintendo */}
        <span className="not-found__icon" role="img" aria-label="Erro">
          😢
        </span>
        <h2 className="not-found__title">Nada Encontrado</h2>
        <p className="not-found__subtitle">
          Lamento, mas não conseguimos encontrar o jogo ou o conteúdo que
          procura.
        </p>
      </div>
    </section>
  );
}

export default NotFound;
