import styled from 'styled-components';

export const Input = styled.input`
  padding: 5px 8px;
  border: 1px solid ${({ theme }) => theme.colors.lightPurple};
  box-sizing: border-box;
  border-radius: 25px;

  &:focus {
    box-shadow: ${({ theme }) => theme.shadows.outline};
  }
`;
