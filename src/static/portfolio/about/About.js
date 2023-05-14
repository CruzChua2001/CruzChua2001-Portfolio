import React from "react";
import { Container } from 'react-bootstrap';
import styled from "styled-components";

const Hr = styled.div`
    border: 2px solid #434241; 
    width: 25%;
    margin-top: 1em;
`

const About = _ => {
    return (
        <div className="about-container">
            <Container>
                <div className="row">
                    <div className="col-sm-12 col-lg-6 pb-5 py-1 order-last order-lg-first">
                        <div className="image-cropper-about">
                            <img src="https://cc-portfolio-cruzc-bucket.s3.ap-southeast-1.amazonaws.com/images/about_pic.png" alt="avatar" className="about-picture" />
                        </div>
                    </div>
                    <div className="col-sm-12 col-lg-6 mt-5 pt-3 order-first order-lg-last">
                        <h2>About Me</h2>

                        <Hr />
                        
                        <div className="mt-3">
                            <p>Current Status: Software Developer @ <a href="https://www.ura.gov.sg/Corporate">Urban Redevelopment Authority (URA)</a> </p>

                            <p>
                                I'm Cruz Chua - Fresh graduate from Nanyang Polytechnic of 2023, Diploma of Information Technology. 
                                Aspired to be application developer, as I enjoys the satisfaction of a completed project outcome.
                            </p>

                            <p>
                                I started my journey in IT back in 2018, and gathered my first ever experience as a Web Developer back in 2019.
                                I always love the process of gathering user requirement and meeting their needs with design and application.
                            </p>

                            <p>
                                I have a wide range of hobbies, such as DJ Mixing, "professional" Foosball and sleeping. 
                                Actively participating, organising and coaching Foosball CCA club in ITE College Central.
                            </p>

                            <Hr />

                            <p className="mt-3" style={{ fontSize: '20px' }}>
                                <a href="https://cc-portfolio-cruzc-bucket.s3.ap-southeast-1.amazonaws.com/files/Cruz_Chua_Resume.pdf" target="_blank" style={{ color: 'grey' }}>Resume</a>
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
        
    )
}

export default About;