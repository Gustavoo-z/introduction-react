import perfil from '../../img/perfil.svg';
import sacola from '../../img/sacola.svg';
import styled from 'styled-components';

const icones = [perfil, sacola];

const Icones = styled.ul`
  display: flex;
  align-items: center;
  gap: 40px;
`

const Icone = styled.li`
  width: 25px;
`; 

function IconesHeader() {
    return (
        <Icones>
          {icones.map((icone => 
            <Icone><img src={icone} alt='icone'></img></Icone>
          ))
          }
        </Icones>
    )
}

export default IconesHeader;