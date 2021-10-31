import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';

interface IStatusTextProps {
  isBig?: boolean;
}

export const SearchBarWrapper = styled.div`
  grid-row: 1 / 2;
  grid-column: 2 / 3;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 40px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  ${Input} {
    padding: 12px 24px;
    width: 100%;
    max-width: 470px;
    border: none;
    box-shadow: ${({ theme }) => theme.shadows.component};
    font-size: ${({ theme }) => theme.fontSize.m};
    font-weight: ${({ theme }) => theme.fontWeight.regular};

    &::placeholder {
      color: ${({ theme }) => theme.colors.grey};
    }
  }
`;

export const StatusInfo = styled.div`
  margin-right: 40px;
`;

export const StatusText = styled.p<IStatusTextProps>`
  margin: 3px 0;
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme, isBig }) => (isBig ? theme.fontSize.l : theme.fontSize.m)};
  font-weight: ${({ theme, isBig }) => (isBig ? theme.fontWeight.bold : theme.fontWeight.regular)};
`;
