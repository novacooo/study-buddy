import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  min-height: 100%;
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100%;
  background-color: ${({ theme }) => theme.colors.lightGrey};
`;
