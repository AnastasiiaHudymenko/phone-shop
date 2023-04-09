import styled from 'styled-components';
import { Carousel } from 'react-bootstrap';
import { Dropdown, DropdownButton } from 'react-bootstrap';

export const Img = styled.img`
  object-fit: contain;
  height: 250px;

  @media screen and (min-width: 600px) {
    height: 400px;
  }
`;

export const CarouselStyled = styled(Carousel)``;

export const ContainerDropDown = styled.div`
  display: flex;
  justify-content: center;
`;

export const DropdownStyled = styled(Dropdown)`
  padding-left: 10px;
  padding-right: 10px;
`;

export const DropBtnStyled = styled(DropdownButton)`
  width: 340px;

  @media screen and (min-width: 600px) {
    width: 550px;
  }
`;
export const ContainerBtn = styled.div`
  position: fixed;
  bottom: 10px;
`;
