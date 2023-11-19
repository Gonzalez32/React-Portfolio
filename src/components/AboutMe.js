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
                        I am a full-stack engineer who tries to make the most out of difficult situations. 
                        I'm not comfortable with settling and I’m always looking for opportunities to do better. 
                        I still get nervous at daily stand-up and stand-down, but I enjoy these moments because we’re all together as a team.
                        I am excited to solve, adept at learning quickly with a driven and positive attitude. 
                        I look to find new creative ways to inspire and better the lives of others.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
