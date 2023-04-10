import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchProductDetalis } from 'redux/operations';
import { PurchaseList } from 'components/purchaseList/PurchaseList';

export const Purchase = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductDetalis(id));
  }, [dispatch, id]);

  return <PurchaseList />;
};
