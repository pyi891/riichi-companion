import React from 'react';
import styled from 'styled-components/macro';
import MahjongTile from './MahjongTile';

const MANZU_REGEXP = /([1-9]*)m/;
const PINZU_REGEXP = /([1-9]*)p/;
const SOUZU_REGEXP = /([1-9]*)s/;
const HONORS_REGEXP = /([1-7]*)z/;

const RowDiv = styled.div`
  display: flex;
  margin-bottom: 1em;
`;

const convertStringToTiles = (
  tileString: string,
  suit: 'm' | 'p' | 's' | 'z'
) =>
  tileString
    .split('')
    .map((tile, index) => (
      <MahjongTile
        key={`${suit}-${tile}-${index}`}
        tileCode={`${suit}${tile}`}
      />
    ));

type Props = {
  tiles: string;
};

const MahjongHand = ({ tiles }: Props) => {
  const manzuMatch = tiles.match(MANZU_REGEXP);
  const pinzuMatch = tiles.match(PINZU_REGEXP);
  const souzuMatch = tiles.match(SOUZU_REGEXP);
  const honorsMatch = tiles.match(HONORS_REGEXP);

  return (
    <RowDiv>
      {manzuMatch && convertStringToTiles(manzuMatch[1], 'm')}
      {pinzuMatch && convertStringToTiles(pinzuMatch[1], 'p')}
      {souzuMatch && convertStringToTiles(souzuMatch[1], 's')}
      {honorsMatch && convertStringToTiles(honorsMatch[1], 'z')}
    </RowDiv>
  );
};

export default MahjongHand;
