import React, { Component } from "react";
import Profile from "./Profile/Profile";
import ProfileFooter from "./ProfileFooter/ProfileFooter";
import ContactMe from "../ContactMe/ContactMe";
import Footer from "../Footer/Footer";
import Resume from "../Resume/Resume";
import "./Home.css";

export default class Home extends Component {
  profile = {
    links: {
      github: "https://github.com/rajatrjsharma",
      linkedin: "https://www.linkedin.com/in/rajatrjsharma",
      instagram: "https://www.instagram.com/rj_rajatsharma/",
    },
    fullname: "Rajat Kumar Sharma",
    profileSkills: {
      skills: [
        "Software Developer",
        "Full Stack Developer",
        "Angular Dev",
        "Play Framework",
        "React Dev",
        "Spring Boot",
      ],
      skillTime: 1000,
    },
    profileTagline:
      "I develop applications with front and back end operations.",
  };

  render() {
    return (
      <>
        <div className="home-container">
          <Profile profile={this.profile} />
          <ProfileFooter />
        </div>
        <Resume />
        <ContactMe />
        <Footer />
      </>
    );
  }
}
