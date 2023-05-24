import React from "react";
import { Container } from 'react-bootstrap';

import jsonConfig from '../../../../appsettings.json';

const Home = _ => {
    return (
        <div className="home-container">
            <div className="row w-100 h-100">
                <div className="col-xs-12 col-lg-6 order-xs-first order-lg-last">
                    <div className="image-cropper-home">
                        <img src={jsonConfig.HOME.PROFILE_PIC_URL} alt="avatar" className="profile-picture" width="310px" height="400px" />
                    </div>
                </div>
                <div className="col-xs-12 col-lg-6 home-left-div order-xs-last order-lg-first" style={{paddingLeft: "15%"}}>
                    <Container className="home-left-container text-light">
                        <h1>Hello there, <br /> I am Cruz</h1>
                        <p>{jsonConfig.HOME.GREETING_TEXT}</p>
                    </Container>
                </div>
            </div>
        </div>
    )
}

export default Home;