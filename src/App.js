import './App.css';
import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Aside from './components/Aside';
import FilterBrand from './pages/FilterBrand';
import FilterTag from './pages/FilterTag';
import ProductList from './pages/ProductList';
import Cart from './components/Cart';
import styled from 'styled-components';
import Footer from './components/Footer';

const Wrapper = styled.div`
  @media (min-width: 720px) {
    display: flex;
    width: 90%;
    margin: 0 auto;
    justify-content: space-between;
    max-width: 1400px;
  }
`;
function App() {
  return (
    <div className="App">
      <Navbar />
      <Wrapper>
        <Aside />
        <Switch>
          <Route path="/" exact>
            <ProductList />
          </Route>
          <Route path="/filtered">
            <FilterBrand />
          </Route>
          <Route path="/tags">
            <FilterTag />
          </Route>
        </Switch>
        <Cart />
      </Wrapper>
      <Footer />
    </div>
  );
}

export default App;
