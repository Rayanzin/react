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