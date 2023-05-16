import React from "react";


const projects = [
    {
        name: "Password Challenge",
        liveURL: "https://jrwesch.github.io/password-challenge/",
        gitURL: "https://github.com/jrwesch/password-challenge",
        tech: "HTML/CSS/JavaScript",
        style: "password-challenge"
    },
    {
        name: "JavaScript Quiz Challenge",
        liveURL: "https://jrwesch.github.io/javascript-quiz-challenge/",
        gitURL: "https://github.com/jrwesch/javascript-quiz-challenge",
        tech: "HTML/CSS/JavaScript",
        style: "js-quiz-challenge"  
    },
    {
        name: "Work Day Scheduler",
        liveURL: "jrwesch.github.io/workday-scheduler/",
        gitURL: "https://github.com/jrwesch/workday-scheduler",
        tech: "HTML/CSS/JavaScript/JQuery",
        style: "work-day-scheduler"  
    },
    {
        name: "U-Fit Final Project",
        liveURL: "https://pure-savannah-65137.herokuapp.com/",
        gitURL: "https://github.com/sampaul10/Fitness-Tracker",
        tech: "",
        style: "u-fit"
       
    },
    {
        name: "ReadMe Generator",
        liveURL: "",
        gitURL: "https://github.com/jrwesch/readme-generator",
        tech: "HTML/CSS/JavaScript/Node.js",
        style: "readme-generator"   
        
    }
    

] 

const Projects = () => (
    
    <section>
        <h2 className="section-header">Projects</h2>
            <div className="project-wrapper">
                {projects.map(project => (
                <div className={`${project.style} project-item`} key={project.name}>
                    <div className="project-header">
                    <a href={project.liveURL} target="_blank" rel="noopener noreferrer" >{project.name}</a>

                    <a href={project.gitURL} target="_blank" rel="nooperner noreferrer">GitHub Repo</a>
                    </div>

                    <p className="project-tech">{project.tech}</p>
                </div>
        ))}
            </div>
            
    </section>
);
    
    



export default Projects;