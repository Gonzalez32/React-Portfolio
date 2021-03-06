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
import { isElement } from "react-dom/cjs/react-dom-test-utils.development";


const Portfolio = () => {

    // FALLINGSTAR
    const popupboxforfallingstar = () => {
        const content = (
            <>
                {/* <h3>Falling Star - (Game Project)</h3> */}
                <h1>
                    FALLING STAR
                </h1>
                <br />
                <img className="portfolio-image-popupbox" src={fallingstar} alt="Falling Star Project..."/>
                <ul>
                    <li>
                        <b>GitHub:</b> <a href="" className="hyper-link" onClick={ () => window.open("https://github.com/Gonzalez32/FALLING-STAR") }>https://github.com/Gonzalez32/FALLING-STAR</a>
                    </li>
                    <li>
                        <b>Demo:</b> <a href="" className="hyper-link" onClick={ () => window.open("https://w-oatmeal.surge.sh/") }>https://w-oatmeal.surge.sh/</a>
                    </li>
                </ul>
            </>
        )
        PopupboxManager.open({content})
    }

    const popupboxConfigFallingStar = {
        titleBar: {
            enable: true,
            // text: "Falling Star Project."
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    // NEWPOST
    const popupboxfornewpost = () => {
        const content = (
            <>
                {/* <h3>Newpost - (Blog Project)</h3> */}
                <h1>
                    NEWPOST
                </h1>
                <br />
                <img className="portfolio-image-popupbox" src={newpost} alt="New Post Project..."/>
                <ul>
                    <li>
                        <b>GitHub:</b> <a href="" className="hyper-link" onClick={ () => window.open("https://github.com/Gonzalez32/Newpost") }>https://github.com/Gonzalez32/Newpost</a>
                    </li>
                    <li>
                        <b>Demo:</b> <a href="" className="hyper-link" onClick={ () => window.open("https://newpostpost.herokuapp.com/") }>https://newpostpost.herokuapp.com/</a>
                    </li>
                </ul> 
            </>
        )
        PopupboxManager.open({content})
    }

    const popupboxConfigNewPost = {
        titleBar: {
            enable: true,
            // text: "New Post Project."
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    // TAPMATE
    const popupboxfortapmate = () => {
        const content = (
            <>
                {/* <h3>Tapmate - (Beer Collection Project)</h3> */}
                <h1>
                    TAPMATE
                </h1>
                <br />
                <img className="portfolio-image-popupbox" src={tapmate} alt="Tapmate Project..."/>
                <ul>
                    <li>
                        <b>GitHub:</b> <a href="" className="hyper-link" onClick={ () => window.open("https://github.com/Gonzalez32/Tapmate") }>https://github.com/Gonzalez32/Tapmate</a>
                    </li>
                    <li>
                        <b>Demo:</b> <a href="" className="hyper-link" onClick={ () => window.open("https://tap-mate.herokuapp.com/") }>https://tap-mate.herokuapp.com/</a>
                    </li>
                </ul>
            </>
        )
        PopupboxManager.open({content})
    }

    const popupboxConfigTapmate = {
        titleBar: {
            enable: true,
            // text: "Tapmate Project"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    return (
        <div id="portfolio" className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">Portfolio</h1>
                <div className="image-box-wrapper row justify-content-center">
                    <div className="portfolio-image-box" onClick={popupboxforfallingstar}>
                        <img src={fallingstar} alt="falling star project..." className="portfolio-image"/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                {/* - */}
                    <div className="portfolio-image-box" onClick={popupboxfornewpost}>
                        <img src={newpost} alt="newpost project..." className="portfolio-image"/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>    
                {/* - */}
                    <div className="portfolio-image-box" onClick={popupboxfortapmate}>
                        <img src={tapmate} alt="tapmate project..." className="portfolio-image"/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>    
                </div>
            </div>
            <PopupboxContainer {...popupboxConfigFallingStar}/>
            <PopupboxContainer {...popupboxConfigNewPost}/>
            <PopupboxContainer {...popupboxConfigTapmate}/>
        </div>
    )
}

export default Portfolio;
