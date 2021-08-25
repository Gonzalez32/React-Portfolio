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
                        <h3>2021 - PRESENT</h3>
                        <br />
                        <h1>ENTRY LEVEL DEVELOPER</h1>
                        <h6>
                            Bootcamp Grad & Self-Taught Developer
                        </h6>
                        <ul>
                            <li>
                                Researching and developing new technology design all while adhering to best practices for software development methodology.
                            </li>
                            <li>
                                Troubleshooting and debugging code ensures compatibility with devices, browsers, and operating systems.
                            </li>
                            <li>
                                Currently working with independent clients needs to build company/small business websites.
                            </li>
                            <li>
                                Developing user interfaces with frameworks: React and Flutter.
                            </li>
                        </ul>
                    </div>
                </div>
                {/* {} */}
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2017 - 2020</h3>
                        <br />
                        <h1>RP PAINTING & DECORATING INC.</h1>
                        <h6>Assistant Project Manager</h6>
                        <p>
                            <ul>
                                <li>
                                    Passive language / Doing: Negotiated contracts and provided guidance, direction to both managers and clients.
                                </li>
                                <li>
                                Action language / Achieving: Reduce payroll/benefits administration costs 40% by negotiating pricing and fees, 
                                while ensuring the continuation and enhancements of our services.
                                </li>
                            </ul>
                        </p>
                    </div>
                </div>    
                {/* {} */}
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div> 
                    <div className="timeline-content">
                        <h3>2013 - 2016</h3>
                        <br />
                        <h1>GLANBIA PERFORMANCE NUTRITION (GPN)</h1>
                        <h6>Machine Operator/Assembler/Forklift</h6>
                        <p>
                            <ul>
                                <li>
                                    Follow adjusted settings to accurately complete tasks in accordance with FDA and OSHA safety guidelines.
                                </li>
                                <li>
                                    Minimized wasted time and materials that saved the company over $10,000.
                                </li>
                                <li>
                                    Ensure sufficient supply of raw production materials on a daily basis to guarantee uninterrupted workflow.
                                </li>
                                <li>
                                    Determine and report faults in equipment, including filling out hourly inspection sheets based on production quality.
                                </li>
                            </ul>
                        </p>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default Experience;
