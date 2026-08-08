import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import Main from "../Main/Main";
import About from "../About/About";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import GamesCatalog from "../GamesCatalog/GamesCatalog";
import NotFound from "../NotFound/NotFound";
import { searchGames } from "../../utils/ThirdPartyApi";

function App() {
  // Estados principais
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState("");
  const [searchInitiated, setSearchInitiated] = useState(false);

  // Estado para controlar a paginação (exibir de 3 em 3)
  const [visibleCount, setVisibleCount] = useState(3);

  // Efeito para ler os dados do LocalStorage ao montar o componente
  useEffect(() => {
    const savedGames = localStorage.getItem("nintendo_search_results");
    if (savedGames) {
      setGames(JSON.parse(savedGames));
      setSearchInitiated(true);
    }
  }, []);

  // Função disparada ao submeter a pesquisa
  const handleSearchSubmit = async (query) => {
    if (!query.trim()) return;

    setIsLoading(true);
    setApiError("");
    setSearchInitiated(true);
    setVisibleCount(3); // Reinicia a paginação para 3 itens ao fazer nova busca

    try {
      const results = await searchGames(query);
      setGames(results);
      // Salva os dados no armazenamento local
      localStorage.setItem("nintendo_search_results", JSON.stringify(results));
    } catch (err) {
      // Mensagem de erro obrigatória exigida estritamente pelo guião do projeto
      setApiError(
        "Desculpe, algo deu errado durante a solicitação. Pode haver um problema de conexão ou o servidor pode estar inativo. Por favor, tente novamente mais tarde.",
      );
      setGames([]);
    } finally {
      setIsLoading(false);
    }
  };

  // Função do botão "Mostrar mais"
  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  return (
    <div className="app">
      <Navigation />
      <Header />

      {/* Passa a função de busca para o formulário */}
      <SearchForm onSearch={handleSearchSubmit} />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Main />
              <About />
            </>
          }
        />

        <Route
          path="/jogos"
          element={
            <GamesCatalog
              games={games.slice(0, visibleCount)} // Envia apenas a quantidade visível
              isLoading={isLoading}
              apiError={apiError}
              searchInitiated={searchInitiated}
              hasMore={games.length > visibleCount} // Verifica se ainda há mais itens para exibir
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
