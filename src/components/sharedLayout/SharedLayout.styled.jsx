import styled from 'styled-components';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const ContainerStyled = styled(Container)`
  padding-top: 86px;
`;
export const NavBarStyled = styled(Navbar.Collapse)`
  justify-content: end;
`;

export const LinkStyled = styled(Link)`
  color: #212121;
  text-decoration: none;
`;

export const BtnIcon = styled(Button)`
  display: flex;
  align-items: center;
`;

export const NavStyled = styled(Nav)`
  gap: 10px;
  flex-direction: row;
`;

export const SupStyled = styled.sup`
  margin-left: 5px;
  color: grey;
`;

export const NavBarMainStyled = styled(Navbar)`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  border-bottom: 1px solid #e5e5e5;
  box-shadow: 0px 5px 5px -5px rgba(34, 60, 80, 0.6);
`;
