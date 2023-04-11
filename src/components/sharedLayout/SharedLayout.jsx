import { Container, Navbar } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getFavoriteBasket } from 'redux/selectors';
import {
  NavBarStyled,
  LinkStyled,
  BtnIcon,
  NavStyled,
  SupStyled,
  NavBarMainStyled,
  ContainerStyled,
} from './SharedLayout.styled';
import { AiOutlineHeart } from 'react-icons/ai';
import { SlBasket } from 'react-icons/sl';

export const SharedLayout = () => {
  const { idProductsBasket, idProducts } = useSelector(getFavoriteBasket);

  const getFavoritesCount = () => {
    return idProducts.length;
  };

  const getBasketCount = () => {
    return idProductsBasket.length;
  };

  return (
    <>
      <NavBarMainStyled bg="light" expand="lg">
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
      </NavBarMainStyled>
      <ContainerStyled>
        <Outlet />
      </ContainerStyled>
    </>
  );
};
