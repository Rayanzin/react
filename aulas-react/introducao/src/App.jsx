const BoasVindas = (props) => {
  return (
    <h1>Seja Bem-Vind{props.genero == 'f' ? 'a' : 'o'} {props.nome}</h1>
  )
}

const App = () => {
  const alunos = [
    {
      nome: "Levi",
      genero: "m"
    },
    {
      nome: "Alexandre",
      genero: "m"
    },
    {
      nome: "Nayara",
      genero: "f"
    },
    {
      nome: "Liana",
      genero: "f"
    }
  ]
  return (
    <>
      {
        alunos.map(aluno => (
          <BoasVindas nome={aluno.nome} genero={aluno.genero} />
        ))
      }
    </>
  )
}

export default App;