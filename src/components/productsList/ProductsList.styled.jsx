import styled from 'styled-components';
import { Card } from 'react-bootstrap';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 20px;

  @media screen and (min-width: 600px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const WrapContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  flex-direction: column;
  align-items: baseline;
  gap: 10px;
`;

export const CardImgStyled = styled(Card.Img)`
  height: 190px;
  object-fit: cover;
  border-bottom: 1px solid #eaeaea;
`;

export const CardStyled = styled(Card)`
  min-height: 300px;
`;

export const CardTitleStyled = styled(Card.Title)`
  font-size: 1rem;
`;

export const ContainerByBadgeAndIcon = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const WrapIcons = styled.div`
  display: flex;
  gap: 20px;
  cursor: pointer;
`;
