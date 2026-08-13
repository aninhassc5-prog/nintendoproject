import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import GamesCatalog from "../GamesCatalog/GamesCatalog";
import { searchGames } from "../../utils/ThirdPartyApi";

function App() {
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState("");
  const [searchInitiated, setSearchInitiated] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);

  // Recuperar os últimos resultados guardados no LocalStorage
  useEffect(() => {
    const savedGames = localStorage.getItem("nintendo_search_results");
    if (savedGames) {
      setGames(JSON.parse(savedGames));
      setSearchInitiated(true);
    }
  }, []);

  // Lógica assíncrona da barra de pesquisa
  const handleSearchSubmit = async (query) => {
    if (!query.trim()) return;

    setIsLoading(true);
    setApiError("");
    setSearchInitiated(true);
    setVisibleCount(3); // Reinicia para 3 cartões numa nova busca

    try {
      const results = await searchGames(query);
      setGames(results);
      localStorage.setItem("nintendo_search_results", JSON.stringify(results));
    } catch (err) {
      setApiError(
        "Desculpe, algo deu errado durante a solicitação. Pode haver um problema de conexão ou o servidor pode estar inativo. Por favor, tente novamente mais tarde.",
      );
      setGames([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  return (
    <div className="app">
      <Navigation />
      <Header />

      {/* Barra de pesquisa global */}
      <SearchForm onSearch={handleSearchSubmit} />

      <Routes>
        {/* Página Inicial - Blog Histórico */}
        <Route path="/" element={<Main />} />

        {/* Página do Catálogo - Resultados da API */}
        <Route
          path="/jogos"
          element={
            <GamesCatalog
              games={games.slice(0, visibleCount)}
              isLoading={isLoading}
              apiError={apiError}
              searchInitiated={searchInitiated}
              hasMore={games.length > visibleCount}
              onShowMore={handleShowMore}
            />
          }
        />
      </Routes>

      <Footer />
      <ModalWithForm />
    </div>
  );
}

export default App;
