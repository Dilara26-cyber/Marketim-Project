import styled from 'styled-components';

export const ProductListContainer = styled.section`
  width: 90%;
  margin: 0 auto;
  background: white;
  max-width: 750px;
  border-radius: 3px;
  padding: 1em;

  & h2 {
    color: ${(props) => props.theme.headingColor};
    font-weight: 400;
    margin-bottom: 0.75em;
  }
  @media (min-width: 720px) {
    margin-top: 3.5em;
  }
`;

export const ButtonContainer = styled.section`
  display: flex;
  gap: 1em;
`;

export const Button = styled.button`
  padding: 0.5em 1em;
  text-transform: lowercase;
  border-radius: 5px;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 1em;
  @media (min-width: 720px) {
    margin: 0;
  }
`;
