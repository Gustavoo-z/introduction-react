import styled from "styled-components";
import { Link } from "react-router-dom";

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'ESTANTE'];

const OpcoesContainer = styled.ul`
  display: flex;
`

const Opcao = styled.li`
  font-size: 16px;
  min-width: 120px;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
`

function OpcoesHeader() {
    return (
        <OpcoesContainer>
          {textoOpcoes.map((texto => 
            <Link to={`/${texto.toLowerCase()}`}><Opcao><p>{texto}</p></Opcao></Link>
          ))
          }
        </OpcoesContainer>
    )
}

export default OpcoesHeader;