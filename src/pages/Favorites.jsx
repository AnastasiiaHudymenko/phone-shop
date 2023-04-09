import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductFavoriteDetalise } from 'redux/operations';

export const Favorites = () => {
  const dispatch = useDispatch();
  const { idProducts } = useSelector(state => state.favorite);

  useEffect(() => {
    idProducts.map(id => dispatch(fetchProductFavoriteDetalise(id)));
  }, [dispatch, idProducts]);
  return <div>Favorites</div>;
};
