import "./Boton.css";

function Boton({ texto, btnClick, manejarClick }) {
  return (
    <button
      className={btnClick ? "boton-click" : "boton-reiniciar"}
      onClick={manejarClick}
    >
      {texto}
    </button>
  );
}

export default Boton;
