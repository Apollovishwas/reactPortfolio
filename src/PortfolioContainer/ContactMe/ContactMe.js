import React , {useState} from "react";
import ScreenHeading from "../../utilities/Screenheading/ScreenHeading";
import Animations from "../../utilities/Animations";
import "./contactMe.css";
import imgBack from "../../../src/images/mailz.jpeg";
import load1 from "../../../src/images/load2.gif";
import ScrollService from "../../utilities/ScrollService";
import Typical from "react-typical";

export default function ContactMe(props) {
    //useState
    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[message, setmessage] = useState("");
    const[banner, setbanner] = useState("");
    const[bool, setbool] = useState(false);

    const handleName = (e)=> {
        setName(e.target.value);
    }
    const handleEmail = (e)=> {
        setEmail(e.target.value);
    }
    const handleMessage = (e)=> {
        setmessage(e.target.value);
    }

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
  //animations
  return (
    <div className="main-container" id={props.id || ""}>
      <ScreenHeading title={"ContactMe"} subHeading={"Lets keep in touch"} />
      <div className="central-form">
        <div className="col">
          <h2>
          
            <Typical
              loop={Infinity}
              steps={[
                "Get in Touch 🕶 ",
                1000,
              ]}
            />
          </h2>
          <a href="#">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-google-plus-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fa fa-youtube-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
        </div>
        <div className="back-form"> 
        <div className="img-back">
            <h4>Send your email here!</h4>
            <img src = {imgBack} alt = 'No internet'/>
            </div>
            <form>
                <p>{banner}</p>
                <label htmlFor="name">Name</label>
                <input type = "text" onChange = {handleName} value={name}/>

                <label htmlFor="email">Email</label>
                <input type = "email" onChange={handleEmail} value={email}/>

                <label htmlFor="message">message</label>
                <textarea type = "text" onChange={handleMessage} value={message}/>

                <div className="send-btn">
                    <button type='submit'> 
Send<i className="fa fa-paper-plane"/>
                    </button>
                </div>
            </form>
            </div>
      </div>
    </div>
  );
}
