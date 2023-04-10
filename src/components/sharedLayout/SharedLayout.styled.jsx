import styled from 'styled-components';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const NavBarStyled = styled(Navbar.Collapse)`
  justify-content: end;
`;

export const LinkStyled = styled(Link)`
  color: #212121;
  text-decoration: none;
`;

export const BtnIcon = styled.button`
  display: contents;
`;

export const NavStyled = styled(Nav)`
  gap: 10px;
  flex-direction: row;
`;

export const SupStyled = styled.sup`
  margin-left: 5px;
  color: grey;
`;
