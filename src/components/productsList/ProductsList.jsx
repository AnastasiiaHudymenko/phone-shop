import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AiOutlineHeart } from 'react-icons/ai';
import { SlBasket } from 'react-icons/sl';
import { Button, Card, Badge } from 'react-bootstrap';
import {
  List,
  WrapContent,
  CardImgStyled,
  CardStyled,
  CardTitleStyled,
  ContainerByBadgeAndIcon,
  WrapIcons,
} from './ProductsList.styled';

export const ProductsList = () => {
  const { products } = useSelector(state => state.products);
  return (
    <List>
      {products.map(({ id, brand, thumbnail, price, title }) => (
        <li key={id}>
          <CardStyled style={{ width: '18rem' }}>
            <CardImgStyled variant="top" src={thumbnail} alt={title} />
            <Card.Body>
              <CardTitleStyled>{title}</CardTitleStyled>
              <ContainerByBadgeAndIcon>
                <WrapContent>
                  <Badge bg="dark">{brand}</Badge>
                  <Badge bg="dark">{price} $</Badge>
                </WrapContent>
                <WrapIcons>
                  <AiOutlineHeart />
                  <SlBasket />
                </WrapIcons>
              </ContainerByBadgeAndIcon>
              <Link to={`product/${id}`}>
                <Button variant="outline-dark">More Info</Button>
              </Link>
            </Card.Body>
          </CardStyled>
        </li>
      ))}
    </List>
  );
};
