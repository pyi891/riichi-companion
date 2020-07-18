import React, { Suspense } from 'react';
import styled from 'styled-components/macro';
import { TILES } from '../fixtures/tile';

const TileDiv = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border: 1px solid black;
  border-radius: 4px;
  padding: 4px;
  max-height: 60px;
  max-width: 48px;
`;

type Props = {
  tileCode: string;
  isWait?: boolean;
  theme?: 'light' | 'dark';
};

const MahjongTile = ({ tileCode, theme = 'light' }: Props) => {
  const { fileName } = TILES[tileCode];
  const Svg = React.lazy(() => import(`../img/tiles/${theme}/${fileName}`));

  return (
    <TileDiv>
      <Suspense fallback={''}>
        <Svg alt={tileCode} height="100%" width="100%" />
      </Suspense>
    </TileDiv>
  );
};

export default MahjongTile;
