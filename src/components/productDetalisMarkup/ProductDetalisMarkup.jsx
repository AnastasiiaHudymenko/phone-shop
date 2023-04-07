import { DropdownButton, ButtonGroup } from 'react-bootstrap';
import {
  Img,
  CarouselStyled,
  ContainerDropDown,
  DropdownStyled,
  DropBtnStyled,
} from './ProductDetalis.styled';

export const ProductDetalisMarkup = ({ product }) => {
  return (
    <>
      {product.length === 0 ? (
        <div>Not found</div>
      ) : (
        <CarouselStyled>
          {product.images.length > 0 &&
            product.images.map((srcImg, i) => (
              <CarouselStyled.Item key={i}>
                <Img className="d-block w-100" src={srcImg} alt="First slide" />
              </CarouselStyled.Item>
            ))}
        </CarouselStyled>
      )}
      <ContainerDropDown>
        <DropdownButton
          size="lg"
          as={ButtonGroup}
          title="Description and characteristics"
          id="bg-vertical-dropdown-1"
        >
          <DropdownStyled eventKey="1">
            {' '}
            <b>Brand</b> : {product.brand}
          </DropdownStyled>
          <DropdownStyled eventKey="2">
            <b>Description</b> {product.description}
          </DropdownStyled>
        </DropdownButton>
      </ContainerDropDown>
    </>
  );
};
