import React from 'react';
import { Wrapper } from './MainTemplate.styles';
import NavBar from 'components/organisms/NavBar/NavBar';
import SearchBar from 'components/organisms/SearchBar/SearchBar';
import NewsSection from 'components/templates/NewsSection/NewsSection';

interface IMainTemplateProps {
  children: React.ReactNode;
}

const MainTemplate = ({ children }: IMainTemplateProps) => (
  <Wrapper>
    <NavBar />
    <SearchBar />
    {children}
    <NewsSection />
  </Wrapper>
);

export default MainTemplate;
