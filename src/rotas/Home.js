import Search from '../componentes/Search';
import UltimosLancamentos from '../componentes/UltimosLancamentos';
import styled from 'styled-components';

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);
`;

function Home() {
  return (
    <AppContainer>
      <Search />
      <UltimosLancamentos />
    </AppContainer>
  );
}

export default Home;
