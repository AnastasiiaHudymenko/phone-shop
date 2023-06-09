import styled from 'styled-components';

export const WrapMap = styled.div`
  border-radius: 20px;
  overflow: hidden;
  position: relative;
`;

export const InfoWindow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 0 5px;
  background-color: rgb(245 222 179 / 70%);
  border-radius: 5px;
  border-top-left-radius: 0;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);
`;
export const PickupTitle = styled.p`
  margin: 0;
  font-size: 12px;
  font-style: italic;
`;

export const Container = styled.div`
  width: 100%;
  background-color: white;
  padding: 20px;
  border-radius: 26px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);

  @media screen and (min-width: 901px) {
    width: 50%;
  }
`;

export const ContainerEmptyBasket = styled.div`
  position: relative;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const ContainerBtn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ListProduct = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const WrapContent = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const WrapIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
`;

export const ItemProduct = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #efe7e7;
  padding: 8px;
`;

export const ThumbImg = styled.div`
  border-radius: 10px;
  overflow: hidden;
`;

export const TitleProduct = styled.p`
  margin: 0;
`;

export const PriceProduct = styled.p`
  margin: 0;
`;

export const TitleGoods = styled.h3`
  font-size: 18px;
  font-style: italic;
  margin-bottom: 20px;
`;

export const ContainerWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;
  gap: 20px;

  @media screen and (min-width: 901px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: baseline;
    gap: 20px;
  }
`;
