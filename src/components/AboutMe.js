import React from "react";
import author from "../Image/profile_pic_2023.png";

const AboutMe = () => {
    return (
        <div id="about" className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap">
                        <img src={author} className="img-thumbnail-profile" alt="author..."/>
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="header-aboutme">About Me</h1>
                    <br />
                    <p>
                        I am driven by opportunity, and thrive in working with strong teams valuing growth, innovation, and mutual support. Helping others is something I take great pride in, actively contributing and mentoring with knowledge from my experiences, successes and failures, ensuring everyone has the tools and knowledge to succeed. My goal is to build scalable, impactful solutions while fostering a culture of learning and collaboration.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
