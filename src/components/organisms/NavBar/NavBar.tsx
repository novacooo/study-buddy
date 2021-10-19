import NavBarLink from 'components/atoms/NavBarLink/NavBarLink';
import React from 'react';
import { LogoWrapper, NavWrapper, Wrapper } from './NavBar.styles';

const NavBar = () => (
  <Wrapper>
    <LogoWrapper>
      Study
      <br />
      Buddy
    </LogoWrapper>
    <NavWrapper>
      <NavBarLink to="/">Dashboard</NavBarLink>
      <NavBarLink to="/add-user">Add user</NavBarLink>
    </NavWrapper>
  </Wrapper>
);

export default NavBar;
