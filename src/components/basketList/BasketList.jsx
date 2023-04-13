import { useSelector, useDispatch } from 'react-redux';
import { getFavoriteBasket } from 'redux/selectors';
import { Link } from 'react-router-dom';
import { TiDeleteOutline } from 'react-icons/ti';
import { ImStarEmpty } from 'react-icons/im';
import { MdShoppingBasket, MdOutlineArrowBackIosNew } from 'react-icons/md';
import {
  deleteBasketSlice,
  findIndexBasketProduct,
} from 'redux/favoriteBasketSlice';
import { Button, Badge } from 'react-bootstrap';
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
  LinkStyled,
  ContainerBtn,
  ContainerCard,
  ContainerBtnSend,
  ButtonStyled,
  LinkStyledBtn,
  ContainerList,
} from './BasketList.styled';

export const BasketList = () => {
  const { basketProduct } = useSelector(getFavoriteBasket);
  const dispatch = useDispatch();

  const handleDeleteBasketProduct = id => {
    dispatch(deleteBasketSlice(id));
    dispatch(findIndexBasketProduct(id));
  };

  const totalPriceProduct = () => {
    return basketProduct.reduce((acc, el) => {
      acc += el.price;
      return acc;
    }, 0);
  };

  return basketProduct.length === 0 ? (
    <Container>
      <img src={imgBg} alt="empty basket" />

      <ContainerBtn>
        <p>Cart is empty...</p>
        <Link to="/">
          <Button variant="outline-dark">Back to product</Button>
        </Link>
      </ContainerBtn>
    </Container>
  ) : (
    <ContainerList>
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
          </WrapCard>
        ))}
      </ContainerCard>
      <ContainerBtnSend>
        <h5>
          Total price: <Badge bg="dark">{totalPriceProduct()}$</Badge>
        </h5>
        <LinkStyledBtn to="/purchase">
          <ButtonStyled variant="outline-dark">
            Checkout <MdShoppingBasket color="#198754" size={22} />
          </ButtonStyled>
        </LinkStyledBtn>
      </ContainerBtnSend>
    </ContainerList>
  );
};
