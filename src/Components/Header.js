import React from "react";

import resumeSvg from "./images/resume.svg";

import './Header.css';

function Header() {
    return (
        <div className="header__container">
            <div className="left">
                <p className="heading">
                "Unlock your  <span>potential</span> with a powerful resume that stands out from the <span>crowd</span> ."
                    
                </p>
                {/* <p className="heading">
                    Make your own resume. <span>It's free</span>
                </p> */}
            </div>
            <div className="right">
                <img src={resumeSvg} alt="Resume" />
            </div>
            {/* "Unlock your potential with a powerful resume that stands out from the crowd." */}
        </div>
    );
}

export default Header;