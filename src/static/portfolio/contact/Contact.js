import React, { useState } from "react";
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import styled from "styled-components";
import axios from 'axios';

import jsonConfig from '../../../../appsettings.json';

const Div = styled.div`
    margin-block: 5%;
    padding: 5% 3%;
`

const Td = styled.td`
    padding: 1%;
`
 
const Contact = _ => {

    const [message, setMessage] = useState({"firstName": "", "lastName": "", "email": "", "message": ""})

    const sendEmail = () => {
        axios.post(jsonConfig.CONFIG.API_URLS[0]+jsonConfig.CONTACT.SEND_EMAIL_API_URL, JSON.stringify(message))
        .then(response => {
            console.log(response)
        })
    }

    return (
        <Container>
            <div className="row">
                <Div className="col-12 col-lg-6">
                    <h1>Contact Me</h1>
                    <p>
                        {jsonConfig.CONTACT.CONTACT_ME_TEXT}
                    </p>
                    <h1>Reach Me Here</h1>
                    
                    <table width="100%">
                        <tbody>
                            <tr>
                                <Td>Email:</Td>
                                <Td><a href={"mailto:"+jsonConfig.CONFIG.EMAIL}>{jsonConfig.CONFIG.EMAIL}</a></Td>
                            </tr>
                            <tr>
                                <Td>Phone No.:</Td>
                                <Td><a href={"tel:"+jsonConfig.CONFIG.PHONE_LINK}>{jsonConfig.CONFIG.PHONE}</a></Td>
                            </tr>
                            <tr>
                                <Td>Address:</Td>
                                <Td rowSpan="2">
                                    {jsonConfig.CONFIG.ADDRESS}
                                </Td>
                            </tr>
                        </tbody>
                    </table>
                </Div>
                <Div className="col-12 col-lg-6">
                    <div className="row">
                        <Form.Group className="col-6">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" value={message.firstName} onChange={e => setMessage(prevMsg => ({...prevMsg, firstName: e.target.value}))} />
                        </Form.Group>
                        <Form.Group className="col-6">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" value={message.lastName} onChange={e => setMessage(prevMsg => ({...prevMsg, lastName: e.target.value}))} />
                        </Form.Group>
                        <Form.Group className="col-12 mt-2">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="example@abc.com" value={message.email} onChange={e => setMessage(prevMsg => ({...prevMsg, email: e.target.value}))} />
                        </Form.Group>
                        <Form.Group className="col-12 mt-2">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={3} value={message.message} onChange={e => setMessage(prevMsg => ({...prevMsg, message: e.target.value}))} />
                        </Form.Group>
                    </div>
                    
                    <Button className="mt-3" onClick={sendEmail}>Submit</Button>
                </Div>
            </div>
        </Container>
    )
}

export default Contact;