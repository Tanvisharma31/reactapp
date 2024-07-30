// Path.jsx

import React, { useEffect, useState } from 'react';
import './Path.css'; 

const Path = () => {
    
    return (
        
        <div className="w-full mx-auto max_width_holder max-w-[1400px] max-[1500px]:max-w-[1100px] overflow-x-hidden overflow-y-scroll">
           
        <section className="career">
            <div className="career-container">
                <div className="career-row1">
                    <div className="career-head">
                        <p className="career-t1 bg-white text-black">Human Generated</p>
                        <p className="career-t2 text-white">certification available</p>
                    </div>
                    <h1 className="career-heading text-white">Become Frontend Developer</h1>
                    <p className="career-content text-white">
                        In this track, you’ll discover everything you need to know to become
                        a data engineer by learning Python, SQL, and Git from scratch.
                        You'll discover how to interact with relational databases to query,
                        input, and modify data and get hands-on experience in importing and
                        cleaning data in Python, optimizing your code for efficiency, and
                        writing tests to validate your code. Throughout this track, you’ll
                        learn some of the essential data engineering tools, starting with
                        SQL and Python, before moving on to topics such as cloud computing,
                        clearing data, and working with Git. These foundational skills will
                        allow you to work with data in various ways, building the knowledge
                        you need to become a data engineer. You'll also learn the key
                        concepts and skills required by data engineers such as how to
                        interpret data visualizations, create functions, and utilize version
                        control. By the end of this track, you'll be equipped with the
                        necessary tools and knowledge to progress your career by handling
                        common data engineering duties.
                    </p>
                    <div className="career-buttons ">
                            <div className="career-join text-white ">Join Waitlist</div>
                            <div className="career-view text-white">View curated course</div>
                            <div className="career-know text-white">Know in details</div>
                    </div>
                </div>
                <div className="career-row2">
                    <div className="blank">
                        <img src="/src/assets/p.png" alt="Career Screenshot 1" />
                    </div>
                    <div className="blank">
                        <img src="/src/assets/s.png" alt="Career Screenshot 2" />
                    </div>
                    <div className="career-logo-container">
                        <div className="career-logos">
                            <img src="/src/assets/amazon.png" alt="Amazon Logo" />
                            <img src="/src/assets/company-img1.png" alt="Company Logo 1" />
                            <img src="/src/assets/company-img2.png" alt="Company Logo 2" />
                            <img src="/src/assets/company-img3.png" alt="Company Logo 3" />
                        </div>
                        <h4>View companies</h4>
                    </div>
                </div>
            </div>
        </section>
            <section className="hero-section">
                <div className="timeline_title">
                    <h1>START YOUR JOURNEY</h1>
                </div>
                <div className="container">
                    <div className="timeline">
                        <div className="timeline-container primary" data-aos="fade-up">
                            <div className="timeline-icon">
                                <i className="fab fa-html5"></i>
                            </div>
                            <div className="timeline-body timeline-html">
                                <div className="gradient"></div>
                                <div className="timeline-lessons">
                                    <div className="timeline-lesson">
                                        <div className="icon">
                                            <i className="ri-file-2-line"></i>
                                        </div>
                                        <p className='text-white'>23 lessons</p>
                                    </div>
                                    <div className="timeline-practice">
                                        <div className="practice"></div>
                                    <p className='text-white'>33 practices</p>
                                    </div>
                                </div>

                            <h1 className="timeline-headline text-white">
                                    Embark on a coding adventure with HTML
                                </h1>
                            <p className="timeline-content text-white">
                                    HTML is the basic and must have skill-set for every web
                                    developer. It is used and extended by various other
                                    technologies. To be completely able to understand how things
                                    work in web development, you should develop an understanding of
                                    HTML
                                </p>
                                <div className="timeline-foot">
                                    <p className="timeline-subtitle">2 Hours Ago</p>
                                <button className="timeline-button text-white" >
                                        view details
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="timeline-container danger" data-aos="fade-up">
                            <div className="timeline-icon"><i className="fab fa-css3-alt"></i></div>
                            <div className="timeline-body timeline-css">
                                <div className="gradient"></div>
                                <div className="timeline-lessons">
                                    <div className="timeline-lesson">
                                        <div className="icon">
                                            <i className="ri-file-2-line"></i>
                                        </div>
                                        <p className='text-white'>23 lessons</p>
                                    </div>
                                    <div className="timeline-practice">
                                        <div className="practice">
                                            <i className="ri-code-box-line"></i>
                                        </div>
                                        <p className='text-white'>33 practices</p>
                                    </div>
                                </div>

                                <h1 className="timeline-headline text-white">Style your Success with Css</h1>
                                <p className="timeline-content text-white">
                                    CSS is another important language amongst the web development
                                    trifecta. It will help you style, plan a layout and control the
                                    behaviour and look and feel of the web apps that you build.
                                </p>
                                <div className="timeline-foot">
                                    <p className="timeline-subtitle text-white">2 Hours Ago</p>
                                    <button className="timeline-button text-white" >
                                        view details
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="timeline-container success" data-aos="fade-up">
                            <div className="timeline-icon"><i className="fab fa-js-square"></i></div>
                            <div className="timeline-body timeline-javascript">
                                <div className="gradient"></div>
                                <div className="timeline-lessons">
                                    <div className="timeline-lesson">
                                        <div className="icon">3</div>
                                        <p className='text-white'>23 lessons</p>
                                    </div>
                                    <div className="timeline-practice">
                                        <div className="practice">
                                            <i className="ri-code-box-line"></i>
                                        </div>
                                        <p className='text-white'>33 practices</p>
                                    </div>
                                </div>

                                <h1 className="timeline-headline text-white">Join the JavaScript journey</h1>
                                <p className="timeline-content text-white">
                                    The third one amongst the must learn trifecta, Js is present in
                                    about 90% of the internet. To make sense of what you’re doing
                                    and to design and build new web apps, this language is used
                                    predominantly, and it is indispensable
                                </p>
                                <div className="timeline-foot">
                                    <p className="timeline-subtitle text-white">2 Hours Ago</p>
                                    <button className="timeline-button text-white" >
                                        view details
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="timeline-container warning" data-aos="fade-up">
                            <div className="timeline-icon"><i className="fab fa-react"></i></div>
                            <div className="timeline-body timeline-react">
                                <div className="gradient"></div>
                                <div className="timeline-lessons">
                                    <div className="timeline-lesson">
                                        <div className="icon">
                                            <i className="ri-file-2-line"></i>
                                        </div>
                                        <p className='text-white'>23 lessons</p>
                                    </div>
                                    <div className="timeline-practice">
                                        <div className="practice">
                                            <i className="ri-code-box-line"></i>
                                        </div>
                                        <p className='text-white'>33 practices</p>
                                    </div>
                                </div>

                                <h1 className="timeline-headline text-white">React to success with ReactJs</h1>
                                <p className="timeline-content text-white">
                                    Reactjs is the best and most popular framework for front-end
                                    development. An integral part of the MERN stack, its community
                                    is great, and the demand for reactjs specialists is only
                                    increasing day-by-day. React is great for Rapid app development,
                                    SPAs and for creating awesome responsive and interactive web
                                    apps
                                </p>
                                <div className="timeline-foot">
                                    <p className="timeline-subtitle text-white">2 Hours Ago</p>
                                    <button className="timeline-button text-white" >
                                        view details
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="timeline-container" data-aos="fade-up">
                            <div className="timeline-icon"><i className="fab fa-node-js"></i></div>
                            <div className="timeline-body timeline-node">
                                <div className="gradient"></div>
                                <div className="timeline-lessons">
                                    <div className="timeline-lesson">
                                        <div className="icon">
                                            <i className="ri-file-2-line"></i>
                                        </div>
                                        <p className='text-white'>23 lessons</p>
                                    </div>
                                    <div className="timeline-practice">
                                        <div className="practice">
                                            <i className="ri-code-box-line"></i>
                                        </div>
                                        <p className='text-white'>33 practices</p>
                                    </div>
                                </div>

                                <h1 className="timeline-headline text-white">Embark on a Node journey</h1>
                                <p className="timeline-content text-white">
                                    Nodejs is a great skill to have. It is JS based, and it
                                    completes the javascript full stack experience. It is a backend
                                    skill, which is in demand and pays well
                                </p>
                                <div className="timeline-foot">
                                    <p className="timeline-subtitle text-white">2 Hours Ago</p>
                                    <button className="timeline-button text-white" >
                                        view details
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="timeline-container info" data-aos="fade-up">
                            <div className="timeline-icon"><i className="fas fa-database"></i></div>
                            <div className="timeline-body timeline-mongodb">
                                <div className="gradient"></div>
                                <div className="timeline-lessons">
                                    <div className="timeline-lesson">
                                        <div className="icon">
                                            <i className="ri-file-2-line"></i>
                                        </div>
                                        <p className='text-white'>23 lessons</p>
                                    </div>
                                    <div className="timeline-practice">
                                        <div className="practice">
                                            <i className="ri-code-box-line"></i>
                                        </div>
                                        <p className='text-white'>33 practices</p>
                                    </div>
                                </div>

                                <h1 className="timeline-headline text-white">Master the MongoDb</h1>
                                <p className="timeline-content text-white">
                                    This is a data driven schema-less NoSql database. It is a great
                                    tool to know. The syntax is very similar to javascript making it
                                    much easier to learn. You can use this for projects of any size
                                    and is also very easy to scale up or down depending on your
                                    requirements
                                </p>
                                <div className="timeline-foot text-white">
                                    <p className="timeline-subtitle text-white">2 Hours Ago</p>
                                    <button className="timeline-button text-white" >
                                        view details
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="about">
                <div className="about-container ">
                    <h1 className="about-heading">Also Must to know about</h1>
                    <div className="about-row1">
                        <div className="about-card ">
                            <p className='text-white'>Skill path | Human generated</p>
                            <h1 className='text-white'>Git & Github</h1>
                            <p className='text-white'>
                                You will investigate a dataset from a fictitious company called
                                Databel in Power BI, and need to figure out why ...
                            </p>
                            <div className="about-buttons">
                                <div className="about-viewbtn text-white">View skill path</div>
                                <div className="about-enrollbtn text-white">Enroll now</div>
                            </div>
                        </div>
                        <div className="about-card ">
                            <p className='text-white'>Skill path | Human generated</p>
                            <h1 className='text-white'>Git & Github</h1>
                            <p className='text-white'>
                                You will investigate a dataset from a fictitious company called
                                Databel in Power BI, and need to figure out why ...
                            </p>
                            <div className="about-buttons">
                                <div className="about-viewbtn text-white">View skill path</div>
                                <div className="about-enrollbtn text-white">Enroll now</div>
                            </div>
                        </div>
                        <div className="about-card ">
                            <p className='text-white'>Skill path | Human generated</p>
                            <h1 className='text-white'>Git & Github</h1>
                            <p className='text-white'>
                                You will investigate a dataset from a fictitious company called
                                Databel in Power BI, and need to figure out why ...
                            </p>
                            <div className="about-buttons">
                                <div className="about-viewbtn text-white">View skill path</div>
                                <div className="about-enrollbtn text-white">Enroll now</div>
                            </div>
                        </div>
                        <div className="about-card ">
                            <p className='text-white'>Skill path | Human generated</p>
                            <h1 className='text-white'>Git & Github</h1>
                            <p className='text-white'>
                                You will investigate a dataset from a fictitious company called
                                Databel in Power BI, and need to figure out why ...
                            </p>
                            <div className="about-buttons">
                                <div className="about-viewbtn text-white">View skill path</div>
                                <div className="about-enrollbtn text-white">Enroll now</div>
                            </div>
                        </div>
                        <div className="about-card ">
                            <p className='text-white'>Skill path | Human generated</p>
                            <h1 className='text-white'>Git & Github</h1>
                            <p className='text-white'>
                                You will investigate a dataset from a fictitious company called
                                Databel in Power BI, and need to figure out why ...
                            </p>
                            <div className="about-buttons">
                                <div className="about-viewbtn text-white">View skill path</div>
                                <div className="about-enrollbtn text-white">Enroll now</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Path;
