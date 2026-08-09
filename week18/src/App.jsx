
import styled from 'styled-components';
import Header from './components/Header';
import ProductList from './components/ProductList';

function App() {
  return (
    <Wrapper>
      <Container>
        <Header />
        <ProductList />
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  background: #fff; 
`;

const Container = styled.div`
  width: 100%;
  max-width: 960px;
  padding: 40px 24px;
`;


export default App;