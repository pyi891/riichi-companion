import React from 'react';
import styled from 'styled-components/macro';
import { YAKU } from '../fixtures/yaku';

type Props = {
  yaku: string;
};

const A = styled.a`
  text-transform: capitalize;
`;

const YakuEntry = ({ yaku }: Props) => {
  const {
    url,
    simpleName,
    englishName,
    japaneseName,
    tags,
    description,
    example,
    openValue,
    closedValue,
    specialValue,
    // compatibility,
  } = YAKU[yaku];

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
      <p>English name: {englishName}</p>
      <p>Japanese name: {japaneseName}</p>
      <p>Value: {value}</p>
      <p>Tags: {tags.join(', ')}</p>
      <p>Description: {description}</p>
    </div>
  );
};

export default YakuEntry;
