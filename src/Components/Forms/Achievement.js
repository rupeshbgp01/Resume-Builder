import "./Forms.css";
import React from "react";

function Achievement({ formData, setFormData }) {

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
                    <label htmlFor="basic__title" name="basic__title"><span> Achievements</span></label><br></br><br></br>
                    <input type="text" id="basic__title" placeholder="Section title : Achievements"></input>
                </div>

                <div className="form__container">

                    <label htmlFor="achievement_name"> </label>
                    <input type="text" name="achievement_name" onChange={handleChange} value={formData.achievement_name} placeholder="Achievement Name"></input>


                    <label htmlFor="achievement_certificate"></label>
                    <input type="text" name="achievement_certificate" onChange={handleChange} value={formData.achievement_certificate} placeholder="Achievement certificate drive or other link"></input>

                    <input type="text" name="achievement_descriptione" onChange={handleChange} value={formData.achievement_description} placeholder="Achievement description"></input>

                </div>



            </div>
        </div>
    );
}

export default Achievement;