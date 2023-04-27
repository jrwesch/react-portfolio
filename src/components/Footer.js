import React from "react";

function Footer() {

    const links = [
        {
            name: 'GitHub',
            url: 'https://github.com/jrwesch'
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/joel-wesch-44050133/'
        }
    ];

    return (
        
        <footer>
            <ul className="nav-list">
                {links.map((link) => (
                    <li className="list-item" key={link.name}>
                        <a href={link.url} target="_blank" rel="noopener noreferrer">{link.name}</a>
                    </li>
                ))}
            </ul>
        </footer>
    );
}

export default Footer;
