//mine

import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/Screenheading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";

import "./resume.css";
import index from "react-typical";

const Resume = (props)=> {
  const [selectedBullet, setSelectedBullet] = useState(0);
  const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

  //theScrollIn
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
  //fadeInAnimation






  const ResumeHeading = (props) => {
      return(
    <div className="resume-heading">
      <div className="resume-main-heading">
        <div className="heading-bullet"> </div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>

      );
  };

  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Interest", logoSrc: "interests.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
  ];

  const programmingSkillDetail = [
    { skill: "Javascript", ratingPercentage: 85 },
    { skill: "React Js", ratingPercentage: 85 },
    { skill: "Python", ratingPercentage: 95 },
    { skill: "HTML", ratingPercentage: 90 },
    { skill: "Css", ratingPercentage: 100 },
  ];

  const projectsDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "A Personal Portfolio website to showcase all my details and projects at one place.",
      subHeading: "Technologies Used: React JS, Bootsrap",
    },
    {
      title: "Mobile E-shop ",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "An ecommerce application designed to sell products online wth payment system integration",
      subHeading:
        "Technologies Used:  React Native, Mongo DB, Express Js, Node Js, Redux.",
    },
    {
      title: "Ecommerce Website ",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "Online ecommerce website for showcasing and selling products onlne with payment system integration, both Paypal and Stripe",
      subHeading:
        "Technologies Used: Mongo DB, Epress Js, React Js, Node JS, Redux, Bootstrap.",
    },
  ];



  const resumeDetails = [
      <div className="resume-screen-container" key="education">
          <ResumeHeading heading={"Anna university "} subHeading = {"Bachelor of Computer Science Engineering"}
          fromDate={"2016"}
          toDate={"2020"}
          />
<ResumeHeading heading={"George Brown College"} subHeading = {"Applied A.I Solutions Development"}
          fromDate={"2016"}
          toDate={"2020"}
          />

      </div>, 
//experience
      <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Ehizeex Technoloy"}
          subHeading={"FULL STACK DEVELOPER INTERN"}
          fromDate={"2021"}
          toDate={"Present"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Currently working as MERN stack web and mobile developer and also an
            online instructor on udemy.
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - Developed an ecommerce website for client with the dashboard for
            managing the products, managing reviews, users, payment etc. .
          </span>
          <br />
          <span className="resume-description-text">
            - Integrated the web app with backend services to create new user
            onboarding application with dynamic form content.{" "}
          </span>
          <br />
          <span className="resume-description-text">
            - I stretch my mental capacity to develope UI as per the given
            designs.
          </span>
          <br />
        </div>
      </div>

      </div>, 

       <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
{programmingSkillDetail.map((skill, index)=>(
<div className="skill-parent" key = {index}>
    <div className="heading-bullet"></div>
    <span>{skill.skill}</span>
    <div className="skill-percentage" >
<div style={{width : skill.ratingPercentage + "%"}} className='active-percentage-bar'></div>
    </div>

</div>
))}
    </div>, 
<div className="resume-screen-container" key ='projects'>
{projectsDetails.map((project, index)=>(
    <ResumeHeading
    key = {index}
    heading={project.title}
    subHeading={project.subHeading}
    description={project.description}
    fromDate={project.duration.fromDate}
    toDate={project.duration.toDate}
    
    />
))}
</div>, 
    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Teaching"
        description="Apart from being a tech enthusiast and a code writer, i also love to teach people what i know simply because i believe in sharing."
      />
      <ResumeHeading
        heading="Music"
        description="Listening to soothing music is something i can never compromise with, skimming through Spotify's pop songs charts is at times the best stress reliever that i can get my hands on."
      />
      <ResumeHeading
        heading="Competitive Gaming"
        description="I like to challenge my reflexes a lot while competing in football games, pushing the rank and having interactive gaming sessions excites me the most."
      />
    </div>,

  ];



  const handleCarousal = (index)=> {
      let offsetHeight = 360;
      let newCarousalOffset={
          style : { transform : "translateY(" + index * offsetHeight*-1 + "px)"},
      };

      setCarousalOffSetStyle(newCarousalOffset);
      setSelectedBullet(index);
  };

const getBullets = ()=> {
    return resumeBullets.map((bullet, i )=>(
        <div  onClick={() => handleCarousal(i)} className={i === selectedBullet ? "bullet selected-bullet" : "bullet"} key ={index}>
<img className='bullet-logo' src = {require(`../../assets/Resume/${bullet.logoSrc}`)} alt = 'no internet'/>
<span className="bullet-label">{bullet.label}</span>
        </div>
    ));
};


const getResumeScreens = () => {
    return (
        <div style={carousalOffSetStyle.style} className="resume-details-carousal">
            {resumeDetails.map((ResumeDetail) => ResumeDetail)}
        </div>
    );
};


useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div className="resume-container screen-container " id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
            <div className="resume-bullets">
                <div className="bullet-container">
                    <div className="bullet-icons"></div>
                    <div className="bullets">{getBullets()}</div>
                </div>
            </div>
            <div className="resume-bullet-details">{getResumeScreens()}</div>

        </div>
      </div>
    </div>
  );
};

export default Resume;