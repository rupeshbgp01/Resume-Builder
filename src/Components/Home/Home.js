import "./Home.css"
import { AiOutlineDownload } from 'react-icons/ai'
import React, { useState, useRef } from "react";
import ReactToPrint from "react-to-print";
import { Route, Routes } from "react-router-dom"
// import { Link } from 'react-router-dom'
import Navbar from "../Navbar";
import BasicInfo from "../Forms/BasicInfo";
import WorkExperience from "../Forms/WorkExperience";
import Other from "../Forms/Others";
import Achievement from "../Forms/Achievement";
import ResumeFormat1 from "../Resume/ResumeFormat1";
import ResumeFormat2 from "../Resume/ResumeFormat2";
// import Button from "../Buttons/Button";
import Skills from "../Forms/Skills";
import Links from "../Forms/Links";
import Education from "../Forms/Education";
import Projects from "../Forms/Project";
import Template from "../Template";

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

        other_section_title: "",
        other_section_detail1: "",
        other_section_detail2: "",

    });

    const componentRef = useRef(null);

    const [isActive, setActive] = useState(false);

    function handleToggle() {
        setActive(!isActive);
    };


    let handleprev=()=>{
        

    };
    let handlenext=()=>{

    };

    return (
        <div className="home__container">
            {/* top Buttons container  */}
            <div className="format__button">
                {/* <button className="btn"  >&#8249;</button> */}
                <button onClick={handleToggle} className="btn" >Template</button>
                <h1 className="top_heading">ResumeMaker</h1>
                {/* to print pdf on click the download button */}
                <ReactToPrint
                    trigger={() => {

                        return <button className="btn" >Download <AiOutlineDownload /> </button>;
                    }}
                    content={() => componentRef.current}
                />

            </div>

            {/* Template component run on clicking template */}
            <div className={`slider_nav ${isActive ? "menu_active" : ""}`} onClick={() => setActive(false)}>
                <Template />
            </div>

            {/* Resume container contain navbar forms and resume format */}
            <div className='resume__form__container' onClick={() => setActive(false)}>
                <div className="nav_form_container">
                <Navbar />
                {/* Forms */}
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
                </div>
                {/* Resume format */}
                <Routes>
                    <Route exact path="/*" element={<ResumeFormat1 data={formData} ref={componentRef} />}></Route>
                    <Route exact path="/template2" element={<ResumeFormat2 data={formData} ref={componentRef} />}></Route>
                </Routes>


            </div>

            {/*  Bottom buttons container */}
            <div className="format__button_bottom">
                <button className="btn" onClick={handleprev}>&#8249; Prev</button>
                <button className="btn" onClick={handlenext}>Next &#8250;</button>
            </div>
        </div>
    );
}
export default Home;