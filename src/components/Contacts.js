import React from "react";

const Contacts = () => {
    return (
        <div className="contacts">
            <div className="text-center">
                <h1 className="contact-me">Contact Me</h1>
                <p>Please fill out the form and describe your project and I'll contect you as soon as possible.</p>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-xs-12">
                        {/* NAME INPUT */}
                        <input className="form-control" placeholder="Name" name="name" type="text" />
                        {/*  */}
                        <div className="line"></div>
                        {/* PHONE INPUT */}
                        <input className="form-control" placeholder="Phone Number" name="phone" type="phone" />
                        {/*  */}
                        <div className="line"></div>
                        {/* EMAIL INPUT */}
                        <input className="form-control" placeholder="Email" name="email" type="email" />
                        {/*  */}
                        <div className="line"></div>
                        {/* SUBJECT INPUT */}
                        <input className="form-control" placeholder="Subject" name="subject" type="subject" />
                        {/*  */}
                        <div className="line"></div>
                    </div>
                    <div className="col-md-6 col-xs-12">
                        <textarea className="form-control" placeholder="Enter Text Here..." name="description" cols="20" ></textarea>
                        <div className="line"></div>
                        <button className="btn-main-offer contact-btn" type="submit" >Contact Me</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacts;
