import styled from 'styled-components';
import { IUsersListBadgeProps } from './UsersListBadge';

export const Wrapper = styled.div<IUsersListBadgeProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.4rem;
  height: 3.4rem;
  background: ${({ theme, score }) => {
    if (score > 4) return theme.colors.success;
    if (score > 3) return theme.colors.warning;
    if (score > 2) return theme.colors.error;
    return theme.colors.grey;
  }};
  border-radius: 1.7rem;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.white};
`;
