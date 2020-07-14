import React, { Suspense } from 'react';
import styled from 'styled-components/macro';
import { Tile, TILE } from '../fixtures/tile';

type TileDivProps = {
  isWait: boolean;
};

const TileDiv = styled.div<TileDivProps>`
  display: inline-flex;
  border: 1px solid black;
  border-radius: 4px;
  padding: 2px 0;
  align-items: center;
  background: ${(props) => (props.isWait ? 'blue' : 'white')};
`;

type Props = {
  type: Tile;
  isWait?: boolean;
  theme?: 'light' | 'dark';
};

const MahjongTile = ({ type, isWait = false, theme = 'light' }: Props) => {
  const { fileName } = TILE[type];
  const Svg = React.lazy(() => import(`../img/tiles/${theme}/${fileName}`));

  return (
    <TileDiv isWait={isWait}>
      <Suspense fallback={'...'}>
        <Svg height={34} width={29} />
      </Suspense>
    </TileDiv>
  );
};

export default MahjongTile;
