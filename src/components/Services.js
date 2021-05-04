import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faDesktop, faFileCode } from "@fortawesome/free-solid-svg-icons";


const Services = () => {
    return (
        <div className="services">
            <h1 className="py-5">My Services</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                               <div className="circle"> <FontAwesomeIcon className="icon" icon={faDesktop} size="2x"/> </div>
                                <h3>Web Designs</h3>
                                <p>I approach each project individually and always focus on the result.</p>
                            </div>
                        </div>
                        {/* {-} */}
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                            <div className="circle"> <FontAwesomeIcon className="icon" icon={faFileCode} size="2x"/> </div>
                                <h3>Web Development</h3>
                                <p>Your website will be build with the newest technologies.</p>
                            </div>
                        </div>
                        {/* {-} */}
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                            <div className="circle"> <FontAwesomeIcon className="icon" icon={faGoogle} size="2x"/> </div>
                                <h3>Google</h3>
                                <p>Your service or product will apper at the top of the google search.</p>
                            </div>
                        </div>
                        {/* {-} */}
                    </div>
                </div>
            </div>
    )
}

export default Services;
