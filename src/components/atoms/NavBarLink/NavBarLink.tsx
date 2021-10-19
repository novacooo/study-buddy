import React from 'react';
import { Rectangle, StyledNavLink, Text } from './NavBarLink.styles';

interface INavBarLinkProps {
  to: string;
  children: string;
}

const NavBarLink = ({ to, children }: INavBarLinkProps) => (
  <StyledNavLink exact to={to} activeClassName="active">
    <Text>{children}</Text>
    <Rectangle />
  </StyledNavLink>
);

export default NavBarLink;
