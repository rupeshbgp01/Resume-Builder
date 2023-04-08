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


                <fieldset>
                    <legend>Achievement 1</legend>
                    <div className="form__container">
                        <label htmlFor="achievement_name"> </label>
                        <input type="text" name="achievement_name1" onChange={handleChange} value={formData.achievement_name1} placeholder="Achievement Name"></input>

                        <label htmlFor="achievement_certificate"></label>
                        <input type="text" name="achievement_certificate1" onChange={handleChange} value={formData.achievement_certificate1} placeholder="Achievement certificate drive or other link"></input>

                        <input type="text" name="achievement_description1" onChange={handleChange} value={formData.achievement_description1} placeholder="Achievement description"></input></div>
                </fieldset>


                <fieldset>
                    <legend>Achievement 2</legend>
                    <div className="form__container">
                        <label htmlFor="achievement_name"> </label>
                        <input type="text" name="achievement_name2" onChange={handleChange} value={formData.achievement_name2} placeholder="Achievement Name"></input>

                        <label htmlFor="achievement_certificate"></label>
                        <input type="text" name="achievement_certificate2" onChange={handleChange} value={formData.achievement_certificate2} placeholder="Achievement certificate drive or other link"></input>

                        <input type="text" name="achievement_description2" onChange={handleChange} value={formData.achievement_description2} placeholder="Achievement description"></input></div>
                </fieldset>


                <fieldset>
                    <legend>Achievement 3</legend>
                    <div className="form__container">
                        <label htmlFor="achievement_name"> </label>
                        <input type="text" name="achievement_name3" onChange={handleChange} value={formData.achievement_name3} placeholder="Achievement Name"></input>

                        <label htmlFor="achievement_certificate"></label>
                        <input type="text" name="achievement_certificate3" onChange={handleChange} value={formData.achievement_certificate3} placeholder="Achievement certificate drive or other link"></input>

                        <input type="text" name="achievement_description3" onChange={handleChange} value={formData.achievement_description3} placeholder="Achievement description"></input></div>
                </fieldset>
                <fieldset>
                    <legend>Achievement 4</legend>
                    <div className="form__container">
                        <label htmlFor="achievement_name"> </label>
                        <input type="text" name="achievement_name4" onChange={handleChange} value={formData.achievement_name4} placeholder="Achievement Name"></input>

                        <label htmlFor="achievement_certificate"></label>
                        <input type="text" name="achievement_certificate4" onChange={handleChange} value={formData.achievement_certificate4} placeholder="Achievement certificate drive or other link"></input>

                        <input type="text" name="achievement_description4" onChange={handleChange} value={formData.achievement_description4} placeholder="Achievement description"></input></div>
                </fieldset>




            </div>
        </div>
    );
}

export default Achievement;