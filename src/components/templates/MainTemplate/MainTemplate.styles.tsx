import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 80px 1fr;
  grid-template-columns: 150px 1fr 0.6fr;
  width: 100%;
  min-height: 100%;
  background-color: ${({ theme }) => theme.colors.lightGrey};
`;
