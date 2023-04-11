import styled from 'styled-components';
import { Card, Badge } from 'react-bootstrap';

export const BadgeStyled = styled(Badge)`
  margin-bottom: 16px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
  justify-content: center;

  @media screen and (min-width: 600px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const WrapContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  flex-direction: column;
  align-items: baseline;
`;

export const CardImgStyled = styled(Card.Img)`
  height: 190px;
  object-fit: cover;
  border-bottom: 1px solid #eaeaea;
`;

export const CardStyled = styled(Card)`
  min-height: 300px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out;
  :hover {
    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  }
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

export const BtnFavorite = styled.button`
  margin: 0;
  padding: 0;
  display: contents;
`;

export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
