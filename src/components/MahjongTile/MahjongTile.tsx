import React from 'react';
import styled from 'styled-components/macro';
import { Tile, TILE } from '../../fixtures/tile';

const images = require.context('../../img/tiles', true, /.png$/);

const Div = styled.div`
  display: inline-block;
  border: 1px solid black;
  border-radius: 4px;
`;

type Props = {
  theme?: 'light' | 'dark';
  type: Tile;
};

const MahjongTile = ({ type, theme = 'light' }: Props) => {
  const { fileName } = TILE[type];
  const path = `./${theme}/${fileName}`;

  return (
    <Div>
      <img src={images(path)} alt={type} height={39} width={27} />
    </Div>
  );
};

export default MahjongTile;
