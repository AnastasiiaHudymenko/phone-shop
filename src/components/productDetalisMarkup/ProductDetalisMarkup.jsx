import { DropdownButton, ButtonGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import {
  Img,
  CarouselStyled,
  ContainerDropDown,
  DropdownStyled,
  ContainerBtn,
} from './ProductDetalisMarkup.styled';

export const ProductDetalisMarkup = () => {
  const location = useLocation();
  const { product } = useSelector(state => state.productDetalis);

  if (!product.id) {
    return <div>Loading...</div>;
  }
  return (
    <>
      {' '}
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
      <ContainerDropDown>
        <DropdownButton
          size="lg"
          as={ButtonGroup}
          title="Description and characteristics"
          id="bg-vertical-dropdown-1"
        >
          <DropdownStyled eventKey="1">
            <b>Category</b>: {product.category}
          </DropdownStyled>
          <DropdownStyled eventKey="2">
            {' '}
            <b>Brand</b> : {product.brand}
          </DropdownStyled>
          <DropdownStyled eventKey="3">
            <b>Title</b>: {product.title}
          </DropdownStyled>
          <DropdownStyled eventKey="4">
            <b>Description</b>: {product.description}.
          </DropdownStyled>
          <DropdownStyled eventKey="4">
            <b>Price</b>: {product.price}$
          </DropdownStyled>
          <DropdownStyled eventKey="5">
            <b>Rating</b>: {product.rating}
          </DropdownStyled>
          <DropdownStyled eventKey="6">
            <b>Stock</b>: {product.stock}
          </DropdownStyled>
        </DropdownButton>
      </ContainerDropDown>
      <ContainerBtn>
        <button>Basket</button>
        <Link to={`purchase`}>
          <button type="button">Buy</button>
        </Link>
      </ContainerBtn>
    </>
  );
};
