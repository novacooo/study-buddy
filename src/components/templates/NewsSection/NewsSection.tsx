import React, { useState, useEffect } from 'react';
import { ArticlesList, ArticleWrapper, Header, Subtitle, Title, Wrapper, Text, StyledButton, ContentWrapper } from './NewsSection.styles';
import axios from 'axios';

interface IArticle {
  id: string;
  title: string;
  category: string;
  content: string;
  image: {
    url: string;
    alt: string;
  };
}

const API_TOKEN = 'dfca0d5e354465babc83a58efe52b8';

const NewsSection = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .post(
        'https://graphql.datocms.com/',
        {
          query: `
          {
            allArticles {
              id
              title
              category
              content
              image {
                url
                alt
              }
            }
          }
        `,
        },
        {
          headers: {
            authorization: `Bearer ${API_TOKEN}`,
          },
        }
      )
      .then(({ data: { data } }) => {
        console.log(data);
        setArticles(data.allArticles);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Wrapper>
      <Header>University news feed</Header>
      <ArticlesList>
        {articles.map(({ id, title, category, content, image }: IArticle) => (
          <ArticleWrapper key={id}>
            <Title>{title}</Title>
            <Subtitle>{category}</Subtitle>
            <ContentWrapper>
              <Text>{content}</Text>
              {image && <img alt={image.alt} src={image.url} />}
            </ContentWrapper>
            <StyledButton>Read more</StyledButton>
          </ArticleWrapper>
        ))}
      </ArticlesList>
    </Wrapper>
  );
};

export default NewsSection;
