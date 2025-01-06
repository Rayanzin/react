const Cartao = ({imagen, titulo, descricao}) => {
    return ( 
        <div>
            <img src={imagen} alt="" />
            <h3>{titulo}</h3>
            <p>{descricao}</p>
        </div>
     );
}
 
export default Cartao;