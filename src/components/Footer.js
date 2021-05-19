import React from "react";

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex">
                            <p>City Of Aurora</p>
                        </div>
                        <div className="d-flex">
                            <a href="tel:(360) 809-3218">(360) 809-3218</a>
                        </div>
                        <div className="d-flex">
                            <p>Juangonzalezrose@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <a href="" className="footer-nav">Home</a>
                                <br />
                                <a href="" className="footer-nav">About Me</a>
                                <br />
                                <a href="" className="footer-nav">Services</a>
                            </div>
                            <div className="col">
                                <a href="" className="footer-nav">Experience</a>
                                <br />
                                <a href="" className="footer-nav">Protfolio</a>
                                <br />
                                <a href="" className="footer-nav">Contacts</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
