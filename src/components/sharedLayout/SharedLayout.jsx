import { Container, Navbar } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  NavBarStyled,
  LinkStyled,
  BtnIcon,
  NavStyled,
  SupStyled,
} from './SharedLayout.styled';
import { AiOutlineHeart } from 'react-icons/ai';
import { SlBasket } from 'react-icons/sl';

export const SharedLayout = () => {
  const favorites = useSelector(state => state.favorite.idProducts);

  const basket = useSelector(state => state.favorite.idProductsBasket);

  const getFavoritesCount = () => {
    return favorites.length;
  };

  const getBasketCount = () => {
    return basket.length;
  };

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>
            <LinkStyled to="/">QPICK</LinkStyled>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <NavBarStyled id="basic-navbar-nav">
            <NavStyled>
              <LinkStyled to="/basket">
                <BtnIcon type="button">
                  <SlBasket
                    size={26}
                    color={getBasketCount() >= 1 ? 'rgb(154 206 155)' : 'grey'}
                  />
                  <SupStyled>{getBasketCount()}</SupStyled>
                </BtnIcon>
              </LinkStyled>
              <LinkStyled to="/favorites">
                <BtnIcon type="button">
                  <AiOutlineHeart
                    size={26}
                    color={getFavoritesCount() >= 1 ? '#f27373' : 'grey'}
                  />
                  <SupStyled>{getFavoritesCount()}</SupStyled>
                </BtnIcon>
              </LinkStyled>
            </NavStyled>
          </NavBarStyled>
        </Container>
      </Navbar>
      <Container>
        <Outlet />
      </Container>
    </>
  );
};