import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Contact = _ => {
    return (
        <div className="border-light shadow bg-light rounded contact-container">
            <h3>Contact Me</h3>
            
            <div className="contact-form">
                <div className="row mb-2">
                    <div className="col-6">
                        <Form.Group>
                            <Form.Control type="text" placeholder="First name" />
                        </Form.Group>
                    </div>
                    <div className="col-6">
                        <Form.Group>
                            <Form.Control type="text" placeholder="Last name" />
                        </Form.Group>
                    </div>
                </div>
                
                <Form.Group className="mb-2">
                    <Form.Control type="email" placeholder="Email Address" />
                </Form.Group>

                <Form.Group>
                    <Form.Control as="textarea" placeholder="Message" />
                </Form.Group>

                <Button className="mt-2">Send</Button>
            </div>
        </div>
    )
}

export default Contact;