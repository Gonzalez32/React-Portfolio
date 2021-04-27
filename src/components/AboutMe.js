import React from "react";
import author from "../myself.jpg";

const AboutMe = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <img src={author} className="img-thumbnail" alt="author..."/>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1>About Me</h1>
                    <p>
                        Hello User, It's nice to meet you! Welcome to my Portfoilo, I have a dog named Ferins he's such a goofy boy that love's to play fetch.
                        My life has been a crazy turn of events. Here I stand with my certificate from GA as a Software Engineer. This Portfolio Is build with ReactJS, a powerful front-end framework.
                        Bootstrap Is also use as well for a more friendly experience.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
