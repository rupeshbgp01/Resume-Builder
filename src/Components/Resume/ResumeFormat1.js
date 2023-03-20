import React, { forwardRef } from 'react';

import {AiOutlineMail} from 'react-icons/ai'
import {BiPhoneCall} from 'react-icons/bi'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import './ResumeFormat1.css'


const ResumeFormat1 =forwardRef( (props,ref) => {

    return (
        
        <div className='format1__container' ref={ref} >

            <div className='intro__container'>
                <h2>{props.data.name}</h2>
                <h5>{props.data.title} </h5>
                <div className='contact__container'>
                    <div className='basic__contact'>
                        <p><BiPhoneCall/> <span>{props.data.mobile}</span></p>
                        <p><AiOutlineMail/>  <span>{props.data.email}</span></p>

                    </div>
                    <div className='advance__contact'>
                        <p><AiOutlineLinkedin/> <span>{props.data.linkedin}</span></p>
                        <p><AiFillGithub/> <span>{props.data.github}</span></p>
                    </div>
                </div>
            </div>


            <div className='detail__container'>
                <div className='left__intro'>
                    <div className='sub__detail'>
                        <h3>Links</h3>
                        <hr />
                        <div className='detail'>
                            <p>{props.data.link1name}  <span>{props.data.link1}</span></p>
                            <p>{props.data.link2name}  <span>{props.data.link2}</span></p>
                            <p>{props.data.link3name}  <span>{props.data.link3}</span></p>
                            <p>{props.data.link4name}  <span>{props.data.link4}</span></p>
                            <p>{props.data.link5name}  <span>{props.data.link5}</span></p>
                            <p>{props.data.link6name}  <span>{props.data.link6}</span></p>
                            <p>{props.data.link7name}  <span>{props.data.link7}</span></p>
                        </div>
                    </div>

                    <div className='sub__detail'>
                        <h3>Skills</h3>
                        <hr />
                        <div className='detail'>
                            <p>{props.data.skill1}  <span>{props.data.skill1eg}</span></p>
                            <p>{props.data.skill2}  <span>{props.data.skill2eg}</span></p>
                            <p>{props.data.skill3}  <span>{props.data.skill3eg}</span></p>
                            <p>{props.data.skill4}  <span>{props.data.skill4eg}</span></p>
                            <p>{props.data.skill5}  <span>{props.data.skill5eg}</span></p>
                            <p>{props.data.skill6}  <span>{props.data.skill6eg}</span></p>
                            <p>{props.data.skill7}  <span>{props.data.skill7eg}</span></p>
                        </div>
                    </div>

                    <div className='sub__detail'>
                        <h3>Qualification</h3>
                        <hr />
                        <div className='detail'>
                            <div className='edu__detail'>
                                <p>{props.data.collage_start_date}&nbsp;-&nbsp;{props.data.collage_end_date}</p>
                                <p>{props.data.degree} / {props.data.major}</p>
                                <p>{props.data.collage} {props.data.collage_location}</p>
                                <p><span>{props.data.percentage}</span></p>
                            </div>
                            {/* <div className='edu__detail'>
                                <p>2018-2020</p>
                                <p>12th Math</p>
                                <p>Divine Happy School</p>
                                <p>Percentage : <span>93</span></p>
                            </div>
                            <div className='edu__detail'>
                                <p>2017-2018</p>
                                <p>10th</p>
                                <p>Divine Happy School</p>
                                <p>Percentage : <span>93</span></p>
                            </div> */}
                        </div>
                    </div>
                    <div className='other_section'>
                    <h3>{props.data.other_section_title}</h3> 
                    <p>{props.data.other_section_detail1}</p>
                    <p>{props.data.other_section_detail2}</p>
                    </div>
                </div>


                <div className='right__intro'>
                    <div className='experience__list'>
                        <h3>Experience</h3>
                        <hr />
                        <div className='experiance__info'>
                            <p>{props.data.enddate}&nbsp; -&nbsp; {props.data.startdate} <span>&nbsp;{props.data.company}</span></p>
                            <p className='position__info'>{props.data.wtitle}</p>
                            <p>{props.data.description}</p>
                            <p>{props.data.certificate}</p>
                        </div>

                        {/* <div className='experiance__info'>
                            <p>Dec 2023-Present <span>Infosis</span></p>
                            <p className='position__info'>Software Developer</p>
                            <p>Working under the Research team of Infosis Working under the Research team of Infosis Working under the Research team of Infosis</p>
                        </div>

                        <div className='experiance__info'>
                            <p>Dec 2023-Present <span>Infosis</span></p>
                            <p className='position__info'>Software Developer</p>
                            <p>Working under the Research team of Infosis Working under the Research team of Infosis</p>
                        </div> */}
                    </div>

                    <div className='Projects__container'>
                        <h3>Projects</h3>
                        <hr />
                        <div className='project__info'>
                            <span className='project__title'>{props.data.project_name}</span>
                            <p className='application__used'>{props.data.project_description}</p>
                            <p><span>Tools Used : </span>{props.data.project_tool}</p>
                            <p><a href={props.data.project_link}>GitHub Repository</a> </p>
                            <p><a href={props.data.project_demo_link}>Project Demo</a></p>
                        </div>

                        {/* <div className='project__info'>
                            <p>Dec 2023-Present <span className='project__title'>Resume Builder</span></p>
                            <p className='application__used'>Software Developer</p>
                            <p>Working under the Research team of Infosis Working under the Research team of Infosis Working under the Research team of Infosis</p>
                        </div>

                        <div className='project__info'>
                            <p>Dec 2023-Present <span className='project__title'>Whether App</span></p>
                            <p className='application__used'>Software Developer</p>
                            <p>Working under the Research team of Infosis Working under the Research team of Infosis</p>
                        </div> */}
                    </div>


                    <div className='achievment__container'>
                        <h3>Achievemets</h3>
                        <hr />
                        <div className='achievement__list'>
                            <div className='achiv__info'>
                                <h4> {props.data.achievement_name} </h4>
                                <h4><a href='www.linkedin.com'>{props.data.achievement_certificate} </a></h4>
                            </div>
                            <div className='achiv__detail'>
                                {props.data.achievement_description}
                            </div>
                        </div>

                        {/* <div className='achievement__list'>
                            <div className='achiv__info'>
                                <h4>CodeForce Rating</h4>
                                <h4><a href='www.linkedin.com'>Link to CodeChef Profile</a></h4>
                            </div>
                            <div className='achiv__detail'>
                                Rayrtdskjhlkah ahk ljajlkda  uhd ljsda  hi l jdaljdkh a
                            </div>
                        </div> */}

                        {/* <div className='achievement__list'>
                            <div className='achiv__info'>
                                <h4>GeekforGeek Rating</h4>
                                <h4><a href='www.linkedin.com'>Link to CodeChef Profile</a></h4>
                            </div>
                            <div className='achiv__detail'>
                                Rayrtdskjhlkah ahk ljajlkda  uhd ljsda  hi l jdaljdkh a
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>

        </div>
        
    );
});

export default ResumeFormat1;