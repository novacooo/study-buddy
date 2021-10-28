import styled from 'styled-components';
import Button from 'components/atoms/Button/Button';

export const Wrapper = styled.div`
  grid-row: 1 / 3;
  grid-column: 3 / 3;
  padding: 30px 45px;
  border-left: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Header = styled.h3`
  font-size: 2rem;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.darkGrey};
`;

export const ArticlesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 25px;
`;

export const ArticleWrapper = styled.div`
  padding: 25px 30px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 15px;
  box-shadow: ${({ theme }) => theme.shadows.component};
`;

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.darkGrey};
`;

export const Subtitle = styled.h5`
  margin-top: 3px;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.colors.darkGrey};
`;

export const Text = styled.p`
  margin-top: 12px;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.colors.darkGrey};
`;

export const StyledButton = styled(Button)`
  margin-top: 18px;
`;
