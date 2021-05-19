import React from "react";
import emailjs from "emailjs-com";


const Contacts = () => {

    const serviceID = "service_ID";
    const templateID = "template_ID";
    const userID = "user_NIm67VujGKvhrgFdxRKLj"

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(serviceID, templateID, e.target, userID)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
                
            });
    }

    return (
        <div id="contact" className="contacts">
            <div className="text-center">
                <h1 className="contact-me">Contact Me</h1>
                <p>Please fill out the form and describe your project and I'll contect you as soon as possible.</p>
            </div>
            <div className="container">
                <form onSubmit={sendEmail}>
                    <div className="row">
                        <div className="col-md-6 col-xs-12">
                            {/* NAME INPUT */}
                            <input className="form-control" placeholder="Name" name="name" type="text" required />
                            {/*  */}
                            <div className="line"></div>
                            {/* PHONE INPUT */}
                            <input className="form-control" placeholder="Phone Number" name="phone" type="phone" required />
                            {/*  */}
                            <div className="line"></div>
                            {/* EMAIL INPUT */}
                            <input className="form-control" placeholder="Email" name="email" type="email" required />
                            {/*  */}
                            <div className="line"></div>
                            {/* SUBJECT INPUT */}
                            <input className="form-control" placeholder="Subject" name="subject" type="subject" required />
                            {/*  */}
                            <div className="line"></div>
                        </div>
                        <div className="col-md-6 col-xs-12">
                            <textarea className="form-control" placeholder="Enter Text Here..." name="description" cols="20" required ></textarea>
                            <div className="line"></div>
                            <button className="btn-main-offer contact-btn" type="submit" >Contact Me</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contacts;
