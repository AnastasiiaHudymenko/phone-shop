import { useSelector, useDispatch } from 'react-redux';
import { getProducts, getFavoriteBasket } from 'redux/selectors';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineHeart } from 'react-icons/ai';
import { SlBasket } from 'react-icons/sl';
import { Button, Card, Badge, Spinner } from 'react-bootstrap';
import { findIndex } from 'components/auxiliary/findIndex';
import {
  addFavoriteProduct,
  deleteFavoriteSlice,
  findIndexProduct,
  addBasketProduct,
  deleteBasketSlice,
  findIndexBasketProduct,
} from 'redux/favoriteBasketSlice';

import {
  List,
  WrapContent,
  CardImgStyled,
  CardStyled,
  CardTitleStyled,
  ContainerByBadgeAndIcon,
  WrapIcons,
  BtnFavorite,
  SpinnerContainer,
  BadgeStyled,
} from './ProductsList.styled';

export const ProductsList = () => {
  const { products, isLoading } = useSelector(getProducts);
  const { favoriteStatuses, basketStatuses } = useSelector(getFavoriteBasket);
  const location = useLocation();
  const dispatch = useDispatch();

  const handleClickFavorite = id => {
    const index = findIndex(products, id);

    dispatch(findIndexProduct({ products, id }));
    if (!favoriteStatuses[index]) {
      dispatch(addFavoriteProduct(id));
    }

    if (favoriteStatuses[index]) {
      dispatch(deleteFavoriteSlice(id));
    }
  };

  const handleClickBasket = id => {
    const index = findIndex(products, id);
    dispatch(findIndexBasketProduct({ products, id }));
    if (!basketStatuses[index]) {
      dispatch(addBasketProduct(id));
    }

    if (basketStatuses[index]) {
      dispatch(deleteBasketSlice(id));
    }
  };

  return isLoading ? (
    <SpinnerContainer>
      <Spinner variant="light" animation="grow" />
    </SpinnerContainer>
  ) : (
    <>
      <List>
        {products.map(({ id, brand, thumbnail, price, title }, index) => (
          <li key={id}>
            <CardStyled style={{ width: '18rem' }}>
              <CardImgStyled variant="top" src={thumbnail} alt={title} />
              <Card.Body>
                <CardTitleStyled>{title}</CardTitleStyled>
                <ContainerByBadgeAndIcon>
                  <WrapContent>
                    <BadgeStyled bg="dark">{brand}</BadgeStyled>
                    <Badge bg="dark">{price} $</Badge>
                  </WrapContent>
                  <WrapIcons>
                    <BtnFavorite onClick={() => handleClickFavorite(id)}>
                      <AiOutlineHeart
                        color={favoriteStatuses[index] ? '#f27373' : 'grey'}
                      />
                    </BtnFavorite>
                    <BtnFavorite onClick={() => handleClickBasket(id)}>
                      <SlBasket
                        color={
                          basketStatuses[index] ? 'rgb(154 206 155)' : 'grey'
                        }
                      />
                    </BtnFavorite>
                  </WrapIcons>
                </ContainerByBadgeAndIcon>
                <Link to={`product/${id}`} state={{ from: location }}>
                  <Button variant="outline-dark">More Info</Button>
                </Link>
              </Card.Body>
            </CardStyled>
          </li>
        ))}
      </List>
    </>
  );
};
