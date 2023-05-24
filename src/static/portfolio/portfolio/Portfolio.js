import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import jsonConfig from '../../../../appsettings.json';

const Portfolio = _ => {

    const portfolio = jsonConfig.PORTFOLIO.PORTFOLIOS;

    return (
        <Container className="mt-3 mb-3 py-2 pe-md-2 pe-xl-5">
            <div className="row">
                <h1>Past Projects</h1>
                {portfolio.map(item => (
                    <div className="col-12 col-md-5 col-lg-4 col-xl-3 offset-md-1 text-center bg-light shadow py-4 px-3 mb-3" key={item.id}>
                        <img src={jsonConfig.CONFIG.BUCKET_URL+item.thumbnailURL} alt="portfolio image" className="portfolio-image mb-2" />
                        <br />
                        <strong>{item.title}</strong>
                        <br />
                        <span>{item.projectType} @ {item.year}</span>

                        <br />
                        <Button variant="" className="border-none shadow-none p-0 mt-3">Read More...</Button>
                    </div>
                ))}
            </div>
        </Container>
    )
}

export default Portfolio;