import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductBasketDetalise } from 'redux/operations';
import { clearBasketProduct } from 'redux/favoriteBasketSlice';
import { getFavoriteBasket } from 'redux/selectors';
import { PurchaseList } from 'components/purchaseList/PurchaseList';
import styled from 'styled-components';

export const Purchase = () => {
  const { idProductsBasket, isLoading } = useSelector(getFavoriteBasket);
  const dispatch = useDispatch();
  useEffect(() => {
    idProductsBasket.map(id => dispatch(fetchProductBasketDetalise(id)));

    return () => {
      dispatch(clearBasketProduct());
    };
  }, [dispatch, idProductsBasket]);
  return (
    !isLoading && (
      <MainContainer>
        <PurchaseList />
      </MainContainer>
    )
  );
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 30px 0;
  @media screen and (min-width: 600px) {
    width: 550px;
  }
`;
