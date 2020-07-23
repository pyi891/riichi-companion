import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
  NavLink,
} from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components/macro';
import FilterableYakuList from './components/FilterableYakuList';
import 'normalize.css';
import Basics from './components/Basics';
import Scoring from './components/Scoring';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  padding: 0 1em;
  background: ${(props) => props.theme.background};
`;

const Header = styled.header`
  display: flex;
  justify-content: center;
  background: ${(props) => props.theme.background};
`;

const Nav = styled.nav`
  background: ${(props) => props.theme.background};
  border-bottom: 1px solid ${(props) => props.theme.lowContrast};
  width: 100%;

  ul {
    padding: 0;
    width: 100%;
    margin: 0;
    list-style: none;
    display: flex;
    justify-content: space-around;
  }
`;

const NavigationLink = styled(NavLink)`
  flex: 1;
  display: flex;
  justify-content: center;
  padding: 1em;
  text-decoration: none;

  &:not(:last-child) {
    border-right: 1px solid ${(props) => props.theme.lowContrast};
  }

  &:visited {
    color: ${(props) => props.theme.foreground};
  }
`;

const Footer = styled.footer`
  padding: 1em 0;
  display: flex;
  justify-content: center;
  border-top: 1px solid ${(props) => props.theme.lowContrast};
`;

const lightTheme = {
  background: '#FFFFFF',
  foreground: '#000000',
  highlight: '#51A5E1',
  lowContrast: '#D5D5D5',
  highContrast: '#5C5C5C',
};

const activeNavStyle = {
  backgroundColor: lightTheme.lowContrast,
};

const App = () => {
  const theme = lightTheme;

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Header>
          <Nav>
            <ul>
              <NavigationLink exact to="/basics" activeStyle={activeNavStyle}>
                <li>Basics</li>
              </NavigationLink>
              <NavigationLink to="/yaku" activeStyle={activeNavStyle}>
                <li>Yaku</li>
              </NavigationLink>
              <NavigationLink to="/scoring" activeStyle={activeNavStyle}>
                <li>Scoring</li>
              </NavigationLink>
            </ul>
          </Nav>
        </Header>
        <Main>
          <Switch>
            <Redirect exact from="/" to="/basics" />
            <Route path="/basics">
              <Basics />
            </Route>
            <Route path="/yaku">
              <FilterableYakuList />
            </Route>
            <Route path="/scoring">
              <Scoring />
            </Route>
          </Switch>
        </Main>
        <Footer>
          <a href="https://github.com/pyi891/riichi-companion">
            <img
              alt="Link to GitHub repository"
              src={`${process.env.PUBLIC_URL}/github-light.png`}
              height={32}
              width={32}
            />
          </a>
        </Footer>
      </ThemeProvider>
    </Router>
  );
};

export default App;
