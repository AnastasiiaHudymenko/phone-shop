import { useSelector } from 'react-redux';
import { TiDeleteOutline } from 'react-icons/ti';
import {
  Container,
  ImgProduct,
  ImgThumb,
  PriceTitle,
  Title,
  BtnDelete,
} from './FavoriteList.styled';

export const FavoriteList = () => {
  const { favoriteProduct } = useSelector(state => state.favorite);
  return (
    <Container>
      {favoriteProduct.map(el => (
        <div key={el.id}>
          <ImgThumb>
            <ImgProduct src={el.thumbnail} />
            <PriceTitle>{el.price}$</PriceTitle>
            <BtnDelete type="button">
              <TiDeleteOutline size={24} color="#b84949" />
            </BtnDelete>
          </ImgThumb>
          <Title>{el.title}</Title>
        </div>
      ))}
    </Container>
  );
};
