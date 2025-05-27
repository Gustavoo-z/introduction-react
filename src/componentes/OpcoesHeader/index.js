import styled from "styled-components";

const textoOpcoes = ['CATEGORIAS', 'MINHA ESTANTE', 'FAVORITOS'];

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
            <Opcao><p>{texto}</p></Opcao>
          ))
          }
        </OpcoesContainer>
    )
}

export default OpcoesHeader;