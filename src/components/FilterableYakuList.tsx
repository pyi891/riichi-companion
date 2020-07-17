import React from 'react';
import styled from 'styled-components/macro';
import YakuEntry from './YakuEntry';
import { YAKU } from '../fixtures/yaku';

const YakuEntryDiv = styled.div`
  &:last-child hr {
    display: none;
  }
`;

const FilterableYakuList = () => {
  return (
    <div>
      {Object.keys(YAKU).map((yaku) => (
        <YakuEntryDiv>
          <YakuEntry yaku={yaku} key={YAKU[yaku].simpleName} />
          <hr />
        </YakuEntryDiv>
      ))}
    </div>
  );
};

export default FilterableYakuList;
