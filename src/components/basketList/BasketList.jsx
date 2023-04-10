import { useSelector, useDispatch } from 'react-redux';
import { TiDeleteOutline } from 'react-icons/ti';
import { ImStarEmpty } from 'react-icons/im';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import { deleteBasketSlice, findIndexBasketProduct } from 'redux/favoriteSlice';
import Spinner from 'react-bootstrap/Spinner';
import imgBg from 'images/Illustration.png';
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
} from './BasketList.styled';

export const BasketList = () => {
  const { basketProduct, isLoading } = useSelector(state => state.favorite);
  const dispatch = useDispatch();

  const handleDeleteBasketProduct = id => {
    dispatch(deleteBasketSlice(id));
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

      {basketProduct.map(el => (
        <WrapCard key={el.id}>
          <ImgThumb>
            <ImgProduct src={el.thumbnail} />
            <PriceTitle>{el.price}$</PriceTitle>
            <BtnDelete
              onClick={() => handleDeleteBasketProduct(el.id)}
              type="button"
            >
              <TiDeleteOutline size={24} color="#b84949" />
            </BtnDelete>
          </ImgThumb>
          <WrapTitleContent>
            <RatingWrapContent>
              <Title>{el.rating}</Title>
              <ImStarEmpty color=" #f4f480" />
            </RatingWrapContent>
            <Title>{el.title}</Title>
          </WrapTitleContent>
        </WrapCard>
      ))}
    </Container>
  );
};
