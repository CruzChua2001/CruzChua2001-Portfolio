import React, { useState } from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import Container from 'react-bootstrap/Container';
import styled from "styled-components";
 
import 'react-vertical-timeline-component/style.min.css';
import jsonConfig from '../../../../appsettings.json';

const Heading = styled.h1`
    color: yellow;
`

const SkillsTab = styled.div`
    color: rgba(0, 0, 0, 0.87);
    height: 32px;
    cursor: default;
    border: none;
    display: inline-flex;
    outline: none;
    padding-block: 3px;
    padding-inline: 10px;
    font-size: 0.8125rem;
    transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    align-items: center;
    white-space: nowrap;
    border-radius: 16px;
    justify-content: center;
    text-decoration: none;
    margin-right: 7px;
    margin-top: 4px;
`

const WorkExperience = _ => {

    const allWorkExperience = jsonConfig.WORKEXPERIENCE.EXPERIENCE;

    return (
        <div className="workex-container container">
            <Container className="mt-5">
                <Heading>Work Experience</Heading>
                <VerticalTimeline>
                    

                    {allWorkExperience.map(item => {
                        if(!item.current) {
                            return (
                                <VerticalTimelineElement
                                key={item.id}
                                className="vertical-timeline-element--work"
                                date={item.date}
                                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#000' }}
                                //icon={<WorkIcon />}
                                >
                                    <div className="text-dark">
                                        <div className="d-flex flex-wrap mb-3">
                                            {item.skills.map((skill, index) => (
                                                <SkillsTab style={{ backgroundColor: "#e0e0e0" }} key={index}>{skill}</SkillsTab>
                                            ))}
                                        </div>  

                                        <h3 className="vertical-timeline-element-title">{item.position}</h3>
                                        <h6 className="vertical-timeline-element-title">{item.company}</h6>
                                        <span className="vertical-timeline-element-subtitle" style={{ color: "grey" }}>{item.employmentType}</span>
                                        
                                        {item.description.map((desc, index) => (
                                            <p className="work-desc" key={index}>&middot; {desc}</p>
                                        ))}
                                    </div>
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
                                        <div className="d-flex flex-wrap mb-3">
                                            {item.skills.map((skill, index) => (
                                                <SkillsTab className="bg-light" key={index}>{skill}</SkillsTab>
                                            ))}
                                        </div>  

                                        <h3 className="vertical-timeline-element-title">{item.position}</h3>
                                        <h6 className="vertical-timeline-element-title">{item.company}</h6>
                                        <span className="vertical-timeline-element-subtitle" style={{ color: "#F2D9BF" }}>{item.employmentType}</span>
                                    
                                        {item.description.map((desc, index) => (
                                            <p className="work-desc" key={index}>&middot; {desc}</p>
                                        ))}
                                    </div>
                                </VerticalTimelineElement>
                            )
                        }
                    })}
                    
                </VerticalTimeline>
            </Container>
        </div>
    )
}

export default WorkExperience;