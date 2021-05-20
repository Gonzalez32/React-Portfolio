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
                        <h3>2020 - PRESENT</h3>
                        <br />
                        <h6>
                            Software Engineering | Fellow, General Assembly - Full Time
                        </h6>
                        <p>
                            Participated in a full-time, 3 month software engineering immersive, 
                            completing in-class projects, hackathons, and personal projects focused on real-world applications of principles 
                            and best practices. Projects include:
                        </p>
                        <li>
                            Falling Star - Game App
                            <ul>
                                Technology Used: HTML, CSS, JavaScript.
                            </ul>
                        </li>
                        <li>
                            Tapmate - Beer Collection App
                            <ul>
                                Technology Used: HTML, CSS, JavaScript, Node.js, Bulma.
                            </ul>
                        </li>
                        <li>
                            Munch - Recipe App
                            <ul>
                                Technology Used: HTML, CSS, JavaScript, Node.js, ReactJS, Bootstrap.
                            </ul>
                        </li>
                        <li>
                            Newpost - Blog App
                            <ul>
                                Technology Used: HTML, CSS, Python, Django, Bulma.
                            </ul>
                        </li>
                    </div>
                </div>
                {/* {} */}
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2017 - 2020</h3>
                        <br />
                        <h6>RP Painting, West Chicago - Sales Representative</h6>
                        <p>
                            Verified purchase orders and acceptable vendors by comparing items/vendors request to catalog. 
                            Clarify unclear items, recommended alternatives. Foster and maintain strong relationships with 
                            Operations, Sales, Account Management and Finance.
                        </p>
                    </div>
                </div>    
                {/* {} */}
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div> 
                    <div className="timeline-content">
                        <h3>2012 - 2016</h3>
                        <br />
                        <h6>Glanbia Performance Nutrition(GPN), Aurora - Machine Operator/Assembler</h6>
                        <p>
                            Ensure that work procedures are being followed in a consistent manner (Safety, Quality, GMP, HACCP). 
                            Perform safety inspections daily with full awareness of all safety points on all machines. 
                            Understand the differences in powders and quickly troubleshoot in production being able to successfully
                            perform the procedures associated with allergen. 
                        </p>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default Experience;
