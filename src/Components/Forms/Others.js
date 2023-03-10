import "./Forms.css"
import Button from "../Buttons/Button"

export default function Others() {
	return(
        <div className='basic__container'>
            <label><p>Title</p></label>
            <input type='text' placeholder='Other Other'/>
            <label><p>Other Detail</p></label>
            <input type='text' className="message" placeholder='Write Something'/>
            <div className="basic__bottom">
                <Button title="Prev"/>
                <Button title="Save" />
                <Button title="Next"/>
            </div>
        </div>
    )
}
