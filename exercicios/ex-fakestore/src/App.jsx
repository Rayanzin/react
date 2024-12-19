import { useEffect, useState } from "react";

const App = () => {

  const [dados, setDados] = useState([]);

  useEffect(() => {
    const url = 'https://fakestoreapi.com/products/';
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDados(data))
  });


  return (
    dados.map((dado) => (
      <>
        <div id="card">
          <div id="img">
            <img src={dado.image} alt="produto" />
          </div>
          <div id="bettwen">
            <h4>{dado.title}</h4>
            {/* <p>{dado.description}</p> */}
            <p>{dado.category}</p>
            <p>R$:{dado.price}</p>
          </div>
        </div>
      </>
    ))
  )

}

export default App;