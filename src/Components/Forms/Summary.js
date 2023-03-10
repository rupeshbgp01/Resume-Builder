import "./Forms.css"
import Button from "../Buttons/Button"

export default function Summary() {
	return(
        <div className="basic__container">
            <label><p>Title</p></label>
            <input type='text' placeholder='Summary Title'/>
            <label><p>Summary</p></label>
            <input type='text' className="message" placeholder='Write Something'/>
            <div className="basic__bottom">
                <Button title="Prev"/>
                <Button title="Save" />
                <Button title="Next"/>
            </div>
        </div>
    )
}
