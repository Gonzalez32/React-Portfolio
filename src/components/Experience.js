import React from "react";

const Experience = () => {
    return (
        <div id="experience" className="experience">
            <div className="d-flex justify-content-center my-5">
                <h1>Experience</h1>
            </div>
            <div className="container experience-wrapper">
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2021</h3>
                        <br />
                        {/* company */}
                        <h1>
                            General Assembly Software Engineering Immersive
                        </h1>
                        {/* location */}
                        <h3>
                            Remote
                        </h3>
                        {/* title */}
                        <h6>
                            Software Engineer Fellow
                        </h6>
                        <br />
                        <p>
                            Developed skills In full-stack development through a three-month, 420-hours intensive program. 
                            Worked independently and In teams to bulid full-stack web applications.
                        </p>
                        <ul>
                            <li>
                                Project 1: Falling Star - Moving star left and right into the gaps that render upward until the star hits the upper bar where the game will end and show the user high score. 
                                Basic front-end functionality using HTML, CSS, and JavaScript.
                            </li>
                            <br />
                            <li>
                                Project 2: Tapmate - Beer collection app where users can login and use the message board, add other users, see other user beer lists, and find beers on the search page. 
                                I use an API for the endpoints of each beer = [description, ingredients, beer tagline, first brewed, brewers tips, and my favorite food pairing]. 
                                Using Node.Js, Express.Js, MongoDB, CSS, HTML, Bulma, Punk API, Heroku Deployment, and Google Auth.
                            </li>
                            <br />
                            <li>
                                Project 3: Munch - Recipe app, fully functioning MERN full-stack prototype with full CRUD. 
                                Built as a team using MongoDB, Express.Js, React, Node.Js, Edamam Recipe Search API, Heroku Deployment, and Bootstrap.
                            </li>
                            <br />
                            <li>
                                Project 4: Newpost - A dynamic, blog post app where users can login and create a post publicly. 
                                This project Is a full-stack web app providing full CRUD, built on Django, PostgreSQL, Heroku Deployment, HTML, CSS, and Bulma.
                            </li>
                        </ul>
                    </div>
                </div>
                {/* {} */}
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2018 - 2020</h3>
                        <br />
                        <h1>
                            Smithfield
                        </h1>
                        <h3>
                            St. Charles, IL
                        </h3>
                        <h6>
                            1st Shift Machine Operator/ Operations
                        </h6>
                        <br />
                        <ul>
                            <li>
                                Daily stand-up 1st shift operations supervisor talks about our goals, production-flow-chart, safety guidelines (PPE, OSHA, FDA), and reports any Issue.
                            </li>
                            <br />
                            <li>
                                Depending on the production schedule, my task can be very unpredictable and must be okay with constant change.
                            </li>
                            <br />
                            <li>
                                Performing many tasks requiring continuous/repetitive movement, physically demanding, lifting up to 30 lbs to 60 lbs bags of spices and raw frozen meat.
                            </li>
                            <br />
                            <li>
                                Fully trained and certified forklift operator. I gain a lot of experience operating machinery In a fast-paced production environment and with my strong work ethic.
                            </li>
                        </ul>
                    </div>
                </div>    
                {/* {} */}
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div> 
                    <div className="timeline-content">
                        <h3>2014 - 2017</h3>
                        <br />
                        <h1>
                            GLANBIA PERFORMANCE NUTRITION (GPN)
                        </h1>
                        <h3>
                            Aurora, IL
                        </h3>
                        <h6>
                            Machine Operator/Assembler/Forklift
                        </h6>
                        <br />
                        <ul>
                            <li>
                                Follow adjusted settings to accurately complete tasks in accordance with FDA and OSHA safety guidelines.
                            </li>
                            <br />
                            <li>
                                Minimized wasted time and materials that saved the company over $10,000.
                            </li>
                            <br />
                            <li>
                                Ensure sufficient supply of raw production materials on a daily basis to guarantee uninterrupted workflow.
                            </li>
                            <br />
                            <li>
                                Determine and report faults in equipment, including filling out hourly inspection sheets based on production quality.
                            </li>
                        </ul>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default Experience;
