import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about">
      <h2 className="about__title">Sobre a Autora</h2>
      <div className="about__content">
        <h3 className="about__name">Ana Sofia Sanches</h3>
        <p className="about__text">
          Desenvolvedora web front-end em formação e apaixonada pelo universo
          dos videojogos. Este projeto foi construído como o trabalho final do
          curso, aplicando conceitos avançados de React, componentização
          modular, consumo assíncrono de dados e design responsivo com a
          metodologia BEM.
        </p>
      </div>
    </section>
  );
}

export default About;
