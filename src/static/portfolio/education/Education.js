import React, { useState } from "react";
import styled from "styled-components";
import { Col, Container, Row } from 'react-bootstrap';

import jsonConfig from '../../../../appsettings.json';

const Heading = styled.h1`
    color: yellow;
`

const Year = styled.h2`
    font-family: 'Chau Philomene One';
    font-size: 32px;
`

const CircleArrow = styled.div`
  position: relative;
  flex-grow: 1; /* Ensure the line takes up the remaining space */
  margin: 0 10px; /* Adjust margin if needed */

  &::before {
    content: '';
    position: absolute;
    left: 10px;
    top: 40%;
    transform: translateY(-50%);
    width: 10px; /* Diameter of the dot */
    height: 10px;
    background-color: white; /* Color of the dot */
    border-radius: 50%; /* Make the dot a circle */
  }

  &::after {
    content: '';
    display: block;
    height: 2px;
    width: 125px;
    position: absolute;
    left: 10px;
    top: 40%;
    transform: translateY(-50%);
    background: linear-gradient(to left, rgba(255, 255, 255, 0) 0%, white 100%);
    /* The gradient goes from transparent on the right to white on the left */
  }
`

const SchoolTitle = styled.h3`
  color: #A57A6D;
`

const SchoolDetails = styled.article`
  width: 50%;

  @media (max-width: 992px) {
      width: 100%;
  }
`


const Education = _ => {

    return (
        <div className="education-container container">
            <Container className="mt-5">
                <Heading>My Education Background</Heading>
                <div className="education-background-container">
                    {/* University */}
                    <div className="education-div">
                        <div className="d-flex">
                            <Year>2025</Year>
                            <CircleArrow />
                        </div>

                        <div className="d-flex">
                            <div className="education-logo-div mt-3">
                                <img src={jsonConfig.CONFIG.BUCKET_URL + jsonConfig.EDUCATION.IMAGES.SMU_LOGO} width="150px" height="auto" className="education-logo-img" />
                            </div>
                            <div className="mt-4 ms-3 position-relative education-title">
                                <SchoolTitle>Singapore Management University</SchoolTitle>
                                <span>Bachelor of Science, Software Engineering</span>

                                <p className="position-absolute bottom-0">Matriculating in 2025</p>
                            </div>
                        </div>
                    </div>

                    <div className="education-div">
                        <div className="d-flex">
                            <Year>2023-2020</Year>
                            <CircleArrow />
                        </div>

                        <div>
                            <div className="d-flex">
                                <div className="education-logo-div mt-3">
                                    <img src={jsonConfig.CONFIG.BUCKET_URL + jsonConfig.EDUCATION.IMAGES.NYP_LOGO} width="110px" height="auto" className="education-logo-img" />
                                </div>
                                <div className="mt-4 ms-3 position-relative education-title">
                                    <SchoolTitle>Nanyang Polytechnic</SchoolTitle>
                                    <span>Diploma in Information Technology</span>

                                    <p className="position-absolute bottom-0">Graduated with cGPA 3.68</p>
                                </div>
                            </div>

                            <div>
                                <SchoolDetails className="lh-1 mt-3">
                                    <p>Advance my skill set, further improving myself especially in full stack development. Basic knowledge on security, analytics and software engineering.</p>
                                
                                    <p><strong>Specialisation</strong>: Enterprise Cloud Computing (AWS)</p>
                                    
                                    <p>
                                        <strong>Distinction Module</strong>: Web Development <br />
                                        Received ‘A’s for all programming modules
                                    </p>
                                </SchoolDetails>
                            </div>
                        </div>
                    </div>

                    <div className="education-div">
                        <div className="d-flex">
                            <Year>2020-2018</Year>
                            <CircleArrow />
                        </div>

                        <div>
                            <div className="d-flex">
                                <div className="education-logo-div mt-3">
                                    <img src={jsonConfig.CONFIG.BUCKET_URL + jsonConfig.EDUCATION.IMAGES.ITE_LOGO} width="100px" height="auto" className="education-logo-img" />
                                </div>
                                <div className="mt-4 ms-3 position-relative education-title">
                                    <SchoolTitle>ITE College Central</SchoolTitle>
                                    <span>Higher Nitec in IT App Development</span>

                                    <p className="position-absolute bottom-0">Graduated with cGPA 3.74</p>
                                </div>
                            </div>

                            <div>
                                <SchoolDetails className="lh-1 mt-3">
                                    <p>Trained in basic skill sets on programming and web/mobile application frameworks. Basic knowledge on designing UI/UX, creating contents and e-commerce applications.</p>
                                    
                                    <p>
                                        <strong>Co Curricular Activity (CCA)</strong>: Foosball Club <br />
                                        <strong>Position</strong>: Vice-President <br />
                                        <strong>Competitions</strong>: <br />
                                        Inter-ITE Foosball Competition (2018): Bronze <br />
                                        Internation Table Soccer Federation Singapore (2019): 4th Place in Double
                                    </p>

                                    <p><strong>CCA Grade</strong>: A</p>
                                </SchoolDetails>
                            </div>
                        </div>
                    </div>

                    <div className="education-div">
                        <div className="d-flex">
                            <Year>2017-2014</Year>
                            <CircleArrow />
                        </div>
                        
                        <div>
                            <div className="d-flex">
                                <div className="education-logo-div mt-3">
                                    <img src={jsonConfig.CONFIG.BUCKET_URL + jsonConfig.EDUCATION.IMAGES.CCHY_LOGO} width="140px" height="auto" className="mb-2 education-logo-img" />
                                </div>
                                <div className="mt-4 ms-3 position-relative education-title">
                                    <SchoolTitle>Chung Cheng High School (Yishun)</SchoolTitle>
                                    <span>GCE N(A) Level</span>

                                    <p className="position-absolute bottom-0">Graduated with EMB3 of 12 Points</p>
                                </div>
                            </div>

                            <div>
                                <SchoolDetails className="lh-1 mt-3">
                                    <p>
                                        <strong>Co Curricular Activity (CCA)</strong>: Choir <br />
                                        <strong>Position</strong>: Logistic EXCO <br />
                                        <strong>Competitions</strong>: <br />
                                        SYF 2015 &amp; 2017: Distinction <br />
                                    </p>

                                    <p>
                                        <strong>Leadership</strong>: Peer Support Leader (PSL) <br />
                                        <strong>Position</strong>: Logistic EXCO
                                    </p>
                                </SchoolDetails>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Education;