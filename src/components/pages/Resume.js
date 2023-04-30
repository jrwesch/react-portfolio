import React from "react";
import resume from "../../assets/pdf/wesch_portfolio_resume.pdf";

const resumeName = resume.split('/')[3].split('.')[0].concat('.pdf')
//this makes it possible to have change the resume file and not have to change code in this file. The name is not hardcoded so 
//it should just grab whatever pdf is in that folder

const Resume = () => (
    <section>
        <h2 className="section-header">My Resume</h2>
        <p className="download-link"> Download -- <a href={resume} download={resumeName}>My Resume</a></p>

        <h3 className="list-header">Front-End Proficiencies</h3>
            <ul className="prof-list">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>Responsive Design</li>
                <li>React</li>
                <li>Bootstrap</li>
                <li>Bulma</li>    
            </ul>

        <h3 className="list-header">Back-End Proficiencies</h3>
            <ul className="prof-list">
                <li>APIs</li>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL</li>
                <li>MongoDB</li>
                <li>REST</li>    
            </ul>  
    </section>     

    

);

export default Resume;