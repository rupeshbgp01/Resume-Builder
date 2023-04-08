import React from "react";
import "./Forms.css";



function Education({ formData, setFormData }) {

    let name, value;
    function handleChange(event) {
        name = event.target.name;
        value = event.target.value;
        setFormData({ ...formData, [name]: value });
    }


    return (
        <div className="wrapper" >
            <div className="basic__container">
                <div className="basic__top">

                    <span>Qualification Detail</span>
                </div>
                <fieldset>
                    <legend>Collage 1</legend>
                    <div className="form__container">
                        <label htmlFor="collage1"><p> </p></label>
                        <input type="text" name="collage1" value={formData.collage1} onChange={handleChange} placeholder="School/Collage Name"></input>

                        <label htmlFor="collage_location1"><p> </p></label>
                        <input type="text" name="collage_location1" onChange={handleChange} value={formData.collage_location1} placeholder="Location1 "></input>

                        <label htmlFor="degree1"><p> </p></label>
                        <input type="text" name="degree1" value={formData.degree1} onChange={handleChange} placeholder="Degree eg. B.Tech"></input>

                        <label htmlFor="major1"><p> </p></label>
                        <input type="text" name="major1" value={formData.major1} onChange={handleChange} placeholder="Major eg Computer Science"></input>

                        <label htmlFor="percentage1"><p> </p></label>
                        <input type="text" name="percentage1" value={formData.percentage1} onChange={handleChange} placeholder="Percentage / CGPA"></input>
                    </div>

                    <div className="basic__middle">

                        <div className="middle__left">
                            <label htmlFor="collage_start_date1"> </label>
                            <input type="text" name="collage_start_date1" onChange={handleChange} value={formData.collage_start_date1} placeholder="Starting date eg.May 2022"></input>
                        </div>
                        <div className="middle__right">
                            <label htmlFor="collage_end_date1"></label>
                            <input type="text" name="collage_end_date1" onChange={handleChange} value={formData.collage_end_date1} placeholder="Last date eg.june 2023"></input>
                        </div>
                    </div>
                </fieldset>



                {/* ----------------second collage------------------ */}
                <fieldset>
                    <legend>Collage 2</legend>

                    <div className="form__container">
                        <label htmlFor="collage2"><p> </p></label>
                        <input type="text" name="collage2" value={formData.collage2} onChange={handleChange} placeholder="School/Collage Name"></input>

                        <label htmlFor="collage_location2"><p> </p></label>
                        <input type="text" name="collage_location2" onChange={handleChange} value={formData.collage_location} placeholder="Location "></input>

                        <label htmlFor="degree2"><p> </p></label>
                        <input type="text" name="degree2" value={formData.degree2} onChange={handleChange} placeholder="Degree eg. B.Tech"></input>

                        <label htmlFor="major2"><p> </p></label>
                        <input type="text" name="major2" value={formData.major2} onChange={handleChange} placeholder="Major eg Computer Science"></input>

                        <label htmlFor="percentage2"><p> </p></label>
                        <input type="text" name="percentage2" value={formData.percentage2} onChange={handleChange} placeholder="Percentage / CGPA"></input>
                    </div>
                    <div className="basic__middle">

                        <div className="middle__left">
                            <label htmlFor="collage_start_date2"> </label>
                            <input type="text" name="collage_start_date2" onChange={handleChange} value={formData.collage_start_date2} placeholder="Starting date eg.May 2022"></input>
                        </div>
                        <div className="middle__right">
                            <label htmlFor="collage_end_date2"></label>
                            <input type="text" name="collage_end_date2" onChange={handleChange} value={formData.collage_end_date2} placeholder="Last date eg.june 2023"></input>
                        </div>
                    </div>

                </fieldset>

                {/* -----------third collage---------------- */}
                <fieldset>
                    <legend>Collage 3</legend>
                    <div className="form__container">
                        <label htmlFor="collage3"><p> </p></label>
                        <input type="text" name="collage3" value={formData.collage3} onChange={handleChange} placeholder="School/Collage Name"></input>

                        <label htmlFor="collage_location3"><p> </p></label>
                        <input type="text" name="collage_location3" onChange={handleChange} value={formData.collage_location3} placeholder="Location3 "></input>

                        <label htmlFor="degree3"><p> </p></label>
                        <input type="text" name="degree3" value={formData.degree3} onChange={handleChange} placeholder="Degree eg. B.Tech"></input>

                        <label htmlFor="major3"><p> </p></label>
                        <input type="text" name="major3" value={formData.major3} onChange={handleChange} placeholder="Major eg Computer Science"></input>

                        <label htmlFor="percentage3"><p> </p></label>
                        <input type="text" name="percentage3" value={formData.percentage3} onChange={handleChange} placeholder="Percentage / CGPA"></input>
                    </div>

                    <div className="basic__middle">

                        <div className="middle__left">
                            <label htmlFor="collage_start_date3"> </label>
                            <input type="text" name="collage_start_date3" onChange={handleChange} value={formData.collage_start_date3} placeholder="Starting date eg.May 2022"></input>
                        </div>
                        <div className="middle__right">
                            <label htmlFor="collage_end_date3"></label>
                            <input type="text" name="collage_end_date3" onChange={handleChange} value={formData.collage_end_date3} placeholder="Last date eg.june 2023"></input>
                        </div>
                    </div>
                </fieldset>

            </div>

        </div>

    );
}

export default Education;