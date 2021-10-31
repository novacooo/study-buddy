import styled from 'styled-components';

export const Wrapper = styled.div`
  justify-self: center;
  align-self: center;
  padding: 20px 30px;
  width: 100%;
  max-width: 500px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 25px;
  box-shadow: 0 5px 15px -10px hsla(0, 0%, 0%, 0.3);
`;
