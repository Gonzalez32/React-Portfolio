import React from "react";
import {
    LinkedinShareButton,
    LinkedinIcon,

} from "react-share";
import {GoMarkGithub} from "react-icons/go";
// REACT-SCROLL //
import { Link } from "react-scroll";


const Footer = () => {
    return (
        <div id="footer" className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex">
                            <p>Aurora City Of Lights</p>
                        </div>
                        <div className="d-flex">
                            <a href="tel:(360) 809-3218">(360) 809-3218</a>
                        </div>
                        <div className="d-flex">
                            <a href="email:Juangonzalezrose@gmail.com">Juangonzalezrose@gmail.com</a>
                            {/* <p>Juangonzalezrose@gmail.com</p> */}
                        </div>
                        <br />
                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <Link smooth={true} to="home" className="" >
                                <a href="" className="footer-nav">Home</a>
                                </Link>
                                <br />
                                <a href="" className="footer-nav">About Me</a>
                                <br />
                                {/* <a href="" className="footer-nav">Services</a> */}
                            </div>
                            <div className="col">
                                <a href="" className="footer-nav">Experience</a>
                                <br />
                                <a href="" className="footer-nav">Protfolio</a>
                                <br />
                                <a href="" className="footer-nav">Contacts</a>
                            </div>
                        </div>
                        <br />
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                        <div className="d-flex justify-content-center">
                            <LinkedinShareButton
                                url={"https://www.linkedin.com/in/juan-gonzalez93/"}
                                quote={"FullStack Developer"}
                                hashtag="#javascript"
                            >
                                <LinkedinIcon className="mx-3" size={36} />
                            </LinkedinShareButton>
                            <a href="" onClick={ () => window.open("https://github.com/Gonzalez32")} ><GoMarkGithub size={36}/></a>
                        </div>
                    </div>
                </div>
                    <p className="pt-5 text-center">
                        Copyright&copy;
                        {new Date().getFullYear()}&nbsp;Juan Gonzalez Portfolio | All Rights Reserved
                    </p>
            </div>
        </div>
    )
}

export default Footer;
