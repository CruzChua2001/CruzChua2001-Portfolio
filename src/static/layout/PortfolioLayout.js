import React from "react";
import { Outlet } from "react-router-dom";

import PortfolioNav from "../portfolio/PortfolioNav";
import PortfolioFooter from "../portfolio/PortfolioFooter";

const PortfolioLayout = _ => {
    return (
        <>
            <PortfolioNav />

            <Outlet />

            <PortfolioFooter />
        </>
    )
}

export default PortfolioLayout;