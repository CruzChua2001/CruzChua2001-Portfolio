import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import styled from "styled-components";
import { DiHtml5, DiCss3, DiJavascript, DiResponsive, DiBootstrap, DiReact, DiJqueryLogo, DiPhp, DiPython, DiJava, DiSwift, DiNodejs, DiNetmagazine, DiDatabase, DiMysql, DiGithubBadge, DiAws, DiGoogleCloudPlatform, DiTerminal, DiVisualstudio } from "react-icons/di";

import jsonConfig from '../../../../appsettings.json';

const Hr = styled.div`
    border: 1px solid #A5A1A1; 
    width: 75%;
    margin: 1em auto;
`

const Heading = styled.h1`
    color: yellow;
`

const About = _ => {
    return (
        <div className="about-container">
            <div className="image-cropper-about">
                <img src={jsonConfig.CONFIG.BUCKET_URL+jsonConfig.ABOUT.IMAGE_URL} alt="avatar" className="about-picture" />
                <h2 className="image-text">About Me</h2>
            </div>

            <div className="about-quote">
                <h2>"I design <c style={{color: "#FDDA82"}}>solution</c> to your <c style={{color: "#EA1C1C"}}>problems</c>,</h2>
                <h2>combining <c style={{color: "#A57A6D"}}>simplicity</c> and <c style={{color: "#A57A6D"}}>efficiency</c>."</h2>
            </div>

            <Hr />

            <div className="text-center">
                <Heading>Status</Heading>
                <span>{jsonConfig.ABOUT.CURRENT_STATUS}</span>
            </div>

            <Hr />

            <div className="about-header pt-3">
                <Heading>Background</Heading>
                <article>
                    {jsonConfig.ABOUT.PARAGRAPHS.map((item,index) => (
                        <p key={index}>{item}</p>
                    ))}
                </article>
            </div>

            <div className="about-header pt-3">
                <Heading>Skills</Heading>
                <Row>
                    <Col xs="12" lg>
                        <Row className="border p-3">
                            <Col xs="12" md="4" lg="12"><h3 style={{color: "#5874BC"}}>Front-end</h3></Col>
                            <Col xs="12" md="8" lg="12">
                                <a href=""><DiHtml5 color="white" size="75px" /></a>
                                <a href=""><DiCss3 color="white" size="75px" /></a>
                                <a href=""><DiJavascript color="white" size="75px" /></a>
                                <a href=""><DiJqueryLogo color="white" size="75px" /></a>
                                <a href=""><DiReact color="white" size="75px" /></a>
                                <a href=""><DiBootstrap color="white" size="75px" /></a>
                                <a href=""><DiResponsive color="white" size="75px" /></a>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs="12" lg>
                        <Row className="border p-3">
                            <Col xs="12" md="4" lg="12"><h3 style={{color: "#5874BC"}}>Back-end</h3></Col>
                            <Col xs="12" md="8" lg="12">
                                <a href=""><DiPhp color="white" size="75px" /></a>
                                <a href=""><DiPython color="white" size="75px" /></a>
                                <a href=""><DiJava color="white" size="75px" /></a>
                                <a href=""><DiSwift color="white" size="75px" /></a>
                                <a href=""><DiNodejs color="white" size="75px" /></a>
                                <a href=""><DiNetmagazine color="white" size="75px" /></a>
                                <a href=""><DiDatabase color="white" size="75px" /></a>
                                <a href=""><DiMysql color="white" size="75px" /></a>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs="12" lg>
                        <Row className="border p-3">
                            <Col xs="12" md="4" lg="12"><h3 style={{color: "#5874BC"}}>Others</h3></Col>
                            <Col xs="12" md="8" lg="12">
                                <a href=""><DiGithubBadge color="white" size="75px" /></a>
                                <a href=""><DiAws color="white" size="75px" /></a>
                                <a href=""><DiGoogleCloudPlatform color="white" size="75px" /></a>
                                <a href=""><DiTerminal color="white" size="75px" /></a>
                                <a href=""><DiVisualstudio color="white" size="75px" /></a>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
        
    )
}

export default About;