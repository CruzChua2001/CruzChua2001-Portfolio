import React, { useState } from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
 
import 'react-vertical-timeline-component/style.min.css';

const WorkExperience = _ => {

    const allWorkExperience = [
        {
            "id": 6,
            "current": true,
            "date": "08/2022 - Present",
            "position": "Software Developer",
            "employmentType": "Contract",
            "company": "Urban Redevelopment Authority of Singapore (URA)",
            "projects": {
                "images": [],
                "project": [
                    {
                        "images": [],
                        "name": "",
                        "description": ""
                    }
                ]
            }
        },
        {
            "id": 5,
            "current": false,
            "date": "03/2022 - 08/2022",
            "position": "Software Developer",
            "employmentType": "Internship",
            "company": "Urban Redevelopment Authority of Singapore (URA)",
            "projects": {
                "images": [],
                "project": [
                    {
                        "images": [],
                        "name": "",
                        "description": ""
                    }
                ]
            }
        },
        {
            "id": 4,
            "current": false,
            "date": "07/2021 - 03/2022",
            "position": "Healthcare Assistant",
            "employmentType": "Part-time",
            "company": "Parkway Shenton Pte Ltd",
            "projects": {
                "images": [],
                "project": [
                    {
                        "images": [],
                        "name": "",
                        "description": ""
                    }
                ]
            }
        },
        {
            "id": 3,
            "current": false,
            "date": "12/2020 - 04/2021",
            "position": "Warehouse Assistant",
            "company": "J&T Express Singapore",
            "employmentType": "Part-time",
            "projects": {
                "images": [],
                "project": [
                    {
                        "images": [],
                        "name": "",
                        "description": ""
                    }
                ]
            }
        },
        {
            "id": 2,
            "current": false,
            "date": "01/2018 - 02/2020",
            "position": "Food and Beverage Server",
            "employmentType": "Part-time",
            "company": "Tanyu",
            "projects": {
                "images": [],
                "project": [
                    {
                        "images": [],
                        "name": "",
                        "description": ""
                    }
                ]
            }
        },
        {
            "id": 1,
            "current": false,
            "date": "09/2019 - 12/2019",
            "position": "Web Developer (PHP)",
            "employmentType": "Internship",
            "company": "CYC Movers Pte Ltd",
            "projects": {
                "images": [],
                "project": [
                    {
                        "images": [],
                        "name": "",
                        "description": ""
                    }
                ]
            }
        },
    ]

    const [workSelect, setWorkSelect] = useState({});
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false) && setWorkSelect({});
    const handleShow = () => setShow(true);

    const openDialog = workId => {
        setWorkSelect(allWorkExperience.filter(x => x.id == workId)[0])
        handleShow()
    }

    return (
        <Container className="mb-5 mt-3">
            <div>
                <h1>My Work Experience</h1>
                <VerticalTimeline>
                    

                    {allWorkExperience.map(item => {
                        if(!item.current) {
                            return (
                                <VerticalTimelineElement
                                key={item.id}
                                className="vertical-timeline-element--work"
                                date={item.date}
                                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                //icon={<WorkIcon />}
                                >
                                    <h3 className="vertical-timeline-element-title">{item.position}</h3>
                                    <h6 className="vertical-timeline-element-title">{item.company}</h6>
                                    <span className="vertical-timeline-element-subtitle" style={{ color: "grey" }}>{item.employmentType}</span>
                                
                                    <br />

                                    <Button variant="" className="mt-3 d-block shadow-none border-none p-0" onClick={() => openDialog(item.id)}>View more details {'>'}{'>'} </Button>
                                </VerticalTimelineElement>
                            )
                        }
                        else {
                            return (
                                <VerticalTimelineElement
                                    key={item.id}
                                    className="vertical-timeline-element--work"
                                    contentStyle={{ background: 'rgb(33, 150, 243)' }}
                                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                                    date={item.date}
                                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                    //icon={<WorkIcon />}
                                >
                                    <div className="text-light">
                                        <h3 className="vertical-timeline-element-title">{item.position}</h3>
                                        <h6 className="vertical-timeline-element-title">{item.company}</h6>
                                        <span className="vertical-timeline-element-subtitle" style={{ color: "#F2D9BF" }}>{item.employmentType}</span>

                                        <br />

                                        <Button variant="" className="mt-3 shadow-none border-none p-0 text-light" onClick={() => openDialog(item.id)}>View more details {'>'}{'>'} </Button>
                                    </div>
                                </VerticalTimelineElement>
                            )
                        }
                    })}
                    
                </VerticalTimeline>
                
                <Modal show={show} onHide={handleClose} size={'xl'}>
                    <Modal.Header closeButton>
                    <Modal.Title>{workSelect.position} <small style={{fontSize: "13px"}}>{workSelect.employmentType}</small></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Testing</Modal.Body>
                </Modal>
                
            </div>
        </Container>
    )
}

export default WorkExperience;