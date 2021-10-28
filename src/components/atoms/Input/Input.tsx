import styled from 'styled-components';

const Input = styled.input`
  padding: 5px 8px;
  border: 1px solid ${({ theme }) => theme.colors.lightPurple};
  box-sizing: border-box;
  border-radius: 25px;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.darkGrey};

  &:focus {
    box-shadow: ${({ theme }) => theme.shadows.outline};
  }
`;

export default Input;
