import { Map, Marker } from 'pigeon-maps';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getFavoriteBasket } from 'redux/selectors';
import { Badge, Modal, Button } from 'react-bootstrap';
import { IoPricetagsOutline } from 'react-icons/io5';
import { BsCheckCircleFill } from 'react-icons/bs';
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
  ContainerEmptyBasket,
  ContainerBtn,
  ContainerWrap,
} from './PurchaseList.styled';
import imgBg from 'images/Illustration.png';

export const PurchaseList = () => {
  const [smShow, setSmShow] = useState(true);
  const { basketProduct } = useSelector(getFavoriteBasket);

  return basketProduct.length === 0 ? (
    <>
      <ContainerEmptyBasket>
        <img src={imgBg} alt="empty basket" />
      </ContainerEmptyBasket>
      <Modal
        size="lg"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Successfully <BsCheckCircleFill color="#198754" />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Your order has been placed, the manager will contact you soon.
        </Modal.Body>
      </Modal>
    </>
  ) : (
    <ContainerWrap>
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

      <Container>
        <div>
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
        </div>
      </Container>
    </ContainerWrap>
  );
};
