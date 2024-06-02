import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import styled from "styled-components";
import { BoxArrowUpRight } from 'react-bootstrap-icons';

const Heading = styled.h1`
    color: yellow;
`

const CertificationGroup = styled.div`
    background-color: white;
    color: black;
    width: 100%;
    padding: 7px;
    border-radius: 4px;
    margin-top: 30px;
`

const SmallText = styled.span`
    color: #D4D4D4;
    font-size: 12px;
`

const BigText = styled.span`
    color: #A57A6D;
    font-size: 18px;
`
const CertificationCompany = styled.div`
    border-right: 1px solid #D4D4D4;
    padding-right: 5px;
    width: 175px; 
    padding-left: 5px;
    margin-right: 5px;

    @media screen and (max-width: 767px) {
        border-right: 0;
        padding-right: 0;
        border-bottom: 1px solid #D4D4D4;
        width: 100%;
        padding-bottom: 5px;
        margin-bottom: 10px;
        height: 200px;
    }
`

const CredentialButton = styled.button`
    background-color: white;
    border: 2px solid #D4D4D4;
    border-radius: 4px;
    font-size: 15px;
    padding-top: 5px;

    &:hover {
        background-color: #D4D4D4;
        cursor: pointer;
    }
`

const Certification = _ => {
    return (
        <div className="certification-container">
            <Container className="my-5">
                <Heading className="text-center">My Certification</Heading>

                <CertificationGroup>
                    <Row>
                        <Col s="12" md="3" xl="2">
                            <div className="position-relative justify-content-center align-items-center d-flex text-center">
                                <CertificationCompany>
                                    <img width="150px" height="150px" />
                                    <br />
                                    <SmallText>provided by</SmallText> <BigText>Google</BigText>
                                </CertificationCompany>
                            </div>
                        </Col>
                        <Col s="12" md="9" xl="10">
                            <div className="d-flex ps-1 pt-2">
                                <div className="text-center me-3">
                                    <img width="200px" height="150px" alt="" className="border" />
                                    <br />
                                    <span>Google XXXXX</span>
                                    <br />
                                    <CredentialButton>Show Credentials <BoxArrowUpRight className="mb-1" /> </CredentialButton>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </CertificationGroup>
            </Container>
        </div>
    )
}

export default Certification;