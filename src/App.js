import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import Home from "./static/portfolio/home/Home";
import About from "./static/portfolio/about/About";
import PortfolioLayout from './static/layout/PortfolioLayout';
import Education from "./static/portfolio/education/Education";
import WorkExperience from "./static/portfolio/workexperience/WorkExperience";
import Portfolio from "./static/portfolio/portfolio/Portfolio";
import Contact from "./static/portfolio/contact/Contact";
import history from "./static/portfolio/history";

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

const App = _ => {
    return (
        <HashRouter history={history}>
            <Routes>

                <Route path="/" element={<PortfolioLayout />}>
                    <Route exact path="" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/education" element={<Education />} />
                    <Route path="/work_experience" element={<WorkExperience />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/contact" element={<Contact />} />
                </Route>

            </Routes>
        </HashRouter>
    )
}

export default App;