import React from 'react';
import { ArticlesList, ArticleWrapper, Header, Subtitle, Title, Wrapper, Text, StyledButton } from './NewsSection.styles';

const NewsSection = () => (
  <Wrapper>
    <Header>University news feed</Header>
    <ArticlesList>
      <ArticleWrapper>
        <Title>New computers for all lecturers</Title>
        <Subtitle>Staff News</Subtitle>
        <Text>
          Amet, diam, viverra nec pretium in nunc a. Pellentesque venenatis fames molestie non. Nulla neque, a a id elementum pretium aliquam. In
          turpis sem vestibulum ut in ut. Fringilla orci, condimentum tellus leo nunc, vitae eu. Diam euismod enim integer facilisi sed. Pretium
          hendrerit quis egestas eget at magna ac commodo volutpat.
        </Text>
        <StyledButton>Read more</StyledButton>
      </ArticleWrapper>
      <ArticleWrapper>
        <Title>New computers for all lecturers</Title>
        <Subtitle>Staff News</Subtitle>
        <Text>
          Amet, diam, viverra nec pretium in nunc a. Pellentesque venenatis fames molestie non. Nulla neque, a a id elementum pretium aliquam. In
          turpis sem vestibulum ut in ut. Fringilla orci, condimentum tellus leo nunc, vitae eu. Diam euismod enim integer facilisi sed. Pretium
          hendrerit quis egestas eget at magna ac commodo volutpat.
        </Text>
        <StyledButton>Read more</StyledButton>
      </ArticleWrapper>
      <ArticleWrapper>
        <Title>New computers for all lecturers</Title>
        <Subtitle>Staff News</Subtitle>
        <Text>
          Amet, diam, viverra nec pretium in nunc a. Pellentesque venenatis fames molestie non. Nulla neque, a a id elementum pretium aliquam. In
          turpis sem vestibulum ut in ut. Fringilla orci, condimentum tellus leo nunc, vitae eu. Diam euismod enim integer facilisi sed. Pretium
          hendrerit quis egestas eget at magna ac commodo volutpat.
        </Text>
        <StyledButton>Read more</StyledButton>
      </ArticleWrapper>
    </ArticlesList>
  </Wrapper>
);

export default NewsSection;
