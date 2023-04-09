import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineHeart } from 'react-icons/ai';
import { SlBasket } from 'react-icons/sl';
import { Button, Card, Badge } from 'react-bootstrap';
import { addFavoriteProduct, deleteFavoriteSlice } from 'redux/favoriteSlice';
import {
  List,
  WrapContent,
  CardImgStyled,
  CardStyled,
  CardTitleStyled,
  ContainerByBadgeAndIcon,
  WrapIcons,
  BtnFavorite,
} from './ProductsList.styled';

export const ProductsList = () => {
  const [favoriteStatuses, setFavoriteStatuses] = useState([]);

  const { products } = useSelector(state => state.products);
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    setFavoriteStatuses(products.map(() => false));
  }, [products]);

  const handleClickFavorite = id => {
    const index = products.findIndex(p => p.id === id);
    setFavoriteStatuses(prev => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
    if (!favoriteStatuses[index]) {
      dispatch(addFavoriteProduct(id));
    }

    if (favoriteStatuses[index]) {
      dispatch(deleteFavoriteSlice(id));
    }
  };

  return (
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
                      color={favoriteStatuses[index] ? 'red' : 'grey'}
                    />
                  </BtnFavorite>

                  <SlBasket />
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
  );
};
