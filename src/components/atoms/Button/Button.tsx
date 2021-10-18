import styled from 'styled-components';

const Button = styled.button`
  padding: 8px 24px;
  background-color: ${({ theme }) => theme.colors.buttonBg};
  border: none;
  border-radius: 100px;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.darkGrey};

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.buttonBgHover};
  }
`;

export default Button;
