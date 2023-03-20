import React from "react";


import Button from "./Buttons/Button";
import './FrontPage.css';
import { Link } from 'react-router-dom'

function FrontPage() {

    
    return (
        <div className="frontpage__container">
            <div className="frontpage_background_pattern"></div>
            <div className="left">
                <p className="heading">
                    Unlock your  <span>potential</span> with a powerful <span>resume</span> that stands out from the crowd.
                </p>

                <div className="create_btn">
                    <Link to="/create"><Button title="Create New Resume" /></Link> 
                </div>
            </div>
            
        </div>
    );
}

export default FrontPage;