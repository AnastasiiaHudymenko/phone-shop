import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductBasketDetalise } from 'redux/operations';
import { clearBasketProduct } from 'redux/favoriteSlice';
import { BasketList } from 'components/basketList/BasketList';

export const Basket = () => {
  const dispatch = useDispatch();
  const { idProductsBasket } = useSelector(state => state.favorite);

  useEffect(() => {
    idProductsBasket.map(id => dispatch(fetchProductBasketDetalise(id)));

    return () => {
      dispatch(clearBasketProduct());
    };
  }, [dispatch, idProductsBasket]);
  return <BasketList />;
};
