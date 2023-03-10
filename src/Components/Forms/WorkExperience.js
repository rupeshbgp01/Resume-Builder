import "./Forms.css"
import Button from "../Buttons/Button";
function WorkExperience() {
    return (
        <div className="basic__container">
            <div className="basic__top">
                <label htmlFor="basic__title"><span>Work Experience</span></label>
                <input type="text" name="basic__title" id="basic__title" placeholder="Title : Basic Information"></input>
            </div>
            <div className="basic__middle">
                <div className="middle__left">
                    <label htmlFor="job_title"><p>Title </p></label>
                    <input type="text" placeholder="Title"></input>
                    <label htmlFor="certificate"><p>Certificate </p></label>
                    <input type="text" placeholder="Certificate link"></input>
                    <label htmlFor="start_date"><p>Start Date </p></label>
                    <input type="date" placeholder="Starting date in company"></input>
                </div>
                <div className="middle__right">
                    <label htmlFor="company_name"><p>Company Name </p></label>
                    <input type="text" placeholder="Company Name"></input>
                    <label htmlFor="location_type"><p>Location </p></label>
                    <input type="text" placeholder="Location eg. remote"></input>
                    <label htmlFor="end_date"><p>End Date </p></label>
                    <input type="date" placeholder="Ending date in the company"></input>
                </div>
            </div>
            <div>
            <input type="text" placeholder="Enter Work discription"></input>
            </div>
            <div>
            <input type="text" placeholder="Enter Work discription"></input>
            </div>
            <div className="basic__bottom">
                <Button title="Prev" />
                <Button title="Save" />
                <Button title="Next" />
            </div>
        </div>
    );
}

export default WorkExperience;