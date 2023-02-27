import { React } from 'react';

import { Container, Title, Header, Image, ArticleTitle, Button, ArticleContent, Article1, Article2, Article3, Article4, Section } from './styles'
import { Link } from 'react-router-dom';
import ShowCat from '../components/Showcat/showcat';


const Home = () => {
	// const {width, height} = useWindowDimensions();
	return (
		<>
			<Header>
				<Image
					src={process.env.PUBLIC_URL + `/images/1.jpg`} alt="images of pets" width="100%"
				/>
				<Title>Welcome to Pet Heaven</Title>
			</Header>
			<div id="container">
				<ArticleTitle>Cats For Adoption</ArticleTitle>
				<ShowCat numOfCats={4} />
				<Section>
					<ArticleTitle>Services</ArticleTitle>
					<Container id="services">
						<Article1>
							<h3>Adopt a pet</h3>
							<ArticleContent>
								Looking for a new friend? We have a selection of pets who are in need a loving family!
							</ArticleContent>
							<Link to="adopt">
								<Button type="button">Adopt a Pet</Button>
							</Link>
						</Article1>
						<Article2>
							<h3>Put up your pet for adoption</h3>
							<ArticleContent>
								Sometimes the kindest and most compassionate way to love our pets is by finding them a new home that better suits their individual needs.
							</ArticleContent>
							<Link to="putup">
								<Button type="button">Rehome Your Pet</Button>
							</Link>
						</Article2>
						<Article3>
							<h3>Volunteer with us</h3>
							<ArticleContent>
								Do you feel the passion and the fire to help? Use your strengths and passion to really make a difference ! There are so many ways to help, find out more!
							</ArticleContent>
							<Link to="putup">
								<Button type="button">Rehome Your Pet</Button>
							</Link>
						</Article3>
						<Article4>
							<h3>Donate</h3>
							<ArticleContent>
								It takes a massive amount to keep our rescue, medical and shelter operations going monthly and this will be a great way to be a part of helping these helpless dogs and cats who have no one but us to help them
							</ArticleContent>
							<Link to="putup">
								<Button type="button">Rehome Your Pet</Button>
							</Link>
						</Article4>
					</Container>
				</Section>
			</div>
		</>
	);
};

export default Home;
