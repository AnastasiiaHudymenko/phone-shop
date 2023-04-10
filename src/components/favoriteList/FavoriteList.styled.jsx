import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media screen and (min-width: 400px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;
export const ImgProduct = styled.img`
  height: 230px;
  object-fit: cover;
  width: 330px;
`;

export const ImgThumb = styled.div`
  position: relative;
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
  margin-top: 10px;
  color: rgb(77, 104, 205);
  font-weight: 600;
  margin-bottom: 0;
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
