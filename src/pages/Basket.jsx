import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductBasketDetalise } from 'redux/operations';
import { getFavoriteBasket } from 'redux/selectors';
import { clearBasketProduct } from 'redux/favoriteBasketSlice';
import { BasketList } from 'components/basketList/BasketList';

export const Basket = () => {
  const dispatch = useDispatch();
  const { idProductsBasket } = useSelector(getFavoriteBasket);

  useEffect(() => {
    idProductsBasket.map(id => dispatch(fetchProductBasketDetalise(id)));

    return () => {
      dispatch(clearBasketProduct());
    };
  }, [dispatch, idProductsBasket]);
  return <BasketList />;
};
