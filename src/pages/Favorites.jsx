import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductFavoriteDetalise } from 'redux/operations';
import { getFavoriteBasket } from 'redux/selectors';
import { clearFavoriteProduct } from 'redux/favoriteBasketSlice';
import { FavoriteList } from 'components/favoriteList/FavoriteList';

export const Favorites = () => {
  const dispatch = useDispatch();
  const { idProducts } = useSelector(getFavoriteBasket);

  useEffect(() => {
    idProducts.map(id => dispatch(fetchProductFavoriteDetalise(id)));

    return () => {
      dispatch(clearFavoriteProduct());
    };
  }, [dispatch, idProducts]);
  return <FavoriteList />;
};
