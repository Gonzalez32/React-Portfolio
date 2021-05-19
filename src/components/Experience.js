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
                        <h3>2012-2014</h3>
                        <p>
                            lorem i here it goes more info will incress this message and should even out the layout hopefully.
                            Also may the odds be in your most ever favor!
                        </p>
                    </div>
                </div>
                {/* {} */}
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2014-2016</h3>
                        <p>
                            here it goes more info will incress this message and should even out the layout hopefully.
                            Also may the odds be in your most ever favor!
                        </p>
                    </div>
                </div>    
                {/* {} */}
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div> 
                    <div className="timeline-content">
                        <h3>2017-2020</h3>
                        <p>
                            I LOVE YOU SO MUCH HAYLEY GONZALEZ AND ALEX GONZALEZ! 
                        </p>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default Experience;
