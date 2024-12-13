import { useState } from "react";


const App = () => {
  const [mensagem, novaMensagem] = useState("Adicione dois numeros e calcule.")
  return (
    <>
      <h1>{mensagem}</h1>
      <input id="n1" type="number" />
      <input id="n2" type="number" />
      <button onClick={() => {
        novaMensagem(Number(n1.value) + Number(n2.value))
      }}>Calcular</button>
    </>
  )
}

export default App;