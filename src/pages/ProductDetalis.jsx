import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProductDetalis } from 'redux/operations';
import { ProductDetalisMarkup } from 'components/productDetalisMarkup/ProductDetalisMarkup';

export const ProductDetalis = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductDetalis(id));
  }, [dispatch, id]);

  return <ProductDetalisMarkup />;
};
