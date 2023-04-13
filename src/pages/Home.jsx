import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProducts } from 'redux/operations';
import { getProducts } from 'redux/selectors';
import { Spinner } from 'react-bootstrap';
import { ProductsList } from 'components/productsList/ProductsList';
import { SpinnerContainer } from 'components/globalStyled/global.styled';
export const Home = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector(getProducts);

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  return isLoading ? (
    <SpinnerContainer>
      <Spinner variant="dark" animation="grow" />
    </SpinnerContainer>
  ) : (
    <ProductsList />
  );
};
