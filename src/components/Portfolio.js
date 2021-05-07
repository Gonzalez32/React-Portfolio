import React from "react";
import fallingstar from "../Image/fallingstar.png";
import newpost from "../Image/newpost.png";
import tapmate from "../Image/tapmate.png";
// FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";


const Portfolio = () => {

    // FALLINGSTAR
    const popupboxforfallingstar = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={fallingstar} alt="Falling Star Project..."/>
                <p>This project Is build with HTML, CSS, and JavaScript</p>
                <b>GitHub:</b> <a href="" className="hyper-link" onClick={ () => window.open("https://github.com/Gonzalez32/FALLING-STAR") }>https://github.com/Gonzalez32/FALLING-STAR</a>
            </>
        )
        PopupboxManager.open({content})
    }

    const popupboxConfigFallingStar = {
        titleBar: {
            enable: true,
            text: "Falling Star Project."
        },
        fadeIn: true,
        fadeInSpeed: 500
    }
    return (
        <div className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">Portfolio</h1>
                <div className="image-box-wrapper row justify-content-center">
                    <div className="portfolio-image-box" onClick={popupboxforfallingstar}>
                        <img src={fallingstar} alt="falling star project..." className="portfolio-image"/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                {/* - */}
                    <div className="portfolio-image-box">
                        <img src={newpost} alt="newpost project..." className="portfolio-image"/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>    
                {/* - */}
                    <div className="portfolio-image-box">
                        <img src={tapmate} alt="tapmate project..." className="portfolio-image"/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>    
                </div>
            </div>
            <PopupboxContainer {...popupboxConfigFallingStar}/>
        </div>
    )
}

export default Portfolio;
