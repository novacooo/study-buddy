import styled from 'styled-components';

const Button = styled.button`
  padding: 7px 24px;
  background-color: ${({ theme }) => theme.colors.buttonBg};
  border: 1px solid ${({ theme }) => theme.colors.buttonBg};
  border-radius: 100px;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.darkGrey};

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.buttonBgHover};
    border: 1px solid ${({ theme }) => theme.colors.buttonBgHover};
  }

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.lightPurple};
    box-shadow: ${({ theme }) => theme.shadows.outline};
  }
`;

export default Button;
