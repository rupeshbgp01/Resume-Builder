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
                <div className="form__container">
                    <label htmlFor="collage"><p> </p></label>
                    <input type="text" name="collage" value={formData.collage} onChange={handleChange} placeholder="School/Collage Name"></input>

                    <label htmlFor="collage_location"><p> </p></label>
                    <input type="text" name="collage_location" onChange={handleChange} value={formData.collage_location} placeholder="Location "></input>

                    <label htmlFor="degree"><p> </p></label>
                    <input type="text" name="degree" value={formData.degree} onChange={handleChange} placeholder="Degree eg. B.Tech"></input>

                    <label htmlFor="major"><p> </p></label>
                    <input type="text" name="major" value={formData.major} onChange={handleChange} placeholder="Major eg Computer Science"></input>

                    <label htmlFor="percentage"><p> </p></label>
                    <input type="text" name="percentage" value={formData.percentage} onChange={handleChange} placeholder="Percentage / CGPA"></input>
                </div>

                <div className="basic__middle">

                    <div className="middle__left">
                        <label htmlFor="collage_start_date"> </label>
                        <input type="text" name="collage_start_date" onChange={handleChange} value={formData.collage_start_date} placeholder="Starting date eg.May 2022"></input>
                    </div>
                    <div className="middle__right">
                        <label htmlFor="collage_end_date"></label>
                        <input type="text" name="collage_end_date" onChange={handleChange} value={formData.collage_end_date} placeholder="Last date eg.june 2023"></input>
                    </div>
                </div>
              
            </div>

        </div>

    );
}

export default Education;