import React from 'react';
import { useNavigate } from "react-router-dom";
import { Header, Image, Title, FormContainer, Form, NameContainer, GenderContainer, NationalityContainer, Submit } from './styles'


const SignUp = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/thanks', { replace: true });
  }
  return (
    <>
      <Header>
        <Image
          src={process.env.PUBLIC_URL + `/images/5.jpg`} alt="images of pets" width="100%"
        />
        <Title>Register Your Support!</Title>
      </Header>
      <FormContainer>
        <Form onSubmit={e => { handleSubmit(e) }}>
          <NameContainer>
            <label for="name">Name</label><br />
            <input type="text" id="name" name="name" />
          </NameContainer>
          <GenderContainer>
            <label for="email">Email</label><br />
            <input type="text" id="email" name="email" />
          </GenderContainer>
          <NationalityContainer>
            <label for="password1">Enter your password (Minimum 8 characters)</label><br />
            <input type="password" id="password1" name="password" minlength="8" required />
          </NationalityContainer>
          <GenderContainer>
            <label for="password2">Confirm your password</label><br />
            <input type="password" id="password2" name="password" minlength="8" required />
          </GenderContainer>
          <br />
          <Submit type="submit" />
        </Form>
      </FormContainer>
    </>);
};

export default SignUp;
