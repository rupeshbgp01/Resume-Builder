import "./Home.css"
import { AiOutlineDownload } from 'react-icons/ai'
import React, { useState, useRef } from "react";
import ReactToPrint from "react-to-print";
import { Route, Routes } from "react-router-dom"

import Navbar from "../Navbar";
import BasicInfo from "../Forms/BasicInfo";
import WorkExperience from "../Forms/WorkExperience";
import Other from "../Forms/Others";
import Achievement from "../Forms/Achievement";
import ResumeFormat1 from "../Resume/ResumeFormat1";
import ResumeFormat2 from "../Resume/ResumeFormat2";

import Skills from "../Forms/Skills";
import Links from "../Forms/Links";
import Education from "../Forms/Education";
import Projects from "../Forms/Project";
import Template from "../Template";

function Home() {


    const [formData, setFormData] = useState({

        name: "",
        title: "",
        email: "",
        linkedin: "",
        github: "",
        mobile: "",

        WorkExperience1: "",
        wtitle1: "",
        certificate1: "",
        startdate1: "",
        company1: "",
        location1: "",
        enddate1: "",
        description1: "",

        WorkExperience2: "",
        wtitle2: "",
        certificate2: "",
        startdate2: "",
        company2: "",
        location2: "",
        enddate2: "",
        description2: "",

        WorkExperience3: "",
        wtitle3: "",
        certificate3: "",
        startdate3: "",
        company3: "",
        location3: "",
        enddate3: "",
        description3: "",

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

        collage1: "",
        collage_location1: "",
        degree1: "",
        major1: "",
        percentage1: "",
        collage_start_date1: "",
        collage_end_date1: "",

        collage2: "",
        collage_location2: "",
        degree2: "",
        major2: "",
        percentage2: "",
        collage_start_date2: "",
        collage_end_date2: "",

        collage3: "",
        collage_location3: "",
        degree3: "",
        major3: "",
        percentage3: "",
        collage_start_date3: "",
        collage_end_date3: "",

        project_name1: "",
        project_description1: "",
        project_tool1: "",
        project_link1: "",
        project_demo_link1: "",

        project_name2: "",
        project_description2: "",
        project_tool2: "",
        project_link2: "",
        project_demo_link2: "",

        project_name3: "",
        project_description3: "",
        project_tool3: "",
        project_link3: "",
        project_demo_link3: "",

        achievement_name1: "",
        achievement_description1: "",
        achievement_certificate1: "",

        achievement_name2: "",
        achievement_description2: "",
        achievement_certificate2: "",

        achievement_name3: "",
        achievement_description3: "",
        achievement_certificate3: "",

        achievement_name4: "",
        achievement_description4: "",
        achievement_certificate4: "",

        other_section_title: "",
        other_section_detail1: "",
        other_section_detail2: "",

    });

    const componentRef = useRef(null);

    const [isActive, setActive] = useState(false);

    function handleToggle() {
        setActive(!isActive);
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
            {/* <div className="format__button_bottom">
                <button className="btn" >&#8249; Prev</button>
                <button className="btn" >Next &#8250;</button>
            </div> */}
        </div>
    );
}
export default Home;