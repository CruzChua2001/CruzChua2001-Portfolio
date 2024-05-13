import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import styled from "styled-components";
import { DiHtml5, DiCss3, DiJavascript, DiResponsive, DiBootstrap, DiReact, DiJqueryLogo, DiPhp, DiPython, DiJava, DiSwift, DiNodejs, DiNetmagazine, DiDatabase, DiMysql, DiGithubBadge, DiAws, DiGoogleCloudPlatform, DiTerminal, DiVisualstudio } from "react-icons/di";

import jsonConfig from '../../../../appsettings.json';

const Hr = styled.div`
    border: 1px solid #A5A1A1; 
    width: 75%;
    margin: 2em auto;
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
                <h2 className="fw-bolder">"I design <c style={{color: "#FDDA82"}}>solution</c> to your <c style={{color: "#EA1C1C"}}>problems</c>,</h2>
                <h2 className="fw-bolder">combining <c style={{color: "#A57A6D"}}>simplicity</c> and <c style={{color: "#A57A6D"}}>efficiency</c>."</h2>
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

            <div className="about-header py-3">
                <Heading>Skills</Heading>
                <Row>
                    <Col xs="12" lg>
                        <Row className="border p-3">
                            <Col xs="12" md="4" lg="12"><h3 style={{color: "#B6AECB"}}>Front-end</h3></Col>
                            <Col xs="12" md="8" lg="12">
                                <a href="https://www.w3schools.com/html/default.asp" className="clickable" target="_blank"><DiHtml5 color="white" size="75px" /></a>
                                <a href="https://www.w3schools.com/cssref/index.php" className="clickable" target="_blank"><DiCss3 color="white" size="75px" /></a>
                                <a href="https://www.w3schools.com/js/default.asp" className="clickable" target="_blank"><DiJavascript color="white" size="75px" /></a>
                                <a href="https://www.w3schools.com/jquery/default.asp" className="clickable" target="_blank"><DiJqueryLogo color="white" size="75px" /></a>
                                <a href="https://www.w3schools.com/react/default.asp" className="clickable" target="_blank"><DiReact color="white" size="75px" /></a>
                                <a href="https://www.w3schools.com/bootstrap/bootstrap_ver.asp" className="clickable" target="_blank"><DiBootstrap color="white" size="75px" /></a>
                                <a href="https://www.w3schools.com/html/html_responsive.asp" className="clickable" target="_blank"><DiResponsive color="white" size="75px" /></a>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs="12" lg>
                        <Row className="border p-3">
                            <Col xs="12" md="4" lg="12"><h3 style={{color: "#B6AECB"}}>Back-end</h3></Col>
                            <Col xs="12" md="8" lg="12">
                                <a href="https://www.w3schools.com/php/default.asp" className="clickable" target="_blank"><DiPhp color="white" size="75px" /></a>
                                <a href="https://www.w3schools.com/python/default.asp" className="clickable" target="_blank"><DiPython color="white" size="75px" /></a>
                                <a href="https://www.w3schools.com/java/default.asp" className="clickable" target="_blank"><DiJava color="white" size="75px" /></a>
                                <a href="https://www.swift.org/documentation/" className="clickable" target="_blank"><DiSwift color="white" size="75px" /></a>
                                <a href="https://nodejs.org/docs/latest/api/" className="clickable" target="_blank"><DiNodejs color="white" size="75px" /></a>
                                <a href="https://learn.microsoft.com/en-us/dotnet/" className="clickable" target="_blank"><DiNetmagazine color="white" size="75px" /></a>
                                <a href="https://dbdocs.io" className="clickable" target="_blank"><DiDatabase color="white" size="75px" /></a>
                                <a href="https://dev.mysql.com/doc/" className="clickable" target="_blank"><DiMysql color="white" size="75px" /></a>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs="12" lg>
                        <Row className="border p-3">
                            <Col xs="12" md="4" lg="12"><h3 style={{color: "#B6AECB"}}>Others</h3></Col>
                            <Col xs="12" md="8" lg="12">
                                <a href="https://github.com" className="clickable" target="_blank"><DiGithubBadge color="white" size="75px" /></a>
                                <a href="https://aws.amazon.com" className="clickable" target="_blank"><DiAws color="white" size="75px" /></a>
                                <a href="https://cloud.google.com" className="clickable" target="_blank"><DiGoogleCloudPlatform color="white" size="75px" /></a>
                                <a href="https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/windows-commands" target="_blank" className="clickable"><DiTerminal color="white" size="75px" /></a>
                                <a href="https://visualstudio.microsoft.com" className="clickable" target="_blank"><DiVisualstudio color="white" size="75px" /></a>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>

            <Hr />

            <div className="text-center pt-3">
                <Heading>Contact</Heading>

                <p className="text-light"><a href={"mailto:" + jsonConfig.CONFIG.EMAIL} className="text-light">{jsonConfig.CONFIG.EMAIL}</a></p>
                <p className="text-light"><a href={"tel:" + jsonConfig.CONFIG.PHONE_LINK} className="text-light">{jsonConfig.CONFIG.PHONE}</a></p>
                <p>{jsonConfig.CONFIG.ADDRESS}</p>
            </div>
        </div>
        
    )
}

export default About;