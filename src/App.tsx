import React from 'react';
import 'normalize.css';
import styled, { ThemeProvider } from 'styled-components/macro';
import FilterableYakuList from './components/FilterableYakuList';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  padding: 0 16px;
  background: ${(props) => props.theme.background};
`;

const Header = styled.header`
  padding: 32px 0;
  display: flex;
  justify-content: center;
  background: ${(props) => props.theme.background};

  h1 {
    margin: 0;
  }
`;

const Footer = styled.footer`
  padding: 32px 0;
  display: flex;
  justify-content: center;
  border-top: 1px solid black;
  background: ${(props) => props.theme.background};

  p {
    margin: 0;
  }
`;

const lightTheme = {
  background: '#FFFFFF',
  foreground: '#000000',
  highlight: '#51A5E1',
  lowContrast: '#D5D5D5',
  highContrast: '#5C5C5C',
};

function App() {
  const theme = lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <Header>
        <h1>Riichi</h1>
      </Header>
      <Main>
        <FilterableYakuList />
      </Main>
      <Footer>
        <p>By @pyi891</p>
      </Footer>
    </ThemeProvider>
  );
}

export default App;
