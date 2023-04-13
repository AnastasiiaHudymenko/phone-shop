import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductBasketDetalise } from 'redux/operations';
import { clearBasketProduct } from 'redux/favoriteBasketSlice';
import { Link } from 'react-router-dom';
import { getFavoriteBasket } from 'redux/selectors';
import { PurchaseList } from 'components/purchaseList/PurchaseList';
import {
  MainContainer,
  SpinnerContainer,
} from 'components/globalStyled/global.styled';
import { Spinner, Button } from 'react-bootstrap';

export const Purchase = () => {
  const { idProductsBasket, isLoading } = useSelector(getFavoriteBasket);
  const dispatch = useDispatch();
  useEffect(() => {
    idProductsBasket.map(id => dispatch(fetchProductBasketDetalise(id)));

    return () => {
      dispatch(clearBasketProduct());
    };
  }, [dispatch, idProductsBasket]);
  return isLoading ? (
    <SpinnerContainer>
      <Spinner variant="dark" animation="grow" />
    </SpinnerContainer>
  ) : (
    <MainContainer>
      <Link to="/">
        {' '}
        <Button variant="outline-dark">Back to product</Button>
      </Link>
      <PurchaseList />
    </MainContainer>
  );
};
