import React from "react";
import "./Navbar.css";
import { NavLink } from 'react-router-dom'
import Button from "./Buttons/Button";

function Navbar() {

    return (
        <div className="nav__container">
            <ul className="nav__list">
                <li><NavLink to="/" activeclassname="active">Basic Info</NavLink></li>
                <li><NavLink to="/links" activeclassname="active">Links</NavLink></li>
                <li><NavLink to="/skills" activeclassname="active">Skills</NavLink></li>
                <li><NavLink to="/education" activeclassname="active">Education</NavLink></li>
                <li><NavLink to="/work" activeclassname="active">Experience</NavLink></li>
                <li><NavLink to="/project" activeclassname="active">Projects</NavLink></li>
                <li><NavLink to="/achievement" activeclassname="active">Achievement</NavLink></li>
                <li><NavLink to="/summary" activeclassname="active">Other</NavLink></li>
                {/* <div className="next_prev_btn_section">
                    <Button title="&#8249; Prev" />
                    <Button title="Next &#8250;" />
                </div> */}
            </ul>


        </div>
    );
}


export default Navbar;