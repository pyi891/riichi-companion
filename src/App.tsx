import React from 'react';
import logo from './logo.svg';
import { Tile } from './fixtures/tile';
import MahjongTile from './components/MahjongTile/MahjongTile';
import 'normalize.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <MahjongTile type={Tile.MAN_1} />
    </div>
  );
}

export default App;
