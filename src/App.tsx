import React from 'react';
import { Tile } from './fixtures/tile';
import 'normalize.css';
import MahjongHand from './components/MahjongHand';
import styled from 'styled-components/macro';
import YakuEntry from './components/YakuEntry';
import { Yaku, YAKU } from './fixtures/yaku';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
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

  p {
    margin: 0;
  }
`;

function App() {
  return (
    <>
      <Header>
        <h1>Riichi Companion App</h1>
      </Header>
      <Main>
        <div>
          {Object.keys(Yaku).map((yaku) => (
            <YakuEntry yakuKey={yaku} />
          ))}
        </div>
      </Main>
      <Footer>
        <p>By @pyi891</p>
      </Footer>
    </>
  );
}

export default App;
