import React from "react";
import "./aboutMe.css";
import ScreenHeading from "../../utilities/Screenheading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations"


export default function AboutMe(props) {

let fadeInScreenHandler = (screen)=> {
    if(screen.fadeScreen != props.id)
    return 
    Animations.fadeInScreen(props.id)
}



const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)
//fadeInAnimation



const SCREEN_CONST = {
    desc : 'Full stack web and mobile developer with background knowledge of Machine learning', 
    highlights : {
        bullets : [
            "Fullstack Web and Mobile Development", 
            "Interactive Front enf as per the design", 
            "Data Scientist", 
            "Developing Machine learning Solutions", 

        ], 

        heading : "Here are a Few Highlights : "
    }
}



const renderHighlights = () => {
    return (
        SCREEN_CONST.highlights.bullets.map((value, i)=> (
            <div className="highlight" key={i}>
                <div className="highlight-blob"></div>
                <span>{value}</span>
            </div>
        ))
    )
}

    return (
        <div className="about-me-container screen-container">
            <div className="about-me-parent">
                <ScreenHeading title={'About Me'} subHeading = {'Why Choose me?'}/>
                <div className="about-me-card">
                    <div className="about-me-profile"></div>
                    <div className="about-me-details">
                        <span className="about-me-description">{SCREEN_CONST.desc}</span>
                        <div className="about-me-highlights">
                            <div className="highlights-heading">
                                <span>{SCREEN_CONST.highlights.heading}</span>
                            </div>
                            {renderHighlights()}
                        </div>
                        <div className="about-me-options">
                        <button className="btn primary-btn"> Hire Me </button>
            <a href="pasteyourresumeinpublicfolder" download="myresume.pdf">
              <button className="btn highlighted-btn">Get Resume</button></a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}