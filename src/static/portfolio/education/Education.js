import React, { useState } from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { MortarboardFill, FileEarmarkCheckFill } from "react-bootstrap-icons";
import styled from "styled-components";
 
import 'react-vertical-timeline-component/style.min.css';
import jsonConfig from '../../../../appsettings.json';

const Pills = styled.div`
    padding: 1em;
    border-radius: 16px;
    width: 600px;
    background-color: white;
    margin: 0 auto;
    text-align: center;

    @media (max-width: 750px) {
        width: 250px;

        .pill-text {
            display: none;
        }

        .pill-icon {
            width: 30px;
            height: 30px;
        }

        .pill-tabs-1{
            margin-right: 5%;
        }
        .pill-tabs-2{
            margin-left: 5%;
        }
    }
`

const Education = _ => {
    const [tabs, setTabs] = useState(1);

    return (
        <>
            <Container className="mb-5 mt-3">
                {tabs == 1 && (
                    <div>
                        <h1>My Education Background</h1>
                        <VerticalTimeline>

                            {jsonConfig.EDUCATION.EDUCATION_BACKGROUND.map((item, index) => (
                                <VerticalTimelineElement
                                    className="vertical-timeline-element--work"
                                    contentStyle={item.LATEST ? { background: 'rgb(33, 150, 243)' } : { background: '#FFF', color: '#000' }}
                                    contentArrowStyle={item.LATEST ? { borderRight: '7px solid  rgb(33, 150, 243)' } : {}}
                                    date={item.DATE}
                                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                    key={index}
                                    //icon={<WorkIcon />}
                                >
                                    <div className={item.LATEST ? "text-light" : ""}>
                                        <h3 className="vertical-timeline-element-title">{item.CERTIFICATION_LEVEL}</h3>
                                        <h3 className="vertical-timeline-element-title">{item.COURSE}</h3>
                                        <h4 className="vertical-timeline-element-subtitle" style={item.LATEST ? { color: "#F2D9BF" } : {color: "grey"}}>{item.SCHOOL}</h4>
                                        <p>
                                            {item.STATUS}
                                        </p>
                                    </div>
                                </VerticalTimelineElement>
                            ))}
                        </VerticalTimeline>
                    </div>
                )}
                
                {tabs == 2 && (
                    <div className="mt-4 mb-5">
                        <h1>My Certification</h1>
                        <div className="row mt-3">
                            {jsonConfig.EDUCATION.CERTIFICATIONS.map((item, index) => (
                                <div key={index} className="col-xs-12 col-md-5 col-lg-3 mt-2 pt-3 pb-3 offset-md-1 offset-lg-1 shadow rounded h-100">
                                    <img src={jsonConfig.CONFIG.BUCKET_URL+item.imageUrl} alt="certificate" className="certificate-image" />
                                    <div className="mt-2">
                                        <strong>{item.name}</strong> <br />
                                        <span>{item.issuedBy}</span> <br />
                                        <span>
                                            Issued {item.issuedDate} 
                                            {item.expirationDate != "" && 
                                                <span> · Expires {item.expirationDate}</span>
                                            }
                                        </span>
                                        <br />
                                        {item.url != "" &&
                                            <a href={item.url} target="_blank"><Button className="mt-2 border shadow-none" variant="">Show Credentials</Button></a>
                                        }
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                
            </Container>
            

            <div style={{bottom: "20px", position: "fixed", width: "100%"}}>
                <Pills className="border shadow">
                    <a className="me-3 pill-tabs pill-tabs-1 text-dark" onClick={() => setTabs(1)}>
                        <MortarboardFill className="pill-icon mb-1 me-2" size={25} />
                        <span className="pill-text">Education Background</span>
                    </a>
                    <span>|</span>
                    <a className="ms-3 pill-tabs pill-tabs-2 text-dark" onClick={() => setTabs(2)}>
                        <FileEarmarkCheckFill className="pill-icon mb-1 me-2" size={25} />
                        <span className="pill-text">Certifications</span>
                    </a>
                </Pills>
            </div>
        </>
    )
}

export default Education;