import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 20px 30px;
  width: 100%;
  max-width: 500px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 25px;
  box-shadow: 0 5px 15px -10px hsla(0, 0%, 0%, 0.3);
`;

export const StyledList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const LoadingText = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.darkGrey};
`;
