import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/formulario";

function App() {
  const [colaboradores, setColaboradores] = useState([])
  const aoNovoColaboradoreAdicionado = (colaborador) =>{
    console.log(colaborador)
    setColaboradores([...colaboradores], colaborador )
  }
  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradoreAdicionado(colaborador)}/>
    </div>
  );
}

export default App;
