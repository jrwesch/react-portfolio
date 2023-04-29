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
        name: "ReadMe Generator",
        liveURL: "",
        gitURL: "https://github.com/jrwesch/readme-generator",
        tech: "HTML/CSS/JavaScript/Node.js",
        style: "readme-generator"   
    }
    

] 

const Projects = () => (
    
    <div>
        <h1>Projects</h1>
            {projects.map(project => (
                <div class={project.style}>
                    <a href={project.liveURL} target="_blank" rel="noopener noreferrer" 
                        key={project.name}>{project.name}</a>

                    <a href={project.gitURL} target="_blank" rel="nooperner noreferrer">GitHub Repo</a>

                    <p>{project.tech}</p>
                </div>
        ))}
    </div>

    
    



//export default Projects;