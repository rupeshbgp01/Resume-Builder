
// import "./ResumeFormat2.css"
// import React, { forwardRef } from 'react';

// import { AiOutlineMail } from 'react-icons/ai'
// import { BiPhoneCall } from 'react-icons/bi'
// import { AiOutlineLinkedin } from 'react-icons/ai'
// import { AiFillGithub } from 'react-icons/ai'



// const ResumeFormat2 = forwardRef((props, ref) => {

//     return (

//         <div className='format2__container' ref={ref} >
//             <div className="top__container">
//                 <div className="basic__intro">
//                     <h1>{props.data.name}</h1>
//                     <h5>{props.data.title}</h5>

//                 </div>
//                 <div className="basic__contact__container">
//                     <p><AiOutlineMail/> {props.data.email}</p>|
//                     <p><BiPhoneCall/>{props.data.mobile}</p>|
//                     <p><AiOutlineLinkedin/>github.io/rupeshbgp01</p>|
//                     <p><AiFillGithub/>linkedin.in/rupesh01</p>

//                 </div>
//             </div>
//             <hr></hr>
//             <div className="bottom__container">
//                 <div className="left__container">

//                 </div>
//                 <div className="right__container">

//                 </div>
//             </div>

//         </div>

//     );
// });

// export default ResumeFormat2;

import "./ResumeFormat2.css";
import React, { forwardRef } from "react";

import { AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

const ResumeFormat2 = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="format2container">
      <div className="namef2">
        {props.data.name}
      </div>
      <div className="nametitlef2">
        {props.data.title}
      </div>
      <div className="contactf2">
        <p>
          {props.data.github} <span className="lf2"> | </span>{" "}
          {props.data.linkedin}
        </p>
        <p>
          {props.data.mobile}
          <span className="lf2"> | </span>
          {props.data.email}
        </p>
      </div>
      <hr />
      <div className="detailsf2">
        <div className="leftf2">
          <div className="linksf2">
            <div className="headingf2">LINKS</div>
            <div className="dataf2">
              <p>
              <span >{props.data.link1name} </span><span className="titlef2">{props.data.link1}</span>
              </p>
              <p>
              <span >{props.data.link2name} </span><span className="titlef2">{props.data.link2}</span>
              </p>
              <p>
              <span >{props.data.link3name} </span><span className="titlef2">{props.data.link3}</span>
              </p>
              <p>
              <span >{props.data.link4name} </span><span className="titlef2">{props.data.link4}</span>
              </p>
              <p>
              <span >{props.data.link5name} </span><span className="titlef2">{props.data.link5}</span>
              </p>
              <p>
              <span >{props.data.link6name} </span><span className="titlef2">{props.data.link6}</span>
              </p>
              <p>
              <span >{props.data.link7name} </span><span className="titlef2">{props.data.link7}</span>
              </p>
            </div>
          </div>
          <div className="skillsf2">
            <div className="headingf2">SKILLS</div>
            <div className="dataf2">
              <p>
              <span>{props.data.skill1} </span><span className="titlef2">{props.data.skill1eg}</span>
              </p>
              <p>
              <span>{props.data.skill2} </span><span className="titlef2">{props.data.skill2eg}</span>
              </p>
              <p>
              <span>{props.data.skill3} </span><span className="titlef2">{props.data.skill3eg}</span>
              </p>
              <p>
              <span>{props.data.skill4} </span><span className="titlef2">{props.data.skill4eg}</span>
              </p>
              <p>
              <span>{props.data.skill5} </span><span className="titlef2">{props.data.skill5eg}</span>
              </p>
              <p>
              <span>{props.data.skill6} </span><span className="titlef2">{props.data.skill6eg}</span>
              </p>
              <p>
              <span>{props.data.skill7} </span><span className="titlef2">{props.data.skill7eg}</span>
              </p>
            </div>
          </div>
          <div className="qualificationsf2">
            <div className="headingf2">QUALIFICATION</div>
            <div className="datef2">
              <p>
                {props.data.collage_start_date}&nbsp;-&nbsp;
                {props.data.collage_end_date}
              </p>
            </div>
            <div className="dataf2">
              <p>
                {props.data.degree} / {props.data.major}
              </p>
              <p>
                {props.data.collage} {props.data.collage_location}
              </p>
              <p>
                <span>{props.data.percentage}</span>
              </p>
            </div>
          </div>
        </div>

        <div className="rightf2">
          <div className="experiencef2">
            <div className="headingf2">EXPERIENCE</div>
            <span className="titlef2">
              <span>{props.data.company}</span>
              <span className="lf2">|</span>{" "}
            </span>
            <span className="dataf2">{props.data.wtitle}</span>
            <div className="datef2">
              <p>
                {props.data.enddate}&nbsp; -&nbsp; {props.data.startdate}&nbsp;
              </p>
            </div>
            <p>{props.data.description}</p>
            <p>{props.data.certificate}</p>
          </div>
          <div className="projectsf2">
            <div className="headingf2">PROJECTS</div>
            <span className="titlef2">{props.data.project_name}</span>
            <p className="dataf2">{props.data.project_description}</p>
            <p>
              <span>Tools Used : </span>
              {props.data.project_tool}
            </p>
            <p>
              <a href={props.data.project_link}>GitHub Repository</a>{" "}
            </p>
            <p>
              <a href={props.data.project_demo_link}>Project Demo</a>
            </p>
          </div>
          <div className="achievementsf2">
            <div className="headingf2">ACHIEVEMENTS</div>
            <div>
              <span className="titlef2">{props.data.achievement_name} </span>
              <span className="dataf2">
                <a href="www.linkedin.com">
                  {props.data.achievement_certificate}{" "}
                </a>
              </span>
            </div>
            <div className="dataf2">{props.data.achievement_description}</div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default ResumeFormat2;