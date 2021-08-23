import React from "react";
import author from "../Image/me.jpg";

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
                    <p>
                    General Assembly graduate, looking for an entry level as a full stack developer. 
                    I'm a self-starter that loves to learn, and who tries to make the most out of difficult situations. 
                    Ready to make a positive impact, hoping to join a great team and grow within.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
