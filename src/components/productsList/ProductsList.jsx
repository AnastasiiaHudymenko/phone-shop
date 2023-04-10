import { useSelector, useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineHeart } from 'react-icons/ai';
import { SlBasket } from 'react-icons/sl';
import { Button, Card, Badge } from 'react-bootstrap';
import {
  addFavoriteProduct,
  deleteFavoriteSlice,
  findIndexProduct,
} from 'redux/favoriteSlice';
// import { findIndexProduct } from 'redux/favoriteStatusesSlice';
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
  const { products } = useSelector(state => state.products);
  const status = useSelector(state => state.favorite.favoriteStatuses);
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
                      color={status[index] ? '#f27373' : 'grey'}
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
