import React from "react";

import Home from "./static/portfolio/home/Home";
import DisplayOverlay from "./static/layout/DisplayOverlay";
import { NavigationProvider } from "./Context";

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import './style/style.scss'

const App = _ => {
    return (
        <>
            <NavigationProvider>
                <Home />

                <DisplayOverlay />
            </NavigationProvider>
        </>
    )
}

export default App;