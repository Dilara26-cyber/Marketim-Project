import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';
import styled from 'styled-components';
import mug from '../images/mugSmall.jpg';
import shirt from '../images/shirtSmall.jpg';
const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1.5em auto;
  max-width: 150px;
  gap: 0.5em;
`;
const ImageContainer = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 2em;
  max-width: 150px;
  justify-content: center;
  background: white;
  border-radius: 20px;
  box-shadow: rgba(31, 38, 135, 0.37) 0px 3px 8px;
  & img {
    max-width: 110px;
    margin: 0 auto;
    border-radius: 20px;
  }
`;

const InfoContainer = styled.article`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  & h3 {
    font-size: 0.75rem;
  }
  & p {
    font-weight: 500;
    font-size: 0.85rem;
    color: ${(props) => props.theme.primaryColor};
  }

  & button {
    background-color: ${(props) => props.theme.primaryColor};
    color: white;
    font-weight: 500;
    padding: 0.5em;
    border-radius: 5px;
    transition: 0.3s all ease-in;
    letter-spacing: 0.5px;
    &:hover {
      color: ${(props) => props.theme.primaryColor};
      background-color: ${(props) => props.theme.lightPurple};
    }
  }
`;
const Product = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartReducer.cartItems);
  const addProduct = (items, product) => {
    dispatch(addToCart(items, product));
  };

  return (
    <ProductContainer>
      <ImageContainer className="card--img">
        <img
          src={product.itemType === 'mug' ? mug : shirt}
          alt="Placeholder Image for the Product"
        />
      </ImageContainer>
      <InfoContainer className="card--info">
        <p>₺ {product.price}</p>
        <h3>{product.name}</h3>
        <button onClick={() => addProduct(cartItems, product)}>Add</button>
      </InfoContainer>
    </ProductContainer>
  );
};

export default Product;
