import React from "react";

const Experience = () => {
    return (
        <div className="experience">
            <div className="d-flex justify-content-center my-5">
                <h1>Experience</h1>
            </div>
            <div className="container experience-wrapper">
                <div className="timeline-block timeline-block-right">
                    <div className="marker">
                        <div className="timeline-content">
                            <h3>2014-2015</h3>
                            <p>lorem i
                                here it goes
                            </p>
                        </div>
                    </div>
                    {/* {} */}
                    <div className="timeline-block timeline-block-left">
                        <div className="marker">
                            <div className="timeline-content">
                                <h3>2014-2015</h3>
                                <p>lorem i
                                    here it goes
                                </p>
                            </div>
                        </div>
                    </div>    
                    {/* {} */}
                    <div className="timeline-block timeline-block-right">
                        <div className="marker">
                            <div className="timeline-content">
                                <h3>2014-2015</h3>
                                <p>lorem i
                                    here it goes
                                </p>
                            </div>
                        </div>
                    </div>    
                </div>
            </div>
        </div>
    )
}

export default Experience;
