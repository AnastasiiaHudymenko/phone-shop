import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import Spinner from 'react-bootstrap/Spinner';
import {
  Img,
  CarouselStyled,
  ContainerBtn,
  SpinnerContainer,
} from './ProductDetalisMarkup.styled';

export const ProductDetalisMarkup = () => {
  const location = useLocation();
  const { product, isLoading } = useSelector(state => state.productDetalis);

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
    <>
      <Link to={location.state.from}>
        <MdOutlineArrowBackIosNew />
      </Link>
      <CarouselStyled>
        {product.images.length > 0 &&
          product.images.map((srcImg, i) => (
            <CarouselStyled.Item key={i}>
              <Img className="d-block w-100" src={srcImg} alt="First slide" />
            </CarouselStyled.Item>
          ))}
      </CarouselStyled>
      <ContainerBtn>
        <button>Basket</button>
        <Link to={`purchase`}>
          <button type="button">Buy</button>
        </Link>
      </ContainerBtn>
    </>
  );
};
