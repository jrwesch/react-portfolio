import React from "react";

function Nav() {

    const pages = ["About Me", "Projects", "Resume", "Contact Info"];

        function pageSelected(name) {
            console.log(`${name} selected`);
        }

        return (
            <header>
                <nav>
                    <ul className="nav-list">
                        {pages.map((page) => (
                            <li className="list-item" key={page}>
                                <span onClick={() => pageSelected(page)}>{page}</span>   
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>
        )
}

export default Nav;