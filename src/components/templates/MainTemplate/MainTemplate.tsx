import React from 'react';
import { Wrapper, ContentWrapper } from './MainTemplate.styles';
import NavBar from 'components/organisms/NavBar/NavBar';

interface IMainTemplateProps {
  children: React.ReactNode;
}

const MainTemplate = ({ children }: IMainTemplateProps) => (
  <Wrapper>
    <NavBar />
    <ContentWrapper>{children}</ContentWrapper>
  </Wrapper>
);

export default MainTemplate;
