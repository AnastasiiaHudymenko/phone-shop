import { useSelector, useDispatch } from 'react-redux';
import { getProductDetalis, getFavoriteBasket } from 'redux/selectors';
import { findProductToBasket } from 'components/auxiliary/findProductBasket';
import { Link, useLocation } from 'react-router-dom';
import {
  addBasketProduct,
  findIndexBasketProduct,
  deleteBasketSlice,
} from 'redux/favoriteBasketSlice';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import { IoPricetagsOutline } from 'react-icons/io5';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { VscStarFull } from 'react-icons/vsc';
import { Spinner, Badge, Card, Button } from 'react-bootstrap';
import {
  Img,
  CarouselStyled,
  ContainerBtn,
  SpinnerContainer,
  ContainerContentDesk,
  WrapIcon,
  ContainerAllIcons,
  Container,
  TitleProduct,
} from './ProductDetalisMarkup.styled';

export const ProductDetalisMarkup = () => {
  const location = useLocation();
  const { product, isLoading } = useSelector(getProductDetalis);
  const { idProductsBasket } = useSelector(getFavoriteBasket);
  const dispatch = useDispatch();

  const handleClickBasketBtn = id => {
    if (findProductToBasket(idProductsBasket, id)) {
      dispatch(findIndexBasketProduct(id));
      return dispatch(deleteBasketSlice(id));
    }
    dispatch(addBasketProduct(id));
    dispatch(findIndexBasketProduct(id));
  };

  if (!product.id) {
    return (
      <SpinnerContainer>
        <Spinner variant="light" animation="grow" />
      </SpinnerContainer>
    );
  }
  return isLoading ? (
    <SpinnerContainer>
      <Spinner variant="light" animation="grow" />
    </SpinnerContainer>
  ) : (
    <Container>
      <Link to={location.state.from}>
        <MdOutlineArrowBackIosNew />
      </Link>
      <TitleProduct>
        <Badge bg="dark">{product.title}</Badge>
      </TitleProduct>

      <CarouselStyled>
        {product.images.length > 0 &&
          product.images.map((srcImg, i) => (
            <CarouselStyled.Item key={i}>
              <Img className="d-block w-100" src={srcImg} alt="First slide" />
            </CarouselStyled.Item>
          ))}
      </CarouselStyled>
      <ContainerContentDesk>
        <h5>
          Category: <Badge bg="dark">{product.category}</Badge>
        </h5>
        <h5>
          Brand: <Badge bg="dark"> {product.brand}</Badge>
        </h5>
        <Card body>Description: {product.description}</Card>
        <ContainerAllIcons>
          <WrapIcon>
            <IoPricetagsOutline color="#198754" size={24} />
            <Badge bg="success"> {product.price}$</Badge>
          </WrapIcon>
          <WrapIcon>
            <BsFillCheckCircleFill size={24} color="#0dcaf0" />
            <Badge bg="info"> Stock: {product.stock}</Badge>
          </WrapIcon>
          <WrapIcon>
            <VscStarFull color="#ffc107" size={24} />
            <Badge bg="warning" text="dark">
              {product.rating}
            </Badge>
          </WrapIcon>
        </ContainerAllIcons>
      </ContainerContentDesk>
      <ContainerBtn>
        <Button
          onClick={() => handleClickBasketBtn(product.id)}
          type="button"
          variant={
            findProductToBasket(idProductsBasket, product.id)
              ? 'outline-danger'
              : 'outline-dark'
          }
        >
          {findProductToBasket(idProductsBasket, product.id)
            ? 'Delete'
            : ' Add to Basket'}
        </Button>
      </ContainerBtn>
    </Container>
  );
};
