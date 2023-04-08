import React, { forwardRef } from 'react';

import { AiOutlineMail } from 'react-icons/ai'
import { BiPhoneCall } from 'react-icons/bi'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'
import './ResumeFormat1.css'


const ResumeFormat1 = forwardRef((props, ref) => {

    return (

        <div className='format1__container' ref={ref} >

            <div className='intro__container'>
                <h2>{props.data.name}</h2>
                <h5>{props.data.title} </h5>
                <div className='contact__container'>
                    <div className='basic__contact'>
                        <p><BiPhoneCall /> <span>{props.data.mobile}</span></p>
                        <p><AiOutlineMail />  <span>{props.data.email}</span></p>

                    </div>
                    <div className='advance__contact'>
                        <p><AiOutlineLinkedin /> <span>{props.data.linkedin}</span></p>
                        <p><AiFillGithub /> <span>{props.data.github}</span></p>
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
                                <p>{props.data.collage_start_date1}&nbsp;&nbsp;{props.data.collage_end_date1}</p>
                                <p><span className='collage_name'>{props.data.degree1}</span>  {props.data.major1}</p>
                                <p>{props.data.collage1} {props.data.collage_location1}</p>
                                <p><span>{props.data.percentage1}</span></p>
                            </div>

                            <div className='edu__detail'>
                                <p>{props.data.collage_start_date2}{props.data.collage_end_date2}</p>
                                <p><span className='collage_name'>{props.data.degree2}</span>  {props.data.major2}</p>
                                <p>{props.data.collage2} {props.data.collage_location2}</p>
                                <p><span>{props.data.percentage2}</span></p>
                            </div>

                            <div className='edu__detail'>
                                <p>{props.data.collage_start_date3}{props.data.collage_end_date3}</p>
                                <p><span className='collage_name'>{props.data.degree3} </span> {props.data.major3}</p>
                                <p>{props.data.collage3} {props.data.collage_location3}</p>
                                <p><span>{props.data.percentage3}</span></p>
                            </div>



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
                            <p>{props.data.enddate1} {props.data.startdate1} <span>{props.data.company1}</span></p>
                            <p className='position__info'>{props.data.wtitle1}</p>
                            <p>{props.data.description1}</p>
                            <p>{props.data.certificate1}</p>
                        </div>

                        <div className='experiance__info'>
                            <p>{props.data.enddate2} {props.data.startdate2} <span>{props.data.company2}</span></p>
                            <p className='position__info'>{props.data.wtitle2}</p>
                            <p>{props.data.description2}</p>
                            <p>{props.data.certificate2}</p>
                        </div>

                        <div className='experiance__info'>
                            <p>{props.data.enddate3} {props.data.startdate3} <span>{props.data.company3}</span></p>
                            <p className='position__info'>{props.data.wtitle3}</p>
                            <p>{props.data.description3}</p>
                            <p>{props.data.certificate3}</p>
                        </div>


                    </div>

                    <div className='Projects__container'>
                        <h3>Projects</h3>
                        <hr />
                        <div className='project__info'>
                            
                            <span className='project__title'>{props.data.project_name1}</span>
                            <p className='application__used'>{props.data.project_description1}</p>
                            <p><span></span>{props.data.project_tool1}</p>
                            <p><a href={props.data.project_link1}>{props.data.project_link1}</a> </p>
                            <p><a href={props.data.project_demo_link1}>{props.data.project_demo_link1}</a></p>
                        </div>

                        <div className='project__info'>
                            <span className='project__title'>{props.data.project_name2}</span>
                            <p className='application__used'>{props.data.project_description2}</p>
                            <p><span> </span>{props.data.project_tool2}</p>
                            <p><a href={props.data.project_link2}>{props.data.project_link2}</a> </p>
                            <p><a href={props.data.project_demo_link2}>{props.data.project_demo_link2}</a></p>
                        </div>

                        <div className='project__info'>
                            <span className='project__title'>{props.data.project_name3}</span>
                            <p className='application__used'>{props.data.project_description3}</p>
                            <p><span></span>{props.data.project_tool3}</p>
                            <p><a href={props.data.project_link3}>{props.data.project_link3}</a> </p>
                            <p><a href={props.data.project_demo_link3}>{props.data.project_demo_link3}</a></p>
                        </div>
                        

                        
                    </div>


                    <div className='achievment__container'>
                        <h3>Achievemets</h3>
                        <hr />
                        <div className='achievement__list'>
                            <div className='achiv__info'>
                                <h4> {props.data.achievement_name1} </h4>
                                <h4><a href='www.linkedin.com'>{props.data.achievement_certificate1} </a></h4>
                            </div>
                            <div className='achiv__detail'>
                                {props.data.achievement_description1}
                            </div>
                        </div>

                        <div className='achievement__list'>
                            <div className='achiv__info'>
                                <h4> {props.data.achievement_name2} </h4>
                                <h4><a href='www.linkedin.com'>{props.data.achievement_certificate2} </a></h4>
                            </div>
                            <div className='achiv__detail'>
                                {props.data.achievement_description2}
                            </div>
                        </div>

                        <div className='achievement__list'>
                            <div className='achiv__info'>
                                <h4> {props.data.achievement_name3} </h4>
                                <h4><a href='www.linkedin.com'>{props.data.achievement_certificate3} </a></h4>
                            </div>
                            <div className='achiv__detail'>
                                {props.data.achievement_description3}
                            </div>
                        </div>

                        <div className='achievement__list'>
                            <div className='achiv__info'>
                                <h4> {props.data.achievement_name4} </h4>
                                <h4><a href='www.linkedin.com'>{props.data.achievement_certificate4} </a></h4>
                            </div>
                            <div className='achiv__detail'>
                                {props.data.achievement_description4}
                            </div>
                        </div>

                        
                    </div>
                </div>
            </div>

        </div>

    );
});

export default ResumeFormat1;