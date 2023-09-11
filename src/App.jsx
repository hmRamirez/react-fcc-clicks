import "./App.css";
import fccLogo from "./img/freecodecamp-logo.png";
import Boton from "./componentes/Boton";
import Contador from "./componentes/Contador";
import { useEffect, useState } from "react";

function App() {
  // Hook
  // useState(0) representa el contador inicial
  const [numClics, setNumClics] = useState(0);

  useEffect(() => {
    console.log("Se ha activado el useEffect");
  }, [numClics]);

  const aumentarClick = () => {
    setNumClics(numClics + 1);
  };

  const reiniciarContador = () => {
    setNumClics(0);
  };

  return (
    <div className="App">
      <div className="logo">
        <img className="fcc-logo" src={fccLogo} alt="Logo de Free code camp" />
      </div>
      <div className="contenedor-principal">
        <Contador numClics={numClics} />
        <Boton texto="Click" btnClick={true} manejarClick={aumentarClick} />
        <Boton
          texto="Reiniciar"
          btnClick={false}
          manejarClick={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
