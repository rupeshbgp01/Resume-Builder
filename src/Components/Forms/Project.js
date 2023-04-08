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
                <fieldset>
                    <legend>Project 1</legend>
                    <div className="basic__middle">
                        <div className="form__container">

                            <label htmlFor="project_name"><p> </p></label>
                            <input type="text" name="project_name1" value={formData.project_name1} onChange={handleChange} placeholder="Project Name"></input>

                            <label htmlFor="project_description"><p> </p></label>
                            <input type="text" name="project_description1" value={formData.project_descriptio1n} onChange={handleChange} placeholder="Project Description"></input>

                            <label htmlFor="project_link"><p> </p></label>
                            <input type="text" name="project_link1" onChange={handleChange} value={formData.project_link1} placeholder="GitHub repository link"></input>

                            <label htmlFor="project_demo_link"><p></p></label>
                            <input type="text" name="project_demo_link1" value={formData.project_demo_link1} onChange={handleChange} placeholder="Project demo link / hosting link"></input>

                            <label htmlFor="project_tool"><p> </p></label>
                            <input type="text" name="project_tool1" onChange={handleChange} value={formData.project_tool1} placeholder="Tools Used"></input>

                        </div>
                    </div>
                </fieldset>


                {/* ---------second project---------- */}

                <fieldset>
                    <legend>Project 2</legend>
                    <div className="basic__middle">
                        <div className="form__container">

                            <label htmlFor="project_name"><p> </p></label>
                            <input type="text" name="project_name2" value={formData.project_name2} onChange={handleChange} placeholder="Project Name"></input>

                            <label htmlFor="project_description"><p> </p></label>
                            <input type="text" name="project_description2" value={formData.project_description2} onChange={handleChange} placeholder="Project Description"></input>

                            <label htmlFor="project_link"><p> </p></label>
                            <input type="text" name="project_link2" onChange={handleChange} value={formData.project_link2} placeholder="GitHub repository link"></input>

                            <label htmlFor="project_demo_link"><p></p></label>
                            <input type="text" name="project_demo_link2" value={formData.project_demo_link2} onChange={handleChange} placeholder="Project demo link / hosting link"></input>

                            <label htmlFor="project_tool"><p> </p></label>
                            <input type="text" name="project_tool2" onChange={handleChange} value={formData.project_tool2} placeholder="Tools Used"></input>

                        </div>
                    </div>
                </fieldset>


                {/*----------- third project-------------- */}
                <fieldset>
                    <legend>Project 3</legend>
                    <div className="basic__middle">
                        <div className="form__container">

                            <label htmlFor="project_name"><p> </p></label>
                            <input type="text" name="project_name3" value={formData.project_name3} onChange={handleChange} placeholder="Project Name"></input>

                            <label htmlFor="project_description"><p> </p></label>
                            <input type="text" name="project_description3" value={formData.project_description3} onChange={handleChange} placeholder="Project Description"></input>

                            <label htmlFor="project_link"><p> </p></label>
                            <input type="text" name="project_link3" onChange={handleChange} value={formData.project_link3} placeholder="GitHub repository link"></input>

                            <label htmlFor="project_demo_link"><p></p></label>
                            <input type="text" name="project_demo_link3" value={formData.project_demo_link3} onChange={handleChange} placeholder="Project demo link / hosting link"></input>

                            <label htmlFor="project_tool"><p> </p></label>
                            <input type="text" name="project_tool3" onChange={handleChange} value={formData.project_tool3} placeholder="Tools Used"></input>

                        </div>
                    </div>
                </fieldset>


            </div>

        </div>

    );
}

export default Projects;


