
import React from "react";

import "./Forms.css";



function BasicInfo({ formData, setFormData }) {

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
                    <span>Basic Information</span>
                </div>

                <div className="basic__middle">
                    <div className="form__container">

                        <label htmlFor="name"><p> </p></label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name"></input>

                        <label htmlFor="your__title"><p> </p></label>
                        <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Your title"></input>

                        <label htmlFor="mobile"><p> </p></label>
                        <input type="text" name="mobile" onChange={handleChange} value={formData.mobile} placeholder="Mobile No."></input>

                        <label htmlFor="email"><p></p></label>
                        <input type="text" name="email" value={formData.email} onChange={handleChange} placeholder="Valid Email Id"></input>

                        <label htmlFor="linkedin"><p> </p></label>
                        <input type="text" name="linkedin" onChange={handleChange} value={formData.linkedin} placeholder="Linkedin Link"></input>

                        <label htmlFor="github"><p> </p></label>
                        <input type="text" name="github" onChange={handleChange} value={formData.github} placeholder="Github link"></input>



                    </div>
                </div>
            </div>
        </div>

    );
}
export default BasicInfo;


