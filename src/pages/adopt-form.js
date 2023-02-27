import React, { useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import emailjs from '@emailjs/browser';
import { Header, Title, Image, FormContainer, Form, CatDetails, NameContainer, GenderContainer, NationalityContainer, PhoneContainer, AddrContainer, EmailContainer, PostcodeContainer, Submit } from './styles'
import { PetImage } from '../components/Showcat/styles'

const catNames = [{ name: "Milo", gender: "Male", age: 3 }, { name: "Luna", gender: "Female", age: 5 }, { name: "Leo", gender: "Male", age: 6 }]

const catID = Math.floor(Math.random() * 3);
const currCat = catNames[catID];

const AdoptForm = () => {
    const navigate = useNavigate();
    const [name, setname] = useState("");
    const [gender, setgender] = useState("");
    const [nationality, setnationality] = useState("");
    const [phoneNum, setphoneNum] = useState("");
    const [address, setaddress] = useState("");
    const [postcode, setpostcode] = useState("");
    const [email, setemail] = useState("");
    const [petID, setpetID] = useState("");

    const handleSubmit = (e) => {
        const adoptDetails = {
            name: name,
            gender: gender,
            nationality: nationality,
            phoneNum: phoneNum,
            address: address,
            postcode: postcode,
            email: email,
            petID: petID,
        }
        e.preventDefault();
        emailjs.send('service_pncuuah', 'template_xsiomvd', adoptDetails, 'hvNLv8wxhrYkaxr9t')
            .then((result) => {
                navigate('/response', { replace: true })
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    const location = useLocation();
    if (location.state && "id" in location.state && !petID) {
        setpetID(location.state["id"]);
    }

    return (
        <>
            <Header>
                <Image
                    src={process.env.PUBLIC_URL + `/images/3.jpg`} alt="images of pets" width="100%"
                />
                <Title>Adopt a Pet</Title>
            </Header>
            <FormContainer>
                <PetImage src={location.state["src"]} alt="selected cat"></PetImage>
                <CatDetails>
                    <div>Name: {currCat.name}</div>
                    <div>Gender: {currCat.gender}</div>
                    <div>Age: {currCat.age}</div>
                </CatDetails>
                <Form onSubmit={e => { handleSubmit(e) }}>
                    <h3>Your Particulars</h3>
                    <NameContainer>
                        <label htmlFor="name">Name </label><br />
                        <input type="text" id="name" value={name} onChange={(event) => setname(event.target.value)}></input>
                    </NameContainer>
                    <GenderContainer>
                        <label htmlFor="gender">Gender</label><br />
                        <select id="gender" name="gender" defaultValue="male" value={gender} onChange={(event) => setgender(event.target.value)}>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </GenderContainer>
                    <NationalityContainer>
                        <label htmlFor="nationality">Nationality </label><br />
                        <input type="text" id="nationality" value={nationality} onChange={(event) => setnationality(event.target.value)}></input>
                    </NationalityContainer>
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
        </>);
};

export default AdoptForm;