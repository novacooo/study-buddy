import React from 'react';
import { ArticlesList, ArticleWrapper, Header, Subtitle, Title, Wrapper, Text, StyledButton, ContentWrapper } from './NewsSection.styles';

const data = [
  {
    id: 'article-01',
    title: 'New computers for all lecturers',
    category: 'Staff News',
    content: `Amet, diam, viverra nec pretium in nunc a. Pellentesque venenatis fames molestie non. Nulla neque, a a id elementum pretium aliquam. In
          turpis sem vestibulum ut in ut. Fringilla orci, condimentum tellus leo nunc, vitae eu. Diam euismod enim integer facilisi sed. Pretium
          hendrerit quis egestas eget at magna ac commodo volutpat.`,
  },
  {
    id: 'article-02',
    title: 'Business course for best students',
    category: 'Students',
    content: `Amet, diam, viverra nec pretium in nunc a. Pellentesque venenatis fames molestie non. Nulla neque, a a id elementum pretium aliquam.`,
    image: 'https://unsplash.it/500/400',
  },
  {
    id: 'article-03',
    title: 'All exams postponed!',
    category: 'Staff News',
    content: `Amet, diam, viverra nec pretium in nunc a. Pellentesque venenatis fames molestie non. Nulla neque, a a id elementum pretium aliquam.`,
  },
];

const NewsSection = () => (
  <Wrapper>
    <Header>University news feed</Header>
    <ArticlesList>
      {data.map(({ id, title, category, content, image = null }) => (
        <ArticleWrapper key={id}>
          <Title>{title}</Title>
          <Subtitle>{category}</Subtitle>
          <ContentWrapper>
            <Text>{content}</Text>
            {image && <img alt={title} src={image} />}
          </ContentWrapper>
          <StyledButton>Read more</StyledButton>
        </ArticleWrapper>
      ))}
    </ArticlesList>
  </Wrapper>
);

export default NewsSection;
