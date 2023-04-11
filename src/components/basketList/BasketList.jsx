import { useSelector, useDispatch } from 'react-redux';
import { getFavoriteBasket } from 'redux/selectors';
import { Link } from 'react-router-dom';
import { TiDeleteOutline } from 'react-icons/ti';
import { ImStarEmpty } from 'react-icons/im';
import { CiCircleMinus, CiCirclePlus } from 'react-icons/ci';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import {
  deleteBasketSlice,
  findIndexBasketProduct,
} from 'redux/favoriteBasketSlice';
import { Spinner, Button } from 'react-bootstrap';
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
  ContainerBtn,
  ContainerCard,
  ContainerBtnSend,
} from './BasketList.styled';

export const BasketList = () => {
  const { basketProduct, isLoading } = useSelector(getFavoriteBasket);
  const dispatch = useDispatch();
  let countProduct = 1;

  const handleDeleteBasketProduct = id => {
    dispatch(deleteBasketSlice(id));
    dispatch(findIndexBasketProduct(id));
  };

  const handleClickBtnIncrement = productId => {
    console.log('Click', productId);
  };

  return isLoading ? (
    <SpinnerContainer>
      <Spinner variant="light" animation="grow" />
    </SpinnerContainer>
  ) : basketProduct.length === 0 ? (
    <Container>
      <img src={imgBg} alt="" />

      <ContainerBtn>
        <p>Cart is empty...</p>
        <Link to="/">
          <Button variant="outline-dark">Back to product</Button>
        </Link>
      </ContainerBtn>
    </Container>
  ) : (
    <Container>
      <LinkStyled to="/">
        <MdOutlineArrowBackIosNew />
      </LinkStyled>
      <ContainerCard>
        {basketProduct.map(({ id, thumbnail, price, rating, title }) => (
          <WrapCard key={id}>
            <ImgThumb>
              <ImgProduct src={thumbnail} />
              <PriceTitle>{price}$</PriceTitle>
              <BtnDelete
                onClick={() => handleDeleteBasketProduct(id)}
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
            </WrapTitleContent>
            <button onClick={() => handleClickBtnIncrement(id)} type="button">
              <CiCirclePlus />
            </button>
            <span>{countProduct}</span>
            <button type="button">
              <CiCircleMinus />
            </button>
          </WrapCard>
        ))}
      </ContainerCard>
      <ContainerBtnSend>
        <Link to="/purchase">
          <Button variant="outline-dark">Proceed to Checkout</Button>
        </Link>
      </ContainerBtnSend>
    </Container>
  );
};
