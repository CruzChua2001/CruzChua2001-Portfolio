import React, { useState } from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
 
import 'react-vertical-timeline-component/style.min.css';
import jsonConfig from '../../../../appsettings.json';

const WorkExperience = _ => {

    const allWorkExperience = jsonConfig.WORKEXPERIENCE.EXPERIENCE;

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