import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import Home from "./static/portfolio/home/Home";
import PortfolioLayout from './static/layout/PortfolioLayout';
import history from "./static/portfolio/history";

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

const App = _ => {
    return (
        <HashRouter history={history}>
            <Routes>

                <Route path="/" element={<PortfolioLayout />}>
                    <Route path="/" element={<Home />} />
                </Route>

            </Routes>
        </HashRouter>
    )
}

export default App;