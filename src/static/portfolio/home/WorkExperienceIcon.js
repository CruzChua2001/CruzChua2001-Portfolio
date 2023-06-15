import React, { useEffect, useRef } from "react";
import { Timeline, Event } from 'react-trivial-timeline';
import { Briefcase } from "react-bootstrap-icons";

import { useOverlay } from "../../../Context";
import Navigation from "../../layout/Navigation";

import jsonConfig from '../../../../appsettings.json';

const WorkExperienceIcon = props => {
    const elementRefs = useRef([]);
    const navContext = useOverlay();

    useEffect(() => {
        const timer = setTimeout(() => {
            elementRefs.current.forEach((ref) => {
                ref.classList.remove("we-animation")
            });
          }, 600);
      
          return () => clearTimeout(timer);
    }, [])

    if(props.size == "xs") {
        return (
            <div className="app-icon weIcon-xs we-animation" ref={(el) => (elementRefs.current[0] = el)}>
                <a className="app-icon-button clickable" onClick={() => navContext.setPage(Navigation.WorkExperience)}>
                    <img className="app-icon-img rounded-6" src="https://cc-portfolio-cruzc-bucket-dev.s3.ap-southeast-1.amazonaws.com/images/experience-icon-background.png" alt="app-icon-img" />
                    <Briefcase className="app-icon-logo" />
                </a>
                <br />
                <strong style={{fontWeight: "bolder"}}>Work Experience</strong>
            </div>
        )
    }

    let workExp = [];
    const allWorkExperience = jsonConfig.HOME.EXPERIENCE;

    if(props.size == "s") {
        workExp.push(allWorkExperience[0])
        workExp.push(allWorkExperience[allWorkExperience.length-1])
    }
    else {
        workExp = allWorkExperience
    }

    return (
        <div className={props.size == "s" ? "p-3 weIcon-sm rounded shadow border-light bg-light clickable we-animation" : "p-3 weIcon rounded shadow border-light bg-light clickable we-animation"} 
            ref={(el) => (elementRefs.current[1] = el)}
            onClick={() => navContext.setPage(Navigation.WorkExperience)}
        >
            <h3>Work <br /> Experience</h3>
            <Timeline lineColor="gray" className="mt-3">
                {workExp.map((exp, index) => (
                    <Event interval={exp.date} key={index}>
                        <h4>{exp.position}</h4>
                        <h5>{exp.company}</h5>
                        <span>{exp.employmentType}</span>
                    </Event>
                ))}
            </Timeline>
        </div>
    )
}

export default WorkExperienceIcon;