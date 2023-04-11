import { useSelector, useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineHeart } from 'react-icons/ai';
import { SlBasket } from 'react-icons/sl';
import { Button, Card, Badge, Spinner } from 'react-bootstrap';

import {
  addFavoriteProduct,
  deleteFavoriteSlice,
  findIndexProduct,
  addBasketProduct,
  deleteBasketSlice,
  findIndexBasketProduct,
} from 'redux/favoriteSlice';

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
} from './ProductsList.styled';

export const ProductsList = () => {
  const { products, isLoading } = useSelector(state => state.products);
  const status = useSelector(state => state.favorite.favoriteStatuses);
  const statusBasket = useSelector(state => state.favorite.basketStatuses);
  const location = useLocation();
  const dispatch = useDispatch();

  const handleClickFavorite = id => {
    const index = products.findIndex(p => p.id === id);
    dispatch(findIndexProduct({ products, id }));
    if (!status[index]) {
      dispatch(addFavoriteProduct(id));
    }

    if (status[index]) {
      dispatch(deleteFavoriteSlice(id));
    }
  };

  const handleClickBasket = id => {
    const index = products.findIndex(p => p.id === id);
    dispatch(findIndexBasketProduct({ products, id }));
    if (!statusBasket[index]) {
      dispatch(addBasketProduct(id));
    }

    if (statusBasket[index]) {
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
                    <Badge bg="dark">{brand}</Badge>
                    <Badge bg="dark">{price} $</Badge>
                  </WrapContent>
                  <WrapIcons>
                    <BtnFavorite onClick={() => handleClickFavorite(id)}>
                      <AiOutlineHeart
                        color={status[index] ? '#f27373' : 'grey'}
                      />
                    </BtnFavorite>
                    <BtnFavorite onClick={() => handleClickBasket(id)}>
                      <SlBasket
                        color={
                          statusBasket[index] ? 'rgb(154 206 155)' : 'grey'
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
