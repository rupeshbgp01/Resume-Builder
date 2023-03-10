import "./Forms.css";
import Button from "../Buttons/Button";

function Achievement(){
    return (
        <div  className="basic__container">
            <div className="basic__top">
                <label htmlFor="basic__title"  name="basic__title"><span> Achievement Title</span></label>
                <input type="text"  id="basic__title" placeholder="Achievement"></input>
            </div>
            <div className="middle__left">
                <h4>List of Achievements</h4>
                <input type="text" placeholder="Level 1"></input>
                <input type="text" placeholder="Level 2"></input>
                <input type="text" placeholder="Level 3"></input>
                <input type="text" placeholder="Level 4"></input>
            </div>
            <div className="basic__bottom">
                <Button title="Prev"/>
                <Button title="Save" />
                <Button title="Next"/>
            </div>
        </div>
    );
}

export default Achievement;