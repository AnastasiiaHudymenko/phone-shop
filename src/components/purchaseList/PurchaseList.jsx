import { Map, Marker } from 'pigeon-maps';
import { useSelector } from 'react-redux';
import { getFavoriteBasket } from 'redux/selectors';
import { Badge } from 'react-bootstrap';
import { IoPricetagsOutline } from 'react-icons/io5';
import { PurchaseForm } from 'components/purchaseForm/PurchaseForm';
import {
  WrapMap,
  InfoWindow,
  PickupTitle,
  ItemProduct,
  TitleProduct,
  PriceProduct,
  ListProduct,
  ThumbImg,
  Container,
  WrapContent,
  WrapIcon,
  TitleGoods,
} from './PurchaseList.styled';

export const PurchaseList = () => {
  const { basketProduct } = useSelector(getFavoriteBasket);

  return (
    <>
      <Container>
        <TitleGoods>
          {' '}
          <Badge bg="dark"> Your goods</Badge>
        </TitleGoods>
        <ListProduct>
          {basketProduct.map(({ id, title, price, thumbnail }) => (
            <ItemProduct key={id}>
              <WrapContent>
                <ThumbImg>
                  <img width={40} src={thumbnail} alt={title} />
                </ThumbImg>
                <TitleProduct>{title}</TitleProduct>
              </WrapContent>
              <WrapIcon>
                <IoPricetagsOutline color="#198754" size={20} />
                <PriceProduct>
                  <Badge bg="dark"> {price}$</Badge>
                </PriceProduct>
              </WrapIcon>
            </ItemProduct>
          ))}
        </ListProduct>
      </Container>
      <div>
        <Container>
          <TitleGoods>
            <Badge bg="dark">Form Checkout</Badge>
          </TitleGoods>
          <div>
            <WrapMap>
              <Map
                height={250}
                defaultCenter={[50.521327, 30.4462625]}
                defaultZoom={12}
              >
                <Marker width={50} anchor={[50.521327, 30.4462625]} />
                <InfoWindow>
                  <PickupTitle>Pickup from Kondratyuk 3</PickupTitle>
                </InfoWindow>
              </Map>
            </WrapMap>
            <div>
              <PurchaseForm />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
