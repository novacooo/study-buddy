import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 120px;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  border-right: 1px solid ${({ theme }) => theme.colors.border};
`;

export const LogoWrapper = styled.div`
  margin-top: 20px;
  padding: 13px 15px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.white};
  text-align: end;
`;

export const NavWrapper = styled.nav`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  gap: 15px;
`;
