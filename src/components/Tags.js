import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterTags, checkedRadioTags } from '../redux/actions/stateActions';
import { filterProductsByTag } from '../redux/actions/productActions';
import { useHistory } from 'react-router-dom';
import { SectionHeading } from '../styles/Heading.style';
import {
  SectionContainer,
  SectionAltContainer,
  RadioContainer,
  TextInput,
  RadioInput,
  LabelForRadio,
} from '../styles/Section.style';
import check from '../images/check.png';
const Tags = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const productList = useSelector((state) => state.productReducer.products);
  //Search Value Dispatch for filtering companies:
  const setText = (text) => {
    dispatch(filterTags(text));
  };
  const setValue = (value) => {
    dispatch(checkedRadioTags(value));
  };
  const filterText = useSelector((state) => state.setFilterTags.filterTags);

  //Iterate over filtered products and after that:
  //Iterate over tags list to find unique tags:
  //Count the multiple ones:
  //Turn the allTags object to an array:
  //Return the new array of unique tags and repeat number:
  const createTags = (products) => {
    const allTags = {};
    if (products !== undefined) {
      products.map((product) => {
        product.tags.map((tag) => {
          if (allTags[tag]) {
            return (allTags[tag] = allTags[tag] + 1);
          } else {
            return (allTags[tag] = 1);
          }
        });
      });
    }
    const newArr = Object.entries(allTags);
    return newArr;
  };
  const tagsArrayProducts = createTags(productList);
  //Declare boxShadow variable here because it is hard to write in-line:
  const boxShadow = 'rgba(31, 38, 135, 0.37) 0px 3px 8px';
  return (
    <SectionContainer height={`${296}px`}>
      <SectionHeading>Tags</SectionHeading>
      <SectionAltContainer>
        <TextInput
          type="text"
          value={filterText}
          onChange={({ target }) => setText(target.value)}
          placeholder="Search Text"
        />

        <RadioContainer>
          <RadioInput
            type="radio"
            name="tag"
            value=""
            id="all"
            onClick={() => history.push('/')}
          />
          <LabelForRadio
            htmlFor="all"
            border={'none'}
            borderRadius={`${3}px`}
            img={check}
            shadow={boxShadow}
            bgColor={'#1EA4CE'}
          >
            All
          </LabelForRadio>
          {tagsArrayProducts
            .filter((tag) => {
              const [text] = tag;
              if (filterText === '') {
                return text;
              } else if (
                text.toLowerCase().includes(filterText.toLowerCase())
              ) {
                return text;
              }
            })
            .map((tag, index) => {
              const [text, value] = tag;
              return (
                <div key={index}>
                  <RadioInput
                    type="radio"
                    value={text}
                    id={text}
                    name="tag"
                    onClick={() => history.push('/tags')}
                    onChange={({ target }) => setValue(target.value)}
                  />
                  <LabelForRadio
                    htmlFor={text}
                    border={'none'}
                    borderRadius={`${3}px`}
                    img={check}
                    shadow={boxShadow}
                    bgColor={'#1EA4CE'}
                  >
                    {`${text}`}
                    <span>{` (${value})`}</span>{' '}
                  </LabelForRadio>
                </div>
              );
            })}
        </RadioContainer>
      </SectionAltContainer>
    </SectionContainer>
  );
};

export default Tags;
