import React from 'react';
import styled from 'styled-components/macro';
import { YAKU } from '../fixtures/yaku';
import MahjongHand from './MahjongHand';
import descriptionMap from '../fixtures/description-map';

type Props = {
  yakuKey: string;
};

const A = styled.a`
  text-transform: capitalize;
`;

const YakuEntry = ({ yakuKey }: Props) => {
  const {
    url,
    simpleName,
    englishName,
    japaneseName,
    tags,
    descriptionComponent,
    example,
    openValue,
    closedValue,
    specialValue,
  } = YAKU[yakuKey];

  let value;

  if (openValue && closedValue && openValue === closedValue) {
    value = `${openValue} han`;
  } else if (openValue && closedValue && openValue !== closedValue) {
    value = `${closedValue} han (closed), ${openValue} han (open)`;
  } else if (closedValue && !openValue) {
    value = `${closedValue} han (closed only)`;
  } else if (!openValue && !closedValue && specialValue) {
    value = `${specialValue}`;
  }

  return (
    <div>
      <p>
        <strong>
          <A href={url} target="_blank" rel="noopener noreferrer">
            {simpleName}
          </A>
        </strong>
      </p>
      <p>English: {englishName}</p>
      <p>Japanese: {japaneseName}</p>
      <p>Value: {value}</p>
      <p>Tags: {[...tags].join(', ')}</p>
      {React.createElement(descriptionMap[descriptionComponent])}
      {example && (
        <div>
          <p>Example:</p> <MahjongHand tiles={example} />
        </div>
      )}
    </div>
  );
};

export default YakuEntry;
