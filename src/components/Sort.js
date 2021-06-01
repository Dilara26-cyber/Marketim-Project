import { useDispatch } from 'react-redux';
import { sorting, setOrder } from '../redux/actions/stateActions';
import { SectionHeading } from '../styles/Heading.style';
import check from '../images/checkmark.png';
import {
  SectionContainer,
  SectionAltContainer,
  RadioInput,
  LabelForRadio,
} from '../styles/Section.style';
const Sort = () => {
  const dispatch = useDispatch();
  const sort = (sort) => {
    dispatch(sorting(sort));
  };
  const order = (order) => {
    dispatch(setOrder(order));
  };

  const handleChange = ({ target }) => {
    if (target.name === 'price') {
      sort(target.name);
    } else if (target.name === 'added') {
      sort(target.name);
    }
    order(target.value);
  };

  const border = '2px solid #DFDEE2';
  const borderActive = '2px solid #1EA4CE';
  return (
    <SectionContainer height={`${215}px`}>
      <SectionHeading>Sorting</SectionHeading>
      <SectionAltContainer>
        <div>
          <RadioInput
            type="radio"
            id="priceLow"
            name="price"
            value="asc"
            onChange={handleChange}
          />
          <LabelForRadio
            htmlFor="priceLow"
            border={border}
            borderRadius={`${50}%`}
            borderActive={borderActive}
            img={check}
          >
            Price low to high
          </LabelForRadio>
        </div>
        <div>
          <RadioInput
            type="radio"
            id="priceHigh"
            name="price"
            value="desc"
            onChange={handleChange}
          />
          <LabelForRadio
            htmlFor="priceHigh"
            border={border}
            borderRadius={`${50}%`}
            borderActive={borderActive}
            img={check}
          >
            Price high to low
          </LabelForRadio>
        </div>
        <div>
          <RadioInput
            type="radio"
            id="dateNew"
            name="added"
            value="asc"
            onChange={handleChange}
          />
          <LabelForRadio
            htmlFor="dateNew"
            border={border}
            borderRadius={`${50}%`}
            borderActive={borderActive}
            img={check}
          >
            New to old
          </LabelForRadio>
        </div>
        <div>
          <RadioInput
            type="radio"
            id="dateOld"
            name="added"
            value="desc"
            onChange={handleChange}
          />
          <LabelForRadio
            htmlFor="dateOld"
            border={border}
            borderRadius={`${50}%`}
            borderActive={borderActive}
            img={check}
          >
            Old to new
          </LabelForRadio>
        </div>
      </SectionAltContainer>
    </SectionContainer>
  );
};

export default Sort;
