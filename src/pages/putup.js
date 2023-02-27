import { React, useState } from 'react';
import { useNavigate } from "react-router-dom";
import emailjs from '@emailjs/browser';
import { Header, Image, Title, FormContainer, Form, NameContainer, GenderContainer, PhoneContainer, AddrContainer, EmailContainer, PostcodeContainer, Submit } from './styles'


const PutUp = () => {
	const navigate = useNavigate();
	const [petType, setpetType] = useState("");
	const [name, setname] = useState("");
	const [gender, setgender] = useState("");
	const [phoneNum, setphoneNum] = useState("");
	const [address, setaddress] = useState("");
	const [postcode, setpostcode] = useState("");
	const [email, setemail] = useState("");

	const handleSubmit = (e) => {
		const adoptDetails = {
			pet_type: petType,
			name: name,
			gender: gender,
			phoneNum: phoneNum,
			address: address,
			postcode: postcode,
			email: email,
		}
		e.preventDefault();
		emailjs.send('service_pncuuah', 'template_kjzmdoc', adoptDetails, 'hvNLv8wxhrYkaxr9t')
			.then((result) => {
				navigate('/response', { replace: true })
				console.log(result.text);
			}, (error) => {
				console.log(error.text);
			});
	}
	return (
		<>
			<Header>
				<Image
					src={process.env.PUBLIC_URL + `/images/4.jpg`} alt="images of pets" width="100%"
				/>
				<Title>Put Up Your Pet For Adoption</Title>
			</Header>
			<FormContainer>
				<Form onSubmit={e => { handleSubmit(e) }}>
					<h3>Your Particulars</h3>
					<NameContainer>
						<label htmlFor="species">Pet Species </label><br />
						<input type="text" id="species" value={name} onChange={(event) => setpetType(event.target.value)}></input>
					</NameContainer>
					<GenderContainer>
						<label htmlFor="gender">Pet Gender</label><br />
						<select id="gender" name="gender" defaultValue="male" value={gender} onChange={(event) => setgender(event.target.value)}>
							<option value="male">Male</option>
							<option value="female">Female</option>
						</select>
					</GenderContainer>
					<NameContainer>
						<label htmlFor="name">Owner Name </label><br />
						<input type="text" id="name" value={name} onChange={(event) => setname(event.target.value)}></input>
					</NameContainer>
					<PhoneContainer>
						<label htmlFor="phoneNum">Contact No. </label><br />
						<input type="number" id="phoneNum" value={phoneNum} onChange={(event) => setphoneNum(event.target.value)}></input>
					</PhoneContainer>
					<AddrContainer>
						<label htmlFor="address">Address</label><br />
						<input type="text" id="address" value={address} onChange={(event) => setaddress(event.target.value)}></input>
					</AddrContainer>
					<PostcodeContainer>
						<label htmlFor="postcode">Post Code</label><br />
						<input type="text" id="postcode" value={postcode} onChange={(event) => setpostcode(event.target.value)}></input>
					</PostcodeContainer>
					<EmailContainer>
						<label htmlFor="email">Email</label><br />
						<input type="text" id="email" value={email} onChange={(event) => setemail(event.target.value)}></input>
					</EmailContainer>
					<br />
					<Submit type="submit" />
				</Form>
			</FormContainer>
		</>
	);
};

export default PutUp;
