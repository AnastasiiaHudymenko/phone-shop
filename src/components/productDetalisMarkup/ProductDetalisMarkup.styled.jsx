import styled from 'styled-components';
import { Carousel } from 'react-bootstrap';

export const Img = styled.img`
  object-fit: cover;
  height: 250px;

  @media screen and (min-width: 600px) {
    height: 400px;
  }

  @media screen and (min-width: 1000px) {
    object-fit: contain;
  }
`;

export const CarouselStyled = styled(Carousel)``;

export const ContainerBtn = styled.div`
  margin-top: 20px;
`;
export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const ContainerContentDesk = styled.div`
  margin-top: 20px;
`;

export const WrapIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
export const ContainerAllIcons = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
`;
