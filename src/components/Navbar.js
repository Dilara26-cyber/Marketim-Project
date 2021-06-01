import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Logo from '../images/Logo.svg';
import arrow from '../images/right-drawn-arrow.png';
import { AiFillShopping } from 'react-icons/ai';
const Nav = styled.nav`
  background-color: ${(props) => props.theme.primaryColor};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 75px;
`;

const TotalDisplay = styled.div`
  @media (max-width: 720px) {
    &::after {
      content: '';
      width: 50px;
      height: 50px;
      display: inline-block;
      background-image: url(${arrow});
      background-size: contain;
      top: 100%;
      position: absolute;
    }
  }
  position: absolute;
  right: 0;
  color: white;
  display: flex;
  background-color: ${(props) => props.theme.darkBlue};
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 25%;
  max-width: 130px;
  transition: all 0.3s ease-in;
  & > p {
    font-size: 0.9rem;
    margin-left: 0.25em;
  }
  @media (min-width: 720px) {
    right: 6%;
  }
`;
const Navbar = () => {
  const [total, setTotal] = useState(0);
  const cartItems = useSelector((state) => state.cartReducer.cartItems);
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
  useEffect(() => {
    calculate();
  });
  return (
    <div>
      <Nav>
        <img src={Logo} alt="Logo of the company" />
        <TotalDisplay>
          <AiFillShopping /> <p>₺{total}</p>
        </TotalDisplay>
      </Nav>
    </div>
  );
};

export default Navbar;
