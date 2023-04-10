import { useSelector, useDispatch } from 'react-redux';
import { TiDeleteOutline } from 'react-icons/ti';
import { ImStarEmpty } from 'react-icons/im';
import { deleteFavoriteSlice, findIndexProduct } from 'redux/favoriteSlice';
import {
  Container,
  ImgProduct,
  ImgThumb,
  PriceTitle,
  Title,
  BtnDelete,
  WrapCard,
  WrapTitleContent,
  RatingWrapContent,
} from './FavoriteList.styled';

export const FavoriteList = () => {
  const { favoriteProduct } = useSelector(state => state.favorite);
  const dispatch = useDispatch();

  const handleDeleteFavoriteProduct = id => {
    dispatch(deleteFavoriteSlice(id));
    dispatch(findIndexProduct(id));
  };
  return (
    <Container>
      {favoriteProduct.map(el => (
        <WrapCard key={el.id}>
          <ImgThumb>
            <ImgProduct src={el.thumbnail} />
            <PriceTitle>{el.price}$</PriceTitle>
            <BtnDelete
              onClick={() => handleDeleteFavoriteProduct(el.id)}
              type="button"
            >
              <TiDeleteOutline size={24} color="#b84949" />
            </BtnDelete>
          </ImgThumb>
          <WrapTitleContent>
            <RatingWrapContent>
              <Title>{el.rating}</Title>
              <ImStarEmpty color=" #f4f480" />
            </RatingWrapContent>
            <Title>{el.title}</Title>
          </WrapTitleContent>
        </WrapCard>
      ))}
    </Container>
  );
};
