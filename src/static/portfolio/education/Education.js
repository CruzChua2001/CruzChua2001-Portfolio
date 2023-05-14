import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { Container, Button } from 'react-bootstrap';
 
import 'react-vertical-timeline-component/style.min.css';

const Education = _ => {

    const certifications = [
        {
            "imageUrl": "https://cc-portfolio-cruzc-bucket.s3.ap-southeast-1.amazonaws.com/images/AWS_Academy_Cloud_Architecting.png",
            "name": "AWS Academy Cloud Architecting",
            "issuedBy": "Amazon Web Services (AWS)",
            "issuedDate": "Mar 2023",
            "expirationDate": "",
            "url": "https://www.credly.com/badges/4811942b-db61-405e-b43e-8fce18339c97/linked_in_profile"
        },
        {
            "imageUrl": "https://cc-portfolio-cruzc-bucket.s3.ap-southeast-1.amazonaws.com/images/AWS_Academy_Cloud_Developing.png",
            "name": "AWS Academy Cloud Developing",
            "issuedBy": "Amazon Web Services (AWS)",
            "issuedDate": "Mar 2023",
            "expirationDate": "",
            "url": "https://www.credly.com/badges/4811942b-db61-405e-b43e-8fce18339c97/linked_in_profile"
        },
        {
            "imageUrl": "https://cc-portfolio-cruzc-bucket.s3.ap-southeast-1.amazonaws.com/images/AWS_Academy_Cloud_Operations.png",
            "name": "AWS Academy Cloud Operations",
            "issuedBy": "Amazon Web Services (AWS)",
            "issuedDate": "Jan 2023",
            "expirationDate": "",
            "url": "https://www.credly.com/badges/5662abef-b021-4b23-a9c4-d18d25576ea3/linked_in_profile"
        },
        {
            "imageUrl": "https://cc-portfolio-cruzc-bucket.s3.ap-southeast-1.amazonaws.com/images/CS50x.png",
            "name": "CS50x Introduction to Computer Science",
            "issuedBy": "HarvardX",
            "issuedDate": "Dec 2021",
            "expirationDate": "",
            "url": "https://courses.edx.org/certificates/76da7f4627494cf78b1721c5a693c138"
        },
        {
            "imageUrl": "https://cc-portfolio-cruzc-bucket.s3.ap-southeast-1.amazonaws.com/images/Alibaba+Cloud+Associate.png",
            "name": "Alibaba Cloud Associate",
            "issuedBy": "Alibaba Cloud",
            "issuedDate": "Nov 2021",
            "expirationDate": "Nov 2023",
            "url": ""
        },
        {
            "imageUrl": "https://cc-portfolio-cruzc-bucket.s3.ap-southeast-1.amazonaws.com/images/NVIDIA+Fundamentals+of+Deep+Learning.png",
            "name": "Fundamentals of Deep Learning",
            "issuedBy": "NVIDIA",
            "issuedDate": "Sep 2022",
            "expirationDate": "",
            "url": "https://courses.nvidia.com/certificates/53932d08b03140deb09553ec8b90e6ec/"
        }
    ] 

    return (
        <Container className="mb-5 mt-3">
            <div>
                <h1>My Education Background</h1>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(33, 150, 243)' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="Matriculating in 2025"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        //icon={<WorkIcon />}
                    >
                        <div className="text-light">
                            <h3 className="vertical-timeline-element-title">Bachelor</h3>
                            <h3 className="vertical-timeline-element-title">Information Communication Technology (Software Engineering)</h3>
                            <h4 className="vertical-timeline-element-subtitle" style={{ color: "#F2D9BF" }}>Singapore Institute of Technology</h4>
                            <p>
                            Waiting for enlistment...
                            </p>
                        </div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2020 - 2023"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        //icon={<WorkIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Diploma</h3>
                        <h3 className="vertical-timeline-element-title">Information Technology</h3>
                        <h4 className="vertical-timeline-element-subtitle" style={{ color: "grey" }}>Nanyang Polytechnic</h4>
                        
                        <table className="mt-2">
                            <tbody>
                                <tr>
                                    <td>Specialisation:</td>
                                    <td>Enterprise Cloud Computing (AWS)</td>
                                </tr>
                            </tbody>
                        </table>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2018 - 2020"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        //icon={<WorkIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Higher Nitec,</h3>
                        <h3 className="vertical-timeline-element-title">IT Application Development</h3>
                        
                        <h4 className="vertical-timeline-element-subtitle" style={{ color: "grey" }}>ITE College Central</h4>
                        <table className="mt-2">
                            <tbody>
                                <tr>
                                    <td>CCA:</td>
                                    <td>Foosball Club</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Leadership: <strong>Vice-President</strong></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Participation: <strong>ITSF Singapore 2019</strong></td>
                                </tr>
                                <tr>
                                    <td colspan="2"></td>
                                </tr>
                                <tr>
                                    <td>Award:</td>
                                    <td>Director's List 2018</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Director's List 2019</td>
                                </tr>
                            </tbody>
                        </table>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>

            <div className="mt-4 mb-5">
                <h1>My Certification</h1>
                <div className="row mt-3">
                    {certifications.map((item, index) => (
                        <div key={index} className="col-xs-12 col-md-5 col-lg-3 mt-2 pt-3 pb-3 offset-md-1 offset-lg-1 shadow rounded h-100">
                            <img src={item.imageUrl} alt="certificate" className="certificate-image" />
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
        </Container>
    )
}

export default Education;