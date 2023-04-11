import { useSelector, useDispatch } from 'react-redux';
import { getFavoriteBasket } from 'redux/selectors';
import { findProductToBasket } from 'components/auxiliary/findProductBasket';
import { TiDeleteOutline } from 'react-icons/ti';
import { ImStarEmpty } from 'react-icons/im';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import {
  deleteFavoriteSlice,
  findIndexProduct,
  findIndexBasketProduct,
  deleteBasketSlice,
  addBasketProduct,
} from 'redux/favoriteBasketSlice';
import { Spinner, Button } from 'react-bootstrap';
import {
  Container,
  ImgProduct,
  ImgThumb,
  PriceTitle,
  Title,
  BtnDelete,
  WrapCard,
  WrapTitleContent,
  RatingWrapContent,
  SpinnerContainer,
  LinkStyled,
} from './FavoriteList.styled';

export const FavoriteList = () => {
  const { favoriteProduct, isLoading, idProductsBasket } =
    useSelector(getFavoriteBasket);
  const dispatch = useDispatch();

  const handleDeleteFavoriteProduct = id => {
    dispatch(deleteFavoriteSlice(id));
    dispatch(findIndexProduct(id));
  };

  const handleClickBasketBtn = id => {
    if (findProductToBasket(idProductsBasket, id)) {
      dispatch(findIndexBasketProduct(id));
      return dispatch(deleteBasketSlice(id));
    }
    dispatch(addBasketProduct(id));
    dispatch(findIndexBasketProduct(id));
  };

  return isLoading ? (
    <SpinnerContainer>
      <Spinner variant="light" animation="grow" />
    </SpinnerContainer>
  ) : (
    <Container>
      <LinkStyled to="/">
        <MdOutlineArrowBackIosNew />
      </LinkStyled>

      {favoriteProduct.map(({ id, thumbnail, price, rating, title }) => (
        <WrapCard key={id}>
          <ImgThumb>
            <ImgProduct src={thumbnail} />
            <PriceTitle>{price}$</PriceTitle>
            <BtnDelete
              onClick={() => handleDeleteFavoriteProduct(id)}
              type="button"
            >
              <TiDeleteOutline size={24} color="#b84949" />
            </BtnDelete>
          </ImgThumb>
          <WrapTitleContent>
            <RatingWrapContent>
              <Title>{rating}</Title>
              <ImStarEmpty color=" #f4f480" />
            </RatingWrapContent>
            <Title>{title}</Title>
            <Button
              onClick={() => handleClickBasketBtn(id)}
              type="button"
              variant={
                findProductToBasket(idProductsBasket, id)
                  ? 'outline-danger'
                  : 'outline-dark'
              }
            >
              {findProductToBasket(idProductsBasket, id)
                ? 'Delete'
                : ' Add to Basket'}
            </Button>
          </WrapTitleContent>
        </WrapCard>
      ))}
    </Container>
  );
};
