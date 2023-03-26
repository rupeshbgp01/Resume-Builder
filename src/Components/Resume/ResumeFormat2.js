
import "./ResumeFormat2.css"
import React, { forwardRef } from 'react';

import { AiOutlineMail } from 'react-icons/ai'
import { BiPhoneCall } from 'react-icons/bi'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'



const ResumeFormat2 = forwardRef((props, ref) => {

    return (

        <div className='format2__container' ref={ref} >
            <div className="top__container">
                <div className="basic__intro">
                    <h1>{props.data.name}</h1>
                    <h5>{props.data.title}</h5>

                </div>
                <div className="basic__contact__container">
                    <p><AiOutlineMail/> {props.data.email}</p>|
                    <p><BiPhoneCall/>{props.data.mobile}</p>|
                    <p><AiOutlineLinkedin/>github.io/rupeshbgp01</p>|
                    <p><AiFillGithub/>linkedin.in/rupesh01</p>

                </div>
            </div>
            <hr></hr>
            <div className="bottom__container">
                <div className="left__container">

                </div>
                <div className="right__container">

                </div>
            </div>

        </div>

    );
});

export default ResumeFormat2;