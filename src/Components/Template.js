import './Template.css'
import template1 from './images/background1.jpg'

export default function Template(){
    return(
        <div className='template__container'>
            <div className='templates'>
                <img src={template1} alt="template1" className='template'></img>
            </div>

        </div>
    );
}