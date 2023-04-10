import styled from 'styled-components';
import { Carousel } from 'react-bootstrap';

export const Img = styled.img`
  object-fit: cover;
  height: 250px;

  @media screen and (min-width: 600px) {
    height: 400px;
  }
`;

export const CarouselStyled = styled(Carousel)`
  overflow: hidden;
  border-radius: 20px;
  border-radius: 20px;
`;

export const ContainerBtn = styled.div`
  position: fixed;
  bottom: 10px;
`;
export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
