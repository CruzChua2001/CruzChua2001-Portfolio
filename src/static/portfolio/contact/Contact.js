import React from "react";
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import styled from "styled-components";

const Div = styled.div`
    margin-block: 5%;
    padding: 5% 3%;
`

const Td = styled.td`
    padding: 1%;
`
 
const Contact = _ => {
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
                            <Form.Control type="text" />
                        </Form.Group>
                        <Form.Group className="col-6">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <Form.Group className="col-12 mt-2">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="example@abc.com" />
                        </Form.Group>
                        <Form.Group className="col-12 mt-2">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </div>
                    
                    <Button className="mt-3">Submit</Button>
                </Div>
            </div>
        </Container>
    )
}

export default Contact;