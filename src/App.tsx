import React from 'react';
import { Tile } from './fixtures/tile';
import 'normalize.css';
import MahjongHand from './components/MahjongHand';
import styled from 'styled-components/macro';

const Main = styled.main`
  height: 100vh;
`;

function App() {
  return (
    <>
      <header>Riichi Companion App</header>
      <Main>
        <MahjongHand
          tiles={[
            Tile.MAN_1,
            Tile.MAN_9,
            Tile.PIN_1,
            Tile.PIN_9,
            Tile.SOU_1,
            Tile.SOU_9,
            Tile.TON,
            Tile.NAN,
            Tile.SHAA,
            Tile.PEI,
            Tile.CHUN,
            Tile.HAKU,
            Tile.HATSU,
          ]}
          wait={Tile.HATSU}
        />
      </Main>
      <footer>
        <p>By @pyi891</p>
      </footer>
    </>
  );
}

export default App;
