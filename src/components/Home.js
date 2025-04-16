import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  padding: 2rem;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Paragraph = styled.p`
  font-size: 1rem;
`;

const Home = () => (
  <Container>
    <Title>Welcome to Little Lemon</Title>
    <Paragraph>Book a table and enjoy your favorite meals!</Paragraph>
  </Container>
);

export default Home;
