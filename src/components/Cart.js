import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import {
  addToCart,
  removeFromCart,
  decreaseTheCount,
} from '../redux/actions/cartActions';
import { SectionHeading } from '../styles/Heading.style';

const CartContainer = styled.div`
  @media (max-width: 720px) {
    position: absolute;
    top: 1.5%;
    right: 0;
    transform: translateX(290px);
    transition: 0.3s transform ease-in;
    &:hover {
      transform: translateX(0px);
    }
  }
  display: flex;
  background-color: white;
  border: 5px solid ${(props) => props.theme.primaryColor};
  width: 90%;
  flex-direction: column;
  margin: 3rem auto;
  border-radius: 3px;
  padding: 1em;
  max-width: 300px;
  & p {
    font-weight: 500;
    color: ${(props) => props.theme.primaryColor};
  }
  & > p {
    padding: 0.75em 0.5em;
    border: 2px solid ${(props) => props.theme.primaryColor};
    align-self: flex-end;
    text-align: center;
    margin-top: 0.75em;
    color: ${(props) => props.theme.primaryColor};
  }
  @media (min-width: 720px) {
    margin-top: 3.5em;
  }
`;
const CartItemContainer = styled.section`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  margin: 1em auto;
  padding: 0.75em 0.1em;
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    width: 100%;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
const CartHeading = styled.h4`
  font-weight: 400;
  margin-bottom: 0.3em;
`;
const ButtonContainer = styled.div`
  display: flex;
  width: 40%;
  align-items: center;
  justify-content: space-around;

  & button {
    background: transparent;
    font-size: 1.5rem;
    transition: 0.3s color ease-in;
    color: ${(props) => props.theme.primaryColor};
    &:hover {
      color: ${(props) => props.theme.darkBlue};
    }
  }

  & p {
    background-color: ${(props) => props.theme.primaryColor};
    color: white;
    padding: 0.5em 0.75em;
  }
`;

const HeadingContainer = styled.div`
  width: 60%;
`;
const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartReducer.cartItems);
  const [total, setTotal] = useState(0);
  const calculate = () => {
    let { total, count } = cartItems.reduce(
      (cartTotal, item) => {
        const { price, count } = item;
        const itemTotal = price * count;
        cartTotal.total += itemTotal;
        cartTotal.count += count;
        return cartTotal;
      },
      {
        total: 0,
        count: 0,
      }
    );
    total = parseFloat(total.toFixed(2));
    setTotal(total);
    return { ...cartItems, total, count };
  };

  const addProduct = (items, product) => {
    dispatch(addToCart(items, product));
  };
  const removeProduct = (items, product) => {
    dispatch(removeFromCart(items, product));
    console.log(cartItems);
    console.log(product);
  };
  const decrease = (items, product) => {
    dispatch(decreaseTheCount(items, product));
    console.log(cartItems);
    console.log(product);
  };
  useEffect(() => {
    calculate();
  });
  return (
    <div>
      {cartItems.length > 0 && (
        <CartContainer>
          {cartItems && (
            <section>
              {cartItems.map((item) => {
                return (
                  <CartItemContainer>
                    <HeadingContainer>
                      <CartHeading>{item.name}</CartHeading>
                      <p>₺{item.price}</p>
                    </HeadingContainer>
                    <ButtonContainer>
                      <button onClick={() => addProduct(cartItems, item)}>
                        +
                      </button>
                      <p>{item.count}</p>
                      <button
                        onClick={() => {
                          item.count === 1
                            ? removeProduct(cartItems, item)
                            : decrease(cartItems, item);
                        }}
                      >
                        -
                      </button>
                    </ButtonContainer>
                  </CartItemContainer>
                );
              })}
            </section>
          )}
          <p>₺{total}</p>
        </CartContainer>
      )}
    </div>
  );
};

export default Cart;
