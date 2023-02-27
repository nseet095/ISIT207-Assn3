import React from 'react';
import { useNavigate } from "react-router-dom";
import { FormContainer, Form, NameContainer, GenderContainer, NationalityContainer, Submit } from './styles'


const Donate = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
		navigate('/thanks', {replace: true});
        }

    return (
        <FormContainer>
            <Form onSubmit={e => { handleSubmit(e) }}>
                <h3>Your Particulars</h3>
                <NameContainer>
				<label for="credit_card_name">Card Holder Name</label><br />
                <input type="text" id="name" name="name" />
                </NameContainer>
				<GenderContainer>
                <label for="cc_num">Credit Card Number</label><br />
                <input type="text" id="cc_num" name="cc_num" />
                </GenderContainer>
                <NationalityContainer>
                <label for="cvv">CVV</label><br />
                <input type="text" id="cvv" name="cvv" />
                </NationalityContainer>
                <GenderContainer>
                <label for="expiry">Expiry Date</label><br />
                <input type="date" id="expiry" name="expiry" max="2040-12-31" />
                </GenderContainer>
                <br />
                <Submit type="submit" />
            </Form>
        </FormContainer>);
};

export default Donate;