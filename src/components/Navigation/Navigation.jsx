import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <nav className="navigation">
      <ul
        className="navigation__list"
        style={{ listStyle: "none", display: "flex", gap: "20px", padding: 0 }}
      >
        <li>
          {/* Link para a rota principal / */}
          <Link to="/" className="navigation__link">
            Início (Blog)
          </Link>
        </li>
        <li>
          {/* Link para a segunda rota personalizada /jogos */}
          <Link to="/jogos" className="navigation__link">
            Catálogo Nintendo (API)
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
