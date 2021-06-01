import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../redux/actions/productActions';
import { setPage } from '../redux/actions/stateActions';
import Product from '../components/Product';
import {
  ProductListContainer,
  ButtonContainer,
  Button,
  CardContainer,
} from '../styles/Page.style';

const ProductList = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productReducer.products);
  const sortName = useSelector((state) => state.setSort.sort);
  const orderValue = useSelector((state) => state.setOrder.order);
  const page = useSelector((state) => state.setPage.page);
  const [productCategory, setProductCategory] = useState('mug');

  // Dispatch Fetch Action:
  const fetchProductList = (productCategory, sort, order, page) => {
    dispatch(fetchProducts(productCategory, sort, order, page));
  };
  //Get data when componentDidMount and
  //when there is a change in page state of category state:
  useEffect(() => {
    fetchProductList(productCategory, sortName, orderValue, page);
  }, [productCategory, sortName, orderValue, page]);

  const pageSetting = (page) => {
    dispatch(setPage(page));
  };

  const changePage = ({ selected }) => {
    pageSetting(selected + 1);
    console.log(page);
  };
  //Category Setting:
  const handleCategory = ({ target }) => {
    setProductCategory(target.value);
  };

  return (
    <main>
      <ProductListContainer>
        {/* cart header */}
        <header>
          <h2>Products</h2>
        </header>
        <ButtonContainer>
          <Button
            value="mug"
            onClick={handleCategory}
            bgColor={'#1EA4CE'}
            color={'white'}
          >
            Mug
          </Button>
          <Button
            value="shirt"
            onClick={handleCategory}
            bgColor={'#F2F0FD'}
            color={'#1EA4CE'}
          >
            Shirt
          </Button>
        </ButtonContainer>
        {/* cart items */}
        {productList && (
          <CardContainer>
            {productList.map((product) => {
              return <Product key={product.added} product={product} />;
            })}
          </CardContainer>
        )}
      </ProductListContainer>

      <ReactPaginate
        pageCount={20}
        pageRangeDisplayed={2}
        marginPagesDisplayed={3}
        previousLabel={'Prev'}
        nextLabel={'Next'}
        onPageChange={changePage}
        pageClassName={'page'}
        activeClassName={'activePage'}
        containerClassName={'page-container'}
        nextClassName={'next'}
        previousClassName={'prev'}
      />
    </main>
  );
};

export default ProductList;
