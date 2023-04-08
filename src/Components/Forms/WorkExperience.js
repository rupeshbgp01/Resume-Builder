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
                    {/* <input type="text" name="Work_Experience" value={formData.WorkExperience} id="Work_Experience" placeholder="Title : Work experience"></input>
                    <br></br> */}
                </div>
                



                <fieldset>
                    <legend>Experience 1</legend>
                    <div className="basic__middle">
                        <div className="form__container">

                            <label htmlFor="job_title"><p></p></label>
                            <input type="text" placeholder="Job Title" name="wtitle1" value={formData.wtitle1} onChange={handleChange} ></input>

                            <label htmlFor="company_name"  ><p></p></label>
                            <input type="text" placeholder="Company Name" value={formData.company1} name="company1" onChange={handleChange}></input>

                            <label htmlFor="certificate"><p> </p></label>
                            <input type="text" placeholder="Certificate link" name='certificate1' value={formData.certificate1} onChange={handleChange}></input>

                            <label htmlFor="start_date"><p> </p></label>
                            <input type="text" placeholder="Starting date in company" name='startdate1' value={formData.startdate1} onChange={handleChange}></input>

                            <label htmlFor="end_date"><p> </p></label>
                            <input type="text" placeholder="Ending date in the company" value={formData.enddate1} name="enddate1" onChange={handleChange}></input>


                            <label htmlFor="location_type"><p> </p></label>
                            <input type="text" placeholder="Location eg. remote" name='location1' value={formData.location1} onChange={handleChange}></input>



                        </div>

                    </div>

                    <div className='basic__bottom'>
                        <input type="text" placeholder="Enter Work discription" name='description1' value={formData.description1} onChange={handleChange}></input>
                    </div>
                </fieldset>



                <fieldset>
                    <legend>Experience 2</legend>
                    <div className="basic__middle">
                        <div className="form__container">

                            <label htmlFor="job_title"><p></p></label>
                            <input type="text" placeholder="Job Title" name="wtitle2" value={formData.wtitle2} onChange={handleChange} ></input>

                            <label htmlFor="company_name"  ><p></p></label>
                            <input type="text" placeholder="Company Name" value={formData.company2} name="company2" onChange={handleChange}></input>

                            <label htmlFor="certificate"><p> </p></label>
                            <input type="text" placeholder="Certificate link" name='certificate2' value={formData.certificate2} onChange={handleChange}></input>

                            <label htmlFor="start_date"><p> </p></label>
                            <input type="text" placeholder="Starting date in company" name='startdate2' value={formData.startdate} onChange={handleChange}></input>

                            <label htmlFor="end_date"><p> </p></label>
                            <input type="text" placeholder="Ending date in the company" value={formData.enddate2} name="enddate2" onChange={handleChange}></input>


                            <label htmlFor="location_type"><p> </p></label>
                            <input type="text" placeholder="Location eg. remote" name='location2' value={formData.location2} onChange={handleChange}></input>



                        </div>

                    </div>

                    <div className='basic__bottom'>
                        <input type="text" placeholder="Enter Work discription" name='description2' value={formData.description2} onChange={handleChange}></input>
                    </div>
                </fieldset>




                <fieldset>
                    <legend>Experience 3</legend>
                    <div className="basic__middle">
                        <div className="form__container">

                            <label htmlFor="job_title"><p></p></label>
                            <input type="text" placeholder="Job Title" name="wtitle3" value={formData.wtitle3} onChange={handleChange} ></input>

                            <label htmlFor="company_name"  ><p></p></label>
                            <input type="text" placeholder="Company Name" value={formData.company3} name="company3" onChange={handleChange}></input>

                            <label htmlFor="certificate"><p> </p></label>
                            <input type="text" placeholder="Certificate link" name='certificate3' value={formData.certificate3} onChange={handleChange}></input>

                            <label htmlFor="start_date"><p> </p></label>
                            <input type="text" placeholder="Starting date in company" name='startdate3' value={formData.startdate3} onChange={handleChange}></input>

                            <label htmlFor="end_date"><p> </p></label>
                            <input type="text" placeholder="Ending date in the company" value={formData.enddate3} name="enddate3" onChange={handleChange}></input>


                            <label htmlFor="location_type"><p> </p></label>
                            <input type="text" placeholder="Location eg. remote" name='location3' value={formData.location3} onChange={handleChange}></input>



                        </div>

                    </div>

                    <div className='basic__bottom'>
                        <input type="text" placeholder="Enter Work discription" name='description3' value={formData.description3} onChange={handleChange}></input>
                    </div>
                </fieldset>



            </div>


        </div>
    );
}

export default WorkExperience;