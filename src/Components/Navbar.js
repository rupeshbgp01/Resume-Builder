
import "./Navbar.css";
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
            
        <div className="nav__container">
            <ul className="nav__list">
                <li><NavLink  to="/">Basic Info</NavLink></li>
                <li ><NavLink  to="/work">Work Experience</NavLink></li>
                <li ><NavLink  to="/project">Projects</NavLink></li>
                <li ><NavLink  to="/education">Education</NavLink></li>
                <li><NavLink  to="/achievement">Achievement</NavLink></li>
                <li><NavLink  to="/summary">Summary</NavLink></li>
                <li><NavLink  to="/other">Other</NavLink></li>
            </ul>


        </div>
    );
}

export default Navbar;