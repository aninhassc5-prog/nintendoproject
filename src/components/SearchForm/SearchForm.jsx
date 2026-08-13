import React, { useState } from "react";
import "./SearchForm.css";

function SearchForm({ onSearch }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validação simples: se estiver vazio, avisa o utilizador e não faz a busca
    if (!inputValue.trim()) {
      alert("Por favor, insira uma palavra-chave para pesquisar!");
      return;
    }

    onSearch(inputValue);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="search-form__input"
        placeholder="Pesquise por jogos da Nintendo (ex: Mario)..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit" className="search-form__button">
        Pesquisar
      </button>
    </form>
  );
}

export default SearchForm;
