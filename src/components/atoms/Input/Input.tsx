import styled from 'styled-components';

export const Input = styled.input`
  padding: 5px 8px;
  border: 1px solid ${({ theme }) => theme.colors.lightPurple};
  box-sizing: border-box;
  border-radius: 25px;

  &:focus {
    box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.12);
  }
`;
