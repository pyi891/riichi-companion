import React from 'react';
import styled from 'styled-components/macro';
import MahjongTile from './MahjongTile';
import { Tile } from '../fixtures/tile';

const RowDiv = styled.div`
  display: flex;
  // flex-wrap: wrap;
  margin-bottom: 4px;
`;

const WaitDiv = styled.div`
  margin-left: 8px;
`;

type Props = {
  tiles: Tile[];
  wait?: Tile;
};

const MahjongHand = ({ tiles, wait }: Props) => (
  <RowDiv>
    {tiles.map((tile) => (
      <MahjongTile type={tile} />
    ))}
    {wait && (
      <WaitDiv>
        <MahjongTile type={wait} />
      </WaitDiv>
    )}
  </RowDiv>
);

export default MahjongHand;
