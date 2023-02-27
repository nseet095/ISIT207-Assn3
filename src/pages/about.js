import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Image, Title, Container, ArticleTitle, Button, ArticleContent, Article1, Article2, Article3Long, Section, LongText } from './styles'

const About = () => {
  return (
    <>
    <Header>
				<Image
					src={process.env.PUBLIC_URL + `/images/2.jpg`} alt="images of pets" width="100%"
				/>
				<Title>About Us</Title>
			</Header>
      <Section>
        <ArticleTitle>Who Are We</ArticleTitle>
        <LongText>
          Pet Heaven is a non-profit organisation is a registered Charity and was established in founded in 2023 with the mission to improve the welfare of abandoned pets in Singapore.<br></br><br></br>
          We focus on caring for abandoned pets, to rehabilitate them and finding new homes for them through various activities and programs including rescuing and fostering of abandoned pets. <br></br><br></br>
          We advocate for sterilization to control the stray population, responsible pet ownership.
        </LongText>
        <ArticleTitle>What We Do</ArticleTitle>
        <Container id="how-to-help">
          <Article1>
            <h3>Rehabilitate</h3>
            <ArticleContent>
              We help abandoned pets through their ordeals and to let them know there is still love in life.
            </ArticleContent>
          </Article1>
          <Article2>
            <h3>Rehome</h3>
            <ArticleContent>
              We assist in reaching the final destination of any dog's life journey, to find that forever home and to live happily ever after.
            </ArticleContent>
          </Article2>
        </Container>
      </Section>
      <Section>
        <ArticleTitle>Want To Help?</ArticleTitle>
        <Container id="how-to-help">
          <Article1>
            <h3>Adopt</h3>
            <ArticleContent>
              Thinking of getting a dog or a cat? View the many reasons why you should adopt one of these wonderful dogs and cats who will provide a lifetime of love and joy!
            </ArticleContent>
            <Link to="/adopt">
              <Button type="button">Adopt Now!</Button>
            </Link>
          </Article1>
          <Article2>
            <h3>Donate</h3>
            <ArticleContent>
              It takes a massive amount to keep our rescue, medical and shelter operations going monthly and this will be a great way to be a part of helping these helpless dogs and cats who have no one but us to help them
            </ArticleContent>
            <Link to="/donate">
              <Button type="button">Donate Now!</Button>
            </Link>
          </Article2>
          <Article3Long>
            <h3>Volunteer</h3>
            <ArticleContent>
              Do you feel the passion and the fire to help? Use your strengths and passion to really make a difference ! There are so many ways to help, find out more!
            </ArticleContent>
            <Button type="button">Sign Up Now!</Button>
          </Article3Long>
        </Container>
      </Section>
    </>
  );
};

export default About;
