import React from "react";
import { Container } from 'react-bootstrap';
import styled from "styled-components";

import jsonConfig from '../../../../appsettings.json';

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
                            <img src={jsonConfig.CONFIG.BUCKET_URL+jsonConfig.ABOUT.IMAGE_URL} alt="avatar" className="about-picture" />
                        </div>
                    </div>
                    <div className="col-sm-12 col-lg-6 mt-5 pt-3 order-first order-lg-last">
                        <h2>About Me</h2>

                        <Hr />
                        
                        <div className="mt-3">
                            <p>{jsonConfig.ABOUT.CURRENT_STATUS} <a href={jsonConfig.ABOUT.LOCATION_URL} target="_blank">{jsonConfig.ABOUT.LOCATION}</a> </p>

                            {jsonConfig.ABOUT.PARAGRAPHS.map((item,index) => (
                                <p key={index}>{item}</p>
                            ))}

                            <Hr />

                            <p className="mt-3" style={{ fontSize: '20px' }}>
                                <a href={jsonConfig.CONFIG.BUCKET_URL+jsonConfig.ABOUT.RESUME_URL} target="_blank" style={{ color: 'grey' }}>Resume</a>
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
        
    )
}

export default About;