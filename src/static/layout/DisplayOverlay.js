import React from "react";
import { ArrowLeft } from "react-bootstrap-icons";

import { useOverlay } from "../../Context";
import Navigation from '../layout/Navigation'

const DisplayOverlay = _ => {
    const navContext = useOverlay();

    const BackButton = _ => {
        return (
            <div className="back-button clickable" onClick={() => navContext.setPage(Navigation.Home)}>
                <ArrowLeft className="back-button-icon" size={35} />
            </div>
        )
    }

    return (
        <>
            {navContext.page != Navigation.Home && (
                <div className="overlay-container">
                    <div className="background-disable overlay-animation"></div>
                    <div className="display-item overlay-animation">
                        <BackButton />
                    </div>
                </div>
            )}
        </>
    )
}

export default DisplayOverlay;