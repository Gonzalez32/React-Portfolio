import React from "react";

const Services = () => {
    return (
        <div className="services">
            <h1 className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                                <h3>Web Designs</h3>
                                <p>I approach each project individually and always focus on the result.</p>
                            </div>
                        </div>
                        {/* {-} */}
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                                <h3>Web Development</h3>
                                <p>Your website will be build with the newest technologies.</p>
                            </div>
                        </div>
                        {/* {-} */}
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                                <h3>Google</h3>
                                <p>Your service or product will apper at the top of the google search.</p>
                            </div>
                        </div>
                        {/* {-} */}
                    </div>
                </div>
            </h1>
        </div>
    )
}

export default Services;
