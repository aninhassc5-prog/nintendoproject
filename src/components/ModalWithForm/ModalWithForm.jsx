import React from "react";
import "./ModalWithForm.css";

function ModalWithForm() {
  return (
    <div className="modal" style={{ display: "none" }}>
      {" "}
      {/* Começa escondido por padrão */}
      <div className="modal__container">
        <button type="button" className="modal__close-button">
          X
        </button>
        <h2 className="modal__title">Título do Modal</h2>
        {/* Futuro formulário ou conteúdo detalhado entrará aqui */}
      </div>
    </div>
  );
}

export default ModalWithForm;
