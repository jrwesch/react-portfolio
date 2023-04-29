import React from "react";

function Nav(props) {

    const tabs = ["About Me", "Projects", "Resume", "Contact Info"];

        return (
            <ul className="nav-list">
                {tabs.map(tab => (
                    <li className="list-item" key={tab}>
                        <a href={'#' + tab.toLowerCase()}
                        
                        // when a tab is selected, current page sent through handlePageChange
                        onClick={() => props.setCurrentPage(tab)}
                        className={props.currentPage === tab ? 'navActive' : 'nav-link'}>
                            {tab}
                        </a>
                    </li>
                ))}
            </ul>
        );
}

export default Nav;