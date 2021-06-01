import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterProducts } from '../redux/actions/productActions';
import { setPage } from '../redux/actions/stateActions';
import ReactPaginate from 'react-paginate';
import Product from '../components/Product';
import {
  ProductListContainer,
  ButtonContainer,
  Button,
  CardContainer,
} from '../styles/Page.style';

const FilterBrand = () => {
  const dispatch = useDispatch();

  //Variables for fetching data:
  const page = useSelector((state) => state.setPage.page);
  const [productCategory, setProductCategory] = useState('mug');
  const sortName = useSelector((state) => state.setSort.sort);
  const orderValue = useSelector((state) => state.setOrder.order);
  const checkedRadio = useSelector(
    (state) => state.setCheckedRadio.checkedRadio
  );

  //Get the filtered products data from Redux Store:
  const filteredProducts = useSelector(
    (state) => state.productReducer.filteredProducts
  );

  // Dispatch Fetch Action:
  const filterProductList = (
    filterTerm,
    productCategory,
    sort,
    order,
    page
  ) => {
    dispatch(filterProducts(filterTerm, productCategory, sort, order, page));
  };

  //Get the data when componentDidMount and
  //when there is a change in dependency array:
  useEffect(() => {
    filterProductList(
      checkedRadio,
      productCategory,
      sortName,
      orderValue,
      page
    );
  }, [checkedRadio, productCategory, sortName, orderValue, page]);

  //Category Setting:
  const handleCategory = ({ target }) => {
    setProductCategory(target.value);
  };

  //Changing Page and Getting New Data:
  const pageSetting = (page) => {
    dispatch(setPage(page));
  };

  const changePage = ({ selected }) => {
    pageSetting(selected + 1);
    console.log(page);
  };
  return (
    <main>
      <ProductListContainer>
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
        {filteredProducts && (
          <CardContainer>
            {filteredProducts.map((product) => {
              return <Product key={product.added} product={product} />;
            })}
          </CardContainer>
        )}{' '}
      </ProductListContainer>
      {/* Pagination */}
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

export default FilterBrand;
