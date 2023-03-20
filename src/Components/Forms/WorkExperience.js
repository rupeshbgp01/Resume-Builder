import React from 'react'
import "./Forms.css"




function WorkExperience({ formData, setFormData }) {

    let name, value;
    
    function handleChange(event) {
        name = event.target.name;
        value = event.target.value;
        setFormData({ ...formData, [name]: value });
    }


    return (

        <div className="wrapper">
            <div className="basic__container">

                <div className="basic__top">
                    <label htmlFor="Work_Experience"><span>Work Experience</span></label>
                    <input type="text" name="Work_Experience" value={formData.WorkExperience} id="Work_Experience" placeholder="Title : Work experience"></input>
                    <br></br>
                </div>

                <div className="basic__middle">
                    <div className="form__container">

                        <label htmlFor="job_title"><p></p></label>
                        <input type="text" placeholder="Job Title" name="wtitle" value={formData.wtitle} onChange={handleChange} ></input>

                        <label htmlFor="company_name"  ><p></p></label>
                        <input type="text" placeholder="Company Name" value={formData.company} name="company" onChange={handleChange}></input>

                        <label htmlFor="certificate"><p> </p></label>
                        <input type="text" placeholder="Certificate link" name='certificate' value={formData.certificate} onChange={handleChange}></input>

                        <label htmlFor="start_date"><p> </p></label>
                        <input type="text" placeholder="Starting date in company" name='startdate' value={formData.startdate} onChange={handleChange}></input>

                        <label htmlFor="end_date"><p> </p></label>
                        <input type="text" placeholder="Ending date in the company" value={formData.enddate}  name="enddate" onChange={handleChange}></input>
                        

                        <label htmlFor="location_type"><p> </p></label>
                        <input type="text" placeholder="Location eg. remote" name='location' value={formData.location} onChange={handleChange}></input>

                        

                    </div>
                    
                </div>

                <div className='basic__bottom'>
                    <input type="text" placeholder="Enter Work discription" name='description' value={formData.description} onChange={handleChange}></input>
                </div>


            </div>


        </div>
    );
}

export default WorkExperience;