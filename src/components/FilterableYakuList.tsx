import React, { useState } from 'react';
import styled from 'styled-components/macro';
import YakuEntry from './YakuEntry';
import { YAKU, Tag } from '../fixtures/yaku';

type FilterDivProps = {
  isFilterCollapsed: boolean;
};

const FilterDiv = styled.div<FilterDivProps>`
  position: sticky;
  border-bottom: 1px solid ${(props) => props.theme.lowContrast};
  width: 100%;
  padding: ${(props) => (props.isFilterCollapsed ? '0 1em' : '0 1em 1em')};
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

const CaretButton = styled.button`
  width: 100%;
  text-align: left;
  font-size: 1em;
  background: none;
  border: 0;
  padding: 0;

  &:focus {
    outline: none;
  }
`;

const YakuListDiv = styled.div`
  width: 100%;
`;

const YakuEntryDiv = styled.div`
  &:last-child hr {
    display: none;
  }

  &:not(:last-child) {
    border-bottom: 1px solid ${(props) => props.theme.lowContrast};
  }
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
  const [isFilterCollapsed, setIsFilterCollapsed] = useState(false);

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
      <FilterDiv isFilterCollapsed={isFilterCollapsed}>
        <div>
          <p>
            <CaretButton
              onClick={() => setIsFilterCollapsed(!isFilterCollapsed)}
            >
              Filters {isFilterCollapsed ? '▸' : '▾'}
            </CaretButton>
          </p>
          {!isFilterCollapsed && (
            <>
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
            </>
          )}
        </div>
      </FilterDiv>
      <YakuListDiv>
        {filteredYakuKeys.map((yakuKey, index) => (
          <YakuEntryDiv key={`${yakuKey}-${index}`}>
            <YakuEntry yakuKey={yakuKey} key={`${index}-${yakuKey}`} />
          </YakuEntryDiv>
        ))}
      </YakuListDiv>
    </>
  );
};

export default FilterableYakuList;
