import "./CampoTexto.css";

const CampoTexto = (props) => {
  const placeholderModificada = `${props.placeholder}...`;
  return (
    <div className="CampoTexto">
      <label>{props.label}</label>
      <input placeholder={placeholderModificada} />
    </div>
  );
};

export default CampoTexto;
