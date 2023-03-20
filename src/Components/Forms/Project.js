import React from "react";
import "./Forms.css";



function Projects({ formData, setFormData }) {

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
                    <span>Projects</span>
                </div>

                <div className="basic__middle">
                    <div className="form__container">

                        <label htmlFor="project_name"><p> </p></label>
                        <input type="text" name="project_name" value={formData.project_name} onChange={handleChange} placeholder="Project Name"></input>

                        <label htmlFor="project_description"><p> </p></label>
                        <input type="text" name="project_description" value={formData.project_description} onChange={handleChange} placeholder="Project Description"></input>

                        <label htmlFor="project_link"><p> </p></label>
                        <input type="text" name="project_link" onChange={handleChange} value={formData.project_link} placeholder="GitHub repository link"></input>

                        <label htmlFor="project_demo_link"><p></p></label>
                        <input type="text" name="project_demo_link" value={formData.project_demo_link} onChange={handleChange} placeholder="Project demo link / hosting link"></input>

                        <label htmlFor="project_tool"><p> </p></label>
                        <input type="text" name="project_tool" onChange={handleChange} value={formData.project_tool} placeholder="Tools Used"></input>

                    </div>
                </div>
               
            </div>
          
        </div>

    );
}

 export default Projects;


