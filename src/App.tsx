import React from 'react';
import 'normalize.css';
import styled from 'styled-components/macro';
import FilterableYakuList from './components/FilterableYakuList';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  padding: 0 16px;
`;

const Header = styled.header`
  padding: 32px 0;
  display: flex;
  justify-content: center;

  h1 {
    margin: 0;
  }
`;

const Footer = styled.footer`
  padding: 32px 0;
  display: flex;
  justify-content: center;
  border-top: 1px solid black;

  p {
    margin: 0;
  }
`;

function App() {
  return (
    <>
      <Header>
        <h1>Riichi</h1>
      </Header>
      <Main>
        <FilterableYakuList />
      </Main>
      <Footer>
        <p>By @pyi891</p>
      </Footer>
    </>
  );
}

export default App;
