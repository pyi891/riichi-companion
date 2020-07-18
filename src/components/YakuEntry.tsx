import React, { Suspense } from 'react';
import styled from 'styled-components/macro';
import { YAKU } from '../fixtures/yaku';
import MahjongHand from './MahjongHand';

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
    descriptionComponent,
    example,
    openValue,
    closedValue,
    specialValue,
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

  const Description = React.lazy(() =>
    import(`./yaku-descriptions/${descriptionComponent}`)
  );

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
      <Suspense fallback="...">
        <Description />
      </Suspense>
      {example && (
        <div>
          <p>Example:</p> <MahjongHand tiles={example} />
        </div>
      )}
    </div>
  );
};

export default YakuEntry;
