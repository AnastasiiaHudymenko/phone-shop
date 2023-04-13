import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 30px;

  @media screen and (min-width: 400px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const TitleEmptyFavorite = styled.p`
  margin: 0;
`;

export const LinkStyled = styled(Link)`
  position: absolute;
  top: -31px;
  left: -6px;
`;
export const ImgProduct = styled.img`
  height: 230px;
  object-fit: cover;
  width: 330px;
`;

export const ImgThumb = styled.div`
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  border-bottom: 1px solid #fcfbfb;
`;

export const PriceTitle = styled.p`
  position: absolute;
  bottom: 0;
  color: #4d68cd;
  left: 10px;
  margin: 0;
  font-weight: 600;
`;

export const Title = styled.p`
  color: rgb(77, 104, 205);
  font-weight: 600;
  margin-bottom: 6px;
`;

export const BtnDelete = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  margin: 0;
  padding: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const WrapCard = styled.div`
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid #e6dddd;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out;
  background-color: #fff;
  :hover {
    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  }
`;

export const WrapTitleContent = styled.div`
  padding: 10px;
`;

export const RatingWrapContent = styled.div`
  display: flex;

  align-items: center;
  gap: 10px;
`;
export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
