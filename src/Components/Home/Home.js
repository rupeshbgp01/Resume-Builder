import "./Home.css"
import {AiOutlineDownload} from 'react-icons/ai'
import React, { useState,useRef } from "react";
import ReactToPrint  from "react-to-print";
import { Route, Routes } from "react-router-dom"
import { Link } from 'react-router-dom'
import Navbar from "../Navbar";
import BasicInfo from "../Forms/BasicInfo";
import WorkExperience from "../Forms/WorkExperience";
import Other from "../Forms/Others";
import Achievement from "../Forms/Achievement";
import ResumeFormat1 from "../Resume/ResumeFormat1";
import Button from "../Buttons/Button";
import Skills from "../Forms/Skills";
import Links from "../Forms/Links";
import Education from "../Forms/Education";
import Projects from "../Forms/Project";

function Home() {

 
    const [formData, setFormData] = useState({

        name: "Your Name",
        title: "",
        email: "",
        linkedin: "",
        github: "",
        mobile: "",

        WorkExperience: "",
        wtitle: "",
        certificate: "",
        startdate: "",
        company: "",
        location: "",
        enddate: "",
        description: "",

        skill1: "",
        skill2: "",
        skill3: "",
        skill4: "",
        skill5: "",
        skill6: "",
        skill7: "",
        skill1eg: "",
        skill2eg: "",
        skill3eg: "",
        skill4eg: "",
        skill5eg: "",
        skill6eg: "",
        skill7eg: "",

        link1: "",
        link2: "",
        link3: "",
        link4: "",
        link5: "",
        link6: "",
        link7: "",

        link1name: "",
        link2name: "",
        link3name: "",
        link4name: "",
        link5name: "",
        link6name: "",
        link7name: "",

        collage: "",
        collage_location: "",
        degree: "",
        major: "",
        percentage: "",
        collage_start_date: "",
        collage_end_date: "",

        project_name: "",
        project_description: "",
        project_tool: "",
        project_link: "",
        project_demo_link: "",

        achievement_name: "",
        achievement_description: "",
        achievement_certificate: "",

        other_section_title:"",
        other_section_detail1:"",
        other_section_detail2:"",

    });

    const componentRef=useRef(null);



    return (
        <div className="home__container">
            <div className="format__button">
                {/* <Link to="/"><Button title="&#8249;"></Button></Link> */}
                <Button title="Templates"/>
                <h1 className="top_heading">ResumeMaker</h1>
                <ReactToPrint
                    trigger={() => {
                        
                        return <button className="btn" >Download <AiOutlineDownload/> </button>;
                    }}
                    content={() => componentRef.current}
                />
            </div>
            <div className='resume__form__container'>
                

                <Navbar />
                <Routes >
                    <Route exact path="/*" element={<BasicInfo formData={formData} setFormData={setFormData} />}></Route>

                    <Route exact path="/work" element={<WorkExperience formData={formData} setFormData={setFormData} />}></Route>

                    <Route exact path="/links" element={<Links formData={formData} setFormData={setFormData} />}></Route>

                    <Route exact path="/skills" element={<Skills formData={formData} setFormData={setFormData} />}></Route>

                    <Route exact path="/education" element={<Education formData={formData} setFormData={setFormData} />}></Route>

                    <Route exact path="/project" element={<Projects formData={formData} setFormData={setFormData} />}></Route>

                    <Route exact path="/achievement" element={<Achievement formData={formData} setFormData={setFormData} />}></Route>

                    <Route exact path="/summary" element={<Other formData={formData} setFormData={setFormData} />}></Route>

                </Routes>

                <ResumeFormat1 data={formData} ref={componentRef} />

            </div>
            <div className="format__button_bottom">
                {/* <Button title="&#8249; Prev" />
                <Button title="Next &#8250;" /> */}
            </div>
        </div>
    );
}
export default Home;