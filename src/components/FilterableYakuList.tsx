import React from 'react';
import styled from 'styled-components/macro';
import YakuEntry from './YakuEntry';
import { YAKU } from '../fixtures/yaku';

const YakuEntryDiv = styled.div`
  &:last-child hr {
    display: none;
  }
`;

const ALL_YAKU = Object.keys(YAKU);

const FilterableYakuList = () => {
  // TODO: add filters
  const filteredYaku = ALL_YAKU;

  return (
    <div>
      {Object.keys(YAKU).map((yaku, index) => (
        <YakuEntryDiv key={`${yaku}-${index}`}>
          <YakuEntry yaku={yaku} key={YAKU[yaku].simpleName} />
          <hr />
        </YakuEntryDiv>
      ))}
    </div>
  );
};

export default FilterableYakuList;
