import styled from 'styled-components';

export const Image = styled.img`
width: 100%;
filter: blur(8px);
`;

export const Title = styled.h1`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
`;

export const LongText = styled.div`
text-align:left;
margin-left: 5%;
margin-bottom: 50px;
`

export const Header = styled.p`
position: relative;
text-align: center;
color: white;
`

export const Section = styled.div`
align-content: center;
text-align: center;
&:nth-of-type(2) {
    background-color: #36363630;
}
`

export const Container = styled.section`
display: inline-grid;
gap: 30px;
padding: 30px;
width: 95%;
grid-template-columns: 1fr 1fr;
`;

export const ArticleTitle = styled.h3`
margin: auto;
padding-top:30px;
padding-bottom: 50px;
text-align: center;
font-size: 1.8em;
font-weight: bold;
`;

export const Article1 = styled.article`
grid-column-start: 1;
grid-column-end: 2;
grid-row-start: 1;
border-style: solid;
padding: 50px;
border-color: #9DC08B;
`

export const Article2 = styled.article`
grid-column-start: 2;
grid-column-end: 3;
grid-row-start: 1;
border-style: solid;
padding: 50px;
border-color: #9DC08B;
`

export const Article3 = styled.article`
grid-column-start: 1;
grid-column-end: 2;
grid-row-start: 2;
border-style: solid;
padding: 50px;
border-color: #9DC08B;
`

export const Article4 = styled.article`
grid-column-start: 2;
grid-column-end: 3;
grid-row-start: 2;
border-style: solid;
padding: 50px;
border-color: #9DC08B;
`

export const Article3Long = styled.article`
grid-column-start: 1;
grid-column-end: 3;
grid-row-start: 2;
padding: 50px;
border-style: solid;
border-color: #9DC08B;
`

export const ArticleContent = styled.div`
margin: 10px;
`

export const Button = styled.button`
border-radius: 4px;
background: #40513B;
padding: 10px 22px;
color: #EDF1D6;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
&:hover {
    transition: all 0.2s ease-in-out;
	background: #fff;
	color: #808080;
}
`

export const CatList = styled.section`
display: flex;
padding: 30px;
width: 95%;
flex-basis: 90%;
flex-wrap: wrap;
justify-content: space-around;
`
export const CatDetails = styled.div`
display: inline-grid;
gap: 30px;
padding: 30px;
width: 95%;
grid-template-columns: 1fr 1fr 1fr;
`

export const Form = styled.form`
    display:grid;
    min-width: 100vh;
    grid-template-columns: min-content auto min-content;
`

export const FormContainer = styled.div`
    margin-top: 20px;
    width: 70%;
    border-radius: 5px;
    background-color: #EDF1D6;
    padding: 20px;
    margin-left: 10%;
`

export const NameContainer = styled.div`
    grid-column-start: 1;
    padding: 1px;
`

export const GenderContainer = styled.div`
    grid-column-start: 2;
    width: 100%;
  height: 100%;
    padding: 1px;
`
export const NationalityContainer = styled.div`
    grid-column-start: 1;
    padding: 1px;
`

export const PhoneContainer = styled.div`
    grid-column-start: 2;
    padding: 1px;
`

export const AddrContainer = styled.div`
    grid-column-start: 1;
    padding: 1px;
`

export const EmailContainer = styled.div`
    grid-column-start: 1;
    padding: 1px;
`
export const PostcodeContainer = styled.div`
    grid-column-start: 2;
    padding: 1px;
`
export const Submit = styled.input`
border-radius: 4px;
background: #40513B;
padding: 10px 22px;
color: #EDF1D6;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
&:hover {
    transition: all 0.2s ease-in-out;
	background: #fff;
	color: #808080;
}`