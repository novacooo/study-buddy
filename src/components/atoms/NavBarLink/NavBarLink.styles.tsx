import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Rectangle = styled.div`
  width: 22px;
  height: 3px;
  background-color: ${({ theme }) => theme.colors.lightGrey};
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 5px;
  width: 100%;
  text-decoration: none;

  &.active ${Rectangle} {
    background-color: ${({ theme }) => theme.colors.border};
  }
`;

export const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.darkGrey};
`;
