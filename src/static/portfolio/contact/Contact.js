import React, { useState } from "react";
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import styled from "styled-components";
import axios from 'axios';

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
        axios.post("https://tnidj38tv1.execute-api.ap-southeast-1.amazonaws.com/PROD/sendEmail", JSON.stringify(message))
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
                        Need to get in touch with me? 
                        Fill in the form with your inquiry and I will get back to you within 3-5 business days.
                    </p>
                    <h1>Reach Me Here</h1>
                    
                    <table width="100%">
                        <tbody>
                            <tr>
                                <Td>Email:</Td>
                                <Td>2001cruzchua@gmail.com</Td>
                            </tr>
                            <tr>
                                <Td>Phone No.:</Td>
                                <Td>+65 92773372</Td>
                            </tr>
                            <tr>
                                <Td>Address:</Td>
                                <Td rowSpan="2">
                                    Blk 795 Yishun Ring Road,
                                    S760795
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