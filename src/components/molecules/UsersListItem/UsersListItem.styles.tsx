import styled from 'styled-components';
import UsersListText from 'components/atoms/UsersListText/UsersListText';
import UsersListButton from 'components/atoms/UsersListButton/UsersListButton';

export const Wrapper = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  padding: 25px 0;

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.border};
  }
`;

export const StyledText = styled(UsersListText)`
  margin-left: 25px;
`;

export const StyledButton = styled(UsersListButton)`
  margin-left: 15px;
`;
