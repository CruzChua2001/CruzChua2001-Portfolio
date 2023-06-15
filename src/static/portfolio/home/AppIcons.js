import React from "react";
import { PersonCircle, Grid, Book, FileCheck } from "react-bootstrap-icons";

import WorkExperienceIcon from "./WorkExperienceIcon";
import { useOverlay } from "../../../../src/Context";
import Navigation from "../../layout/Navigation";

import jsonConfig from "../../../../appsettings.json";

const AppIcons = _ => {
    const navContext = useOverlay();

    return (
        <div className="mt-4 app-icon-flex">
            <div className="text-center app-icon-container">
                <div className="app-icon-topContainer">
                    <div className="app-icon">
                        <a className="app-icon-button clickable" onClick={() => navContext.setPage(Navigation.About)}>
                            <img className="app-icon-img rounded-6" src={jsonConfig.CONFIG.BUCKET_URL + jsonConfig.HOME.IMAGES.ABOUT_BACKGROUND} alt="app-icon-img" /> 
                            <PersonCircle className="app-icon-logo" />
                        </a>
                        <br />
                        <span>About</span>
                    </div>

                    <div className="app-icon">
                        <a className="app-icon-button clickable" onClick={() => navContext.setPage(Navigation.Education)}>
                            <img className="app-icon-img rounded-6" src={jsonConfig.CONFIG.BUCKET_URL + jsonConfig.HOME.IMAGES.EDUCATION_BACKGROUND} alt="app-icon-img" />
                            <Book className="app-icon-logo" />
                        </a>
                        <br />
                        <span>Education</span>
                    </div>
                </div>

                <div className="app-icon-bottomContainer">
                    <div className="app-icon">
                        <a className="app-icon-button clickable" onClick={() => navContext.setPage(Navigation.Certification)}>
                            <img className="app-icon-img rounded-6" src={jsonConfig.CONFIG.BUCKET_URL + jsonConfig.HOME.IMAGES.CERTIFICATION_BACKGROUND} alt="app-icon-img" />
                            <FileCheck className="app-icon-logo" />
                        </a>
                        <br />
                        <span>Certification</span>
                    </div>

                    <div className="app-icon">
                        <a className="app-icon-button clickable" onClick={() => navContext.setPage(Navigation.Projects)}>
                            <img className="app-icon-img rounded-6" src={jsonConfig.CONFIG.BUCKET_URL + jsonConfig.HOME.IMAGES.PROJECT_BACKGROUND} alt="app-icon-img" />
                            <Grid className="app-icon-logo" />
                        </a>
                        <br />
                        <span>Projects</span>
                    </div>
                </div>

                <WorkExperienceIcon size="xs" />
            </div>
            <WorkExperienceIcon size="s" />
        </div>
    )
}

export default AppIcons;