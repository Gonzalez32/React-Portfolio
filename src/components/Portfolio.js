import React from "react";
import fallingstar from "../Image/fallingstar.png"
import newpost from "../Image/newpost.png"
import tapmate from "../Image/tapmate.png"


const Portfolio = () => {
    return (
        <div className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5"></h1>
                <div className="image-box-wrapper row justify-content-center">
                    <img src={fallingstar} alt="falling star project..." className="portfolio-image"/>
                </div>
                {/* - */}
                <div className="image-box-wrapper row justify-content-center">
                    <img src={newpost} alt="newpost project..." className="portfolio-image"/>
                </div>
                {/* - */}
                <div className="image-box-wrapper row justify-content-center">
                    <img src={tapmate} alt="tapmate project..." className="portfolio-image"/>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;
