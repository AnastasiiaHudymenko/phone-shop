import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllProducts } from 'redux/operations';
import { ProductsList } from 'components/productsList/ProductsList';

export const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  return <ProductsList />;
};
