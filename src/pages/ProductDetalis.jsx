import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductDetalis } from 'redux/operations';
import { Spinner } from 'react-bootstrap';
import { getProductDetalis } from 'redux/selectors';
import { ProductDetalisMarkup } from 'components/productDetalisMarkup/ProductDetalisMarkup';
import { SpinnerContainer } from 'components/globalStyled/global.styled';

export const ProductDetalis = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { isLoading } = useSelector(getProductDetalis);

  useEffect(() => {
    dispatch(fetchProductDetalis(id));
  }, [dispatch, id]);

  return isLoading ? (
    <SpinnerContainer>
      <Spinner variant="dark" animation="grow" />
    </SpinnerContainer>
  ) : (
    <ProductDetalisMarkup />
  );
};
