import React from 'react';
import './ResumeFormat1.css'

function ResumeFormat1() {
    return (
        <div className='format1__container'>
            <div className='intro__container'>
                <h2>Rupesh Kumar</h2>
                <h5>B.Tech-Computer Science Engineer </h5>
                <div className='contact__container'>
                    <div className='basic__contact'>
                        <p>Mob. : <span>+91 9162840955</span></p>
                        <p>Email : <span>rkchourasia2001@gmail.com</span></p>

                    </div>
                    <div className='advance__contact'>
                        <p>Linkedin : <span>xxxxxxxxxx</span></p>
                        <p>Github : <span>xxxxxxxxxx</span></p>
                    </div>
                </div>
            </div>


            <div className='detail__container'>
                <div className='left__intro'>
                    <div className='sub__detail'>
                        <h3>Links</h3>
                        <hr />
                        <div className='detail'>
                            <p>Linkedin : <span>xxxxxxxxxx</span></p>
                            <p>Github : <span>xxxxxxxxxx</span></p>
                            <p>Codechef : <span>xxxxxxxxxx</span></p>
                            <p>Codeforce : <span>xxxxxxxxxx</span></p>
                        </div>
                    </div>

                    <div className='sub__detail'>
                        <h3>Skills</h3>
                        <hr />
                        <div className='detail'>
                            <p>Language : <span>C, C++, Java</span></p>
                            <p>Frontend : <span>HTML, CSS, JavaScript, React,Tailwind</span></p>
                            <p>Backend : <span>NodeJs, Express, MongoDb</span></p>
                            <p>Software : <span>Ms Word, Powerpoint, Excel, Vs Code</span></p>
                            <p>Other : <span>Git, Sql</span></p>
                        </div>
                    </div>

                    <div className='sub__detail'>
                        <h3>Education</h3>
                        <hr />
                        <div className='detail'>
                            <div className='edu__detail'>
                                <p>2021-present</p>
                                <p>B.Tech in CSE</p>
                                <p>Sant Longowal Institute of Engineering and Technology</p>
                                <p>CGPA : <span>9.3</span></p>
                            </div>
                            <div className='edu__detail'>
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
                            </div>
                        </div>
                    </div>
                </div>


                <div className='right__intro'>
                    <div className='experience__list'>
                        <h3>Experience</h3>
                        <hr />
                        <div className='experiance__info'>
                            <p>Dec 2023-Present <span>Infosis</span></p>
                            <p className='position__info'>Software Developer</p>
                            <p>Working under the Research team of Infosis</p>
                        </div>

                        <div className='experiance__info'>
                            <p>Dec 2023-Present <span>Infosis</span></p>
                            <p className='position__info'>Software Developer</p>
                            <p>Working under the Research team of Infosis Working under the Research team of Infosis Working under the Research team of Infosis</p>
                        </div>

                        <div className='experiance__info'>
                            <p>Dec 2023-Present <span>Infosis</span></p>
                            <p className='position__info'>Software Developer</p>
                            <p>Working under the Research team of Infosis Working under the Research team of Infosis</p>
                        </div>
                    </div>

                    <div className='Projects__container'>
                        <h3>Projects</h3>
                        <hr />
                        <div className='project__info'>
                            <p>Dec 2023-Present <span className='project__title'>SSDC website</span></p>
                            <p className='application__used'>Software Developer</p>
                            <p>Working under the Research team of Infosis</p>
                        </div>

                        <div className='project__info'>
                            <p>Dec 2023-Present <span className='project__title'>Resume Builder</span></p>
                            <p className='application__used'>Software Developer</p>
                            <p>Working under the Research team of Infosis Working under the Research team of Infosis Working under the Research team of Infosis</p>
                        </div>

                        <div className='project__info'>
                            <p>Dec 2023-Present <span className='project__title'>Whether App</span></p>
                            <p className='application__used'>Software Developer</p>
                            <p>Working under the Research team of Infosis Working under the Research team of Infosis</p>
                        </div>
                    </div>


                    <div className='achievment__container'>
                        <h3>Achievemets</h3>
                        <hr />
                        <div className='achievement__list'>
                            <div className='achiv__info'>
                                <h4>CodeChef Rating</h4>
                                <h4><a href='#'>Link to CodeChef Profile</a></h4>
                            </div>
                            <div className='achiv__detail'>
                                Rayrtdskjhlkah ahk ljajlkda  uhd ljsda  hi l jdaljdkh a
                            </div>
                        </div>

                        <div className='achievement__list'>
                            <div className='achiv__info'>
                                <h4>CodeForce Rating</h4>
                                <h4><a href='#'>Link to CodeChef Profile</a></h4>
                            </div>
                            <div className='achiv__detail'>
                                Rayrtdskjhlkah ahk ljajlkda  uhd ljsda  hi l jdaljdkh a
                            </div>
                        </div>

                        <div className='achievement__list'>
                            <div className='achiv__info'>
                                <h4>GeekforGeek Rating</h4>
                                <h4><a href='#'>Link to CodeChef Profile</a></h4>
                            </div>
                            <div className='achiv__detail'>
                                Rayrtdskjhlkah ahk ljajlkda  uhd ljsda  hi l jdaljdkh a
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResumeFormat1;