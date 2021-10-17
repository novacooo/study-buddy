import styled from 'styled-components';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete.svg';

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 25px;
  height: 25px;
  background-color: ${({ theme }) => theme.colors.grey};
  border: none;
  border-radius: 50px;
  color: ${({ theme }) => theme.colors.white};

  &:hover {
    cursor: pointer;
  }
`;

export const StyledDeleteIcon = styled(DeleteIcon)`
  width: 15px;
  height: 15px;
  fill: ${({ theme }) => theme.colors.white};
`;
