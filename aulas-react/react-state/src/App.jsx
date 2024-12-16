import { useState } from "react";
const Filho = (props) => {
  const [contadorFilho, setcontadorFilho] = useState(0);
  return (
    <>
      <h1>Contador do pai: {props.contador}</h1>
      <h1>Contador do Filho: {contadorFilho}</h1>
      <button onClick={() => setcontadorFilho(contadorFilho + 1)}>add +1 no Contador do Filho</button>
      <button onClick={() => props.setcontador(props.contador + 1)}>Mudar valor do pai</button>
      <button onClick={() => setcontadorFilho(0)}>Zerar filho</button>
      <button onClick={() => {
        props.setcontador(0);
        setcontadorFilho(0)
      }}>Zerar ambos</button>
    </>
  );
}


const App = () => {
  const [contador, setcontador] = useState(0);
  const [darkMode, setdarkMode] = useState(false);
  return (
    <div style={darkMode ? { backgroundColor: "black", color: "white" } : { backgroundColor: "initial", color: "initial" }}>
      <h1>Aula sobre states</h1>
      <button onClick={() => setcontador(contador + 1)}>add +1</button>
      <h2>Contador {contador}</h2>
      <button onClick={() => setdarkMode(!darkMode)}>mudar tema</button>
      <button onClick={() => setcontador(0)}>Zerar pai</button>
      <Filho contador={contador} setcontador={setcontador} />
    </div>
  );
}

export default App;