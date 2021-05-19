import React from "react";
import Typed from "react-typed";


const Header = () => {
    return (
        <div id="header" className="header-wraper">
            <div className="main-info">
                <h1>Web Development & website services</h1>
                <Typed
                    className="typed-text"
                    strings={["Web Design", "Web Development", "SMM", "Clients Ads"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <a href="#" className="btn-main-offer">contact me here</a>
            </div>
        </div>
    )
}

export default Header
