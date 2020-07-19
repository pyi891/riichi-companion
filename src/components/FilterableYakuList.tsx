import React, { useState } from 'react';
import styled from 'styled-components/macro';
import YakuEntry from './YakuEntry';
import { YAKU, Tag } from '../fixtures/yaku';

const FilterDiv = styled.div`
  position: sticky;
  border-bottom: 1px solid ${(props) => props.theme.highContrast};
  width: 100%;
  padding: 0 1em 1em;
  top: 0;
  background: ${(props) => props.theme.background};
`;

type ButtonProps = {
  backgroundType?: string;
};

type TagButtonProps = {
  selected: boolean;
};

const Button = styled.button<ButtonProps>`
  box-sizing: border-box;
  border: 1px solid ${(props) => props.theme.lowContrast};
  border-radius: 0.25em;
  padding: 0.5em;
  background: ${(props) =>
    props.backgroundType === 'outline'
      ? props.theme.background
      : props.theme.lowContrast};
  color: ${(props) => props.theme.foreground};
  &:active {
    background: ${(props) => props.theme.highContrast};
    color: ${(props) => props.theme.background};
  }
`;

const TagButton = styled(Button)<TagButtonProps>`
  margin: 0 0.25em 0.25em 0;
  border: 1px solid
    ${(props) =>
      props.selected ? props.theme.highlight : props.theme.lowContrast};
  background: ${(props) =>
    props.selected ? props.theme.highlight : props.theme.lowContrast};
  color: ${(props) =>
    props.selected ? props.theme.background : props.theme.foreground};
`;

const YakuListDiv = styled.div`
  width: 100%;
`;

const YakuEntryDiv = styled.div`
  &:last-child hr {
    display: none;
  }
`;

const Hr = styled.hr`
  border-color: ${(props) => props.theme.highContrast};
`;

const ALL_YAKU_KEYS = Object.keys(YAKU);

const isSuperset = (set: Set<any>, subset: Set<any>) => {
  for (let elem of subset) {
    if (!set.has(elem)) {
      return false;
    }
  }
  return true;
};

const FilterableYakuList = () => {
  const [selectedTags, setSelectedTags] = useState(new Set<Tag>());

  const onTagClicked = (tag: Tag) => {
    const newSelectedTags = new Set<Tag>([...selectedTags]);
    if (selectedTags.has(tag)) {
      newSelectedTags.delete(tag);
    } else {
      newSelectedTags.add(tag);
    }

    setSelectedTags(newSelectedTags);
  };

  const filteredYakuKeys = ALL_YAKU_KEYS.filter((yakuKey) => {
    const tagSet = YAKU[yakuKey].tags;
    return isSuperset(tagSet, selectedTags);
  });

  return (
    <>
      <FilterDiv>
        <div>
          <p>Filter by tag:</p>
          <div>
            {Object.values(Tag).map((tagValue, index) => {
              return (
                <TagButton
                  key={`${tagValue}-${index}`}
                  onClick={() => onTagClicked(tagValue)}
                  selected={selectedTags.has(tagValue)}
                >
                  {tagValue}
                </TagButton>
              );
            })}
          </div>
          <Button
            backgroundType="outline"
            onClick={() => setSelectedTags(new Set())}
          >
            Clear
          </Button>
        </div>
      </FilterDiv>
      <YakuListDiv>
        {filteredYakuKeys.map((yakuKey, index) => (
          <YakuEntryDiv key={`${yakuKey}-${index}`}>
            <YakuEntry yakuKey={yakuKey} key={`${index}-${yakuKey}`} />
            <hr />
          </YakuEntryDiv>
        ))}
      </YakuListDiv>
    </>
  );
};

export default FilterableYakuList;
