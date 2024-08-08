import "./CampoTexto.css";
import { useState } from "react";

const CampoTexto = (props) => {
  const placeholderModificada = `${props.placeholder}...`;

  const aoDigitado = (evento) => {
    props.aoAlterado(evento.target.value);
  };
  return (
    <div className="CampoTexto">
      <label>{props.label}</label>
      <input
        value={props.valor}
        onChange={aoDigitado}
        required={props.obrigatorio}
        placeholder={placeholderModificada}
      />
    </div>
  );
};

export default CampoTexto;
