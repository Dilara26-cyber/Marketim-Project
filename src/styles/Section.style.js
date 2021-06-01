import styled from 'styled-components';

export const SectionContainer = styled.section`
  height: ${(props) => props.height};
  width: 90%;
  margin: 2em auto;
  @media (min-width: 720px) {
    margin-bottom: 4em;
  }
`;

export const SectionAltContainer = styled.div`
  height: 100%;
  background-color: white;
  display: flex;
  padding: 0.75em;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const RadioContainer = styled.div`
  height: 60%;
  overflow-y: scroll;
  padding-top: 0.5em;
`;

export const TextInput = styled.input.attrs({
  type: 'text',
})`
  padding: 0.75em 1.5em;
  border: 2px solid #e0e0e0;
  border-radius: 3px;
`;

export const RadioInput = styled.input.attrs({
  type: 'radio',
})`
  opacity: 0;
  margin-bottom: 1.5em;

  &:checked + label::after {
    opacity: 1;
  }
`;

export const CheckBoxInput = styled.input.attrs({
  type: 'checkbox',
})`
  opacity: 0;
  margin-bottom: 1.5em;

  &:checked + label::after {
    opacity: 1;
  }
`;

export const LabelForRadio = styled.label`
  position: relative;
  cursor: pointer;
  padding-left: 35px;
  font-size: 0.85rem;

  &::before {
    content: '';
    box-shadow: ${(props) => props.shadow};
    display: inline-block;
    width: 22px;
    height: 22px;
    position: absolute;
    left: 0;
    top: -4px;
    border: ${(props) => props.border};
    border-radius: ${(props) => props.borderRadius};
  }

  &::after {
    content: '';
    display: inline-block;
    position: absolute;
    width: 22px;
    height: 22px;
    background-color: ${(props) => props.bgColor};
    left: 0;
    top: -4px;
    border-radius: ${(props) => props.borderRadius};
    background-image: url(${(props) => props.img});
    background-position: center;
    background-size: 60%;
    background-repeat: no-repeat;
    opacity: 0;
    border: ${(props) => props.borderActive};
    transition: 0.3s ease-in;
  }
  & span {
    color: rgba(0, 0, 0, 0.3);
  }
`;
