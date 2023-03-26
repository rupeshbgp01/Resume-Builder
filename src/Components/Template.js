import './Template.css'
import { NavLink } from 'react-router-dom'
import template1 from './images/template1.jpeg'
import template2 from './images/template2.jpeg'

export default function Template() {
  
    
    return (
        <div className='template__container'>
            <div className='templates'>

                <NavLink to="/" activeclassname="active_template"><img src={template1} alt="template1" className='template'></img></NavLink>

                <NavLink to="/template2" activeclassname="active_template"><img src={template2} alt="template2" className='template'></img></NavLink>


                <img src={template2} alt="template2" className='template'></img>
                <img src={template1} alt="template1" className='template'></img>
                <img src={template2} alt="template2" className='template'></img>
                <img src={template1} alt="template1" className='template'></img>
                <img src={template2} alt="template2" className='template'></img>
                <img src={template1} alt="template1" className='template'></img>
                <img src={template2} alt="template2" className='template'></img>
                <img src={template1} alt="template1" className='template'></img>
                <img src={template2} alt="template2" className='template'></img>
            </div>

        </div>
    );
}