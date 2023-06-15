import React from "react";
import { Person, GeoAlt } from "react-bootstrap-icons";
import { SocialIcon } from "react-social-icons";

import jsonConfig from '../../../../appsettings.json'

const Introduction = _ => {
    return (
        <>
            <div className="introduction-container">
                <h2 style={{ fontWeight: "bolder" }}>
                    Hello, <span style={{color: "#F2F558"}}>Nice to meet you</span>
                    <br />
                    I'm <span style={{color: "#DA8674"}}>Cruz</span>, 
                    <br />
                    a <span style={{color: "#BFF17F"}}>Software Developer</span>
                </h2>
                
                <div>
                    <div className="shadow border-light rounded d-flex bg-light introduction-card">
                        <div className="text-main introduction-card-detail">
                            <span>
                                <Person className="mb-2 me-2 color-red" /> 
                                {jsonConfig.CONFIG.FULL_NAME}
                            </span>
                            <br />
                            <span>
                                <GeoAlt className="mb-2 me-2 color-red" />
                                {jsonConfig.CONFIG.LOCATION}                          
                            </span>
                            <br />
                            <span>
                                <SocialIcon network="github" url={jsonConfig.CONFIG.GITHUB_URL} target="_blank" className="me-2" />
                                <SocialIcon network="linkedin" url={jsonConfig.CONFIG.LINKEDIN_URL} target="_blank" />
                            </span>
                        </div>

                        <div className="image-cropper-home">
                            <img src={jsonConfig.CONFIG.BUCKET_URL+jsonConfig.HOME.PROFILE_PIC_URL} alt="avatar" className="profile-picture" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Introduction;