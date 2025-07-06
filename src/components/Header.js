import React from "react";
import Typed from "react-typed";


const Header = () => {
    return (
        <div id="home" className="header-wraper">
            <div className="main-info">
                <h1>Juan Gonzalez portfolio</h1>
                <Typed
                    className="typed-text"
                    strings={["Production Support Engineer", "Skills =>", "Splunk for IT operations", "DataGrip for database reporting", "AWS s3 bucket operations", "Analyzing Ruby code scripts and other documents", "Troubleshooting and assisting cross-functional teams"]}
                    typeSpeed={50}
                    backSpeed={60}
                    loop
                />
                {/* <a href="#" className="btn-main-offer">contact me here</a> */}
            </div>
        </div>
    )
}

export default Header;
