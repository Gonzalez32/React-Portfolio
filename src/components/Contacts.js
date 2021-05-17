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
                        <input id="name" className="form-control" placeholder="Name" name="name" type="text" />
                        {/*  */}
                        {/* PHONE INPUT */}
                        <input id="phone" className="form-control" placeholder="Phone Number" phone="phone" type="phone" />
                        {/*  */}
                        {/* EMAIL INPUT */}
                        <input id="email" className="form-control" placeholder="Email" email="email" type="email" />
                        {/*  */}
                        {/* SUBJECT INPUT */}
                        <input id="subject" className="form-control" placeholder="Subject" subject="subject" type="subject" />
                        {/*  */}
                    </div>
                    <div className="col-md-6 col-xs-12">
                        <textarea className="form-control" placeholder="Enter Text Here..." name="" id="description" cols="20" rows="6"></textarea>
                        <button className="btn-main-offer contact-btn" type="submit" >Contact Me</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacts;
