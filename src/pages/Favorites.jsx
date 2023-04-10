import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductFavoriteDetalise } from 'redux/operations';
import { clearFavoriteProduct } from 'redux/favoriteSlice';
import { FavoriteList } from 'components/favoriteList/FavoriteList';

export const Favorites = () => {
  const dispatch = useDispatch();
  const { idProducts } = useSelector(state => state.favorite);

  useEffect(() => {
    idProducts.map(id => dispatch(fetchProductFavoriteDetalise(id)));

    return () => {
      dispatch(clearFavoriteProduct());
    };
  }, [dispatch, idProducts]);
  return <FavoriteList />;
};
