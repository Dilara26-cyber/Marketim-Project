import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filteredText, checkedRadio } from '../redux/actions/stateActions';
import { fetchCompanies } from '../redux/actions/brandActions';
import { useHistory } from 'react-router-dom';
import { SectionHeading } from '../styles/Heading.style';
import check from '../images/check.png';
import {
  SectionContainer,
  SectionAltContainer,
  RadioContainer,
  TextInput,
  RadioInput,
  LabelForRadio,
} from '../styles/Section.style';
const Companies = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  //Search Value Dispatch for filtering companies:
  const setText = (text) => {
    dispatch(filteredText(text));
  };

  //Radio Button Value Dispatch for filtering product data:
  const setValue = (value) => {
    dispatch(checkedRadio(value));
  };

  //Fetch Companies, also accept a search term
  const filterTheCompanies = (searchTerm) => {
    dispatch(fetchCompanies(searchTerm));
  };

  //Variables for data:
  const filterText = useSelector((state) => state.stateReducer.filterValue);
  const companies = useSelector((state) => state.brandReducer.companies);

  //Fetch companies when componentDidMount and when componentWillMount:
  useEffect(() => {
    filterTheCompanies(filterText);
  }, [filterText]);

  const boxShadow = 'rgba(31, 38, 135, 0.37) 0px 3px 8px';
  return (
    <SectionContainer height={`${296}px`}>
      <SectionHeading>Brands</SectionHeading>
      <SectionAltContainer>
        <TextInput
          type="text"
          value={filterText}
          onChange={({ target }) => setText(target.value)}
          placeholder="Search brand"
        />
        {companies && (
          <RadioContainer>
            <RadioInput
              type="radio"
              name="company"
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
            {companies.map((company) => (
              <div key={company.account}>
                <RadioInput
                  type="radio"
                  name="company"
                  value={company.slug}
                  id={company.name}
                  onClick={() => history.push('/filtered')}
                  onChange={({ target }) => setValue(target.value)}
                />
                <LabelForRadio
                  htmlFor={company.name}
                  border={'none'}
                  borderRadius={`${3}px`}
                  img={check}
                  shadow={boxShadow}
                  bgColor={'#1EA4CE'}
                >
                  {company.name}
                </LabelForRadio>
              </div>
            ))}
          </RadioContainer>
        )}
      </SectionAltContainer>
    </SectionContainer>
  );
};

export default Companies;
