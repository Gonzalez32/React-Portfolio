import React from "react";
import Typed from "react-typed";


const Header = () => {
    return (
        <div id="home" className="header-wraper">
            <div className="main-info">
                <h1>Juan Gonzalez portfolio</h1>
                <Typed
                    className="typed-text"
                    strings={["Software Engineer", "Web Design", "FullStack Developer", "Web Development", "Passionate ❤️"]}
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
