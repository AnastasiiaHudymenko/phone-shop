import { Map, Marker } from 'pigeon-maps';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductBasketDetalise } from 'redux/operations';
import { clearBasketProduct } from 'redux/favoriteBasketSlice';
import { getFavoriteBasket } from 'redux/selectors';
import { Badge, Button } from 'react-bootstrap';
import { IoPricetagsOutline } from 'react-icons/io5';
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
  MainContainer,
  InputStyled,
  SelectStyled,
  FormStyled,
} from './PurchaseList.styled';

export const PurchaseList = () => {
  const [deliveryType, setDeliveryType] = useState('');

  const isDisabled = deliveryType !== 'address';

  const handleDeliveryChange = event => {
    setDeliveryType(event.target.value);
  };
  const { idProductsBasket, basketProduct, isLoading } =
    useSelector(getFavoriteBasket);
  const dispatch = useDispatch();
  useEffect(() => {
    idProductsBasket.map(id => dispatch(fetchProductBasketDetalise(id)));

    return () => {
      dispatch(clearBasketProduct());
    };
  }, [dispatch, idProductsBasket]);

  return (
    !isLoading && (
      <MainContainer>
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
                <FormStyled>
                  <TitleGoods>
                    {' '}
                    <Badge bg="dark">Choose a shipping method:</Badge>
                  </TitleGoods>
                  <div>
                    <label>
                      <SelectStyled
                        value={deliveryType}
                        onChange={handleDeliveryChange}
                      >
                        <option value="">--Choose method--</option>
                        <option value="pickup">Pickup</option>
                        <option value="address">Address</option>
                      </SelectStyled>
                    </label>
                  </div>
                  <InputStyled
                    placeholder="Your name"
                    type="text"
                    name="name"
                    disabled={isDisabled}
                  />
                  <InputStyled
                    placeholder="Your last name"
                    type="text"
                    name="sureName"
                    disabled={isDisabled}
                  />
                  <InputStyled
                    placeholder="Your phone"
                    type="tel"
                    name="phone"
                    disabled={isDisabled}
                  />
                  <InputStyled
                    placeholder="Your addres"
                    name="addresUser"
                    disabled={isDisabled}
                  />
                  <TitleGoods>
                    <Badge bg="success">To pay: 1000$</Badge>
                  </TitleGoods>
                  <Button type="submit" variant="outline-dark">
                    Send
                  </Button>
                </FormStyled>
              </div>
            </div>
          </Container>
        </div>
      </MainContainer>
    )
  );
};
