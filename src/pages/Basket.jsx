import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { fetchProductBasketDetalise } from 'redux/operations';
import { getFavoriteBasket } from 'redux/selectors';
import { clearBasketProduct } from 'redux/favoriteBasketSlice';
import { BasketList } from 'components/basketList/BasketList';
import { Spinner } from 'react-bootstrap';
import { SpinnerContainer } from 'components/globalStyled/global.styled';

export const Basket = () => {
  const location = useLocation();
  console.log(location);
  const dispatch = useDispatch();
  const { idProductsBasket, isLoading } = useSelector(getFavoriteBasket);

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
    <BasketList />
  );
};
