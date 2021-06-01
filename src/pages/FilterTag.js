import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPage } from '../redux/actions/stateActions';
import { filterProductsByTag } from '../redux/actions/productActions';
import ReactPaginate from 'react-paginate';
import Product from '../components/Product';
import {
  ProductListContainer,
  ButtonContainer,
  Button,
  CardContainer,
} from '../styles/Page.style';
const FilterTag = () => {
  const dispatch = useDispatch();

  //Variables for fetching data:
  const page = useSelector((state) => state.setPage.page);
  const [productCategory, setProductCategory] = useState('mug');
  const sortName = useSelector((state) => state.setSort.sort);
  const orderValue = useSelector((state) => state.setOrder.order);
  const tagsRadio = useSelector(
    (state) => state.setCheckedRadioTags.checkedRadioTags
  );
  console.log(tagsRadio);
  const filteredProducts = useSelector(
    (state) => state.productReducer.filteredProducts
  );

  //Fetch Action from Redux Store:
  const filterByTag = (productCategory, tag, sort, order, page) => {
    dispatch(filterProductsByTag(productCategory, tag, sort, order, page));
  };

  //Get data when componentDidMount and
  //when there is a change in page state of category state:
  useEffect(() => {
    filterByTag(productCategory, tagsRadio, sortName, orderValue, page);
  }, [productCategory, tagsRadio, sortName, orderValue, page]);

  //Set the Category:
  const handleCategory = ({ target }) => {
    setProductCategory(target.value);
  };

  //Get Page Action from Redux Store:
  const pageSetting = (page) => {
    dispatch(setPage(page));
  };

  //Set the Page
  const changePage = ({ selected }) => {
    pageSetting(selected + 1);
    console.log(page);
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

        {filteredProducts && (
          <CardContainer>
            {filteredProducts.map((product) => {
              return <Product key={product.added} product={product} />;
            })}{' '}
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

export default FilterTag;
