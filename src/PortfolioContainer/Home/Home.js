import React, { Component } from "react";
import Profile from "../Profile/Profile";
import ContactMe from "../ContactMe/ContactMe";
import Footer from "../Footer/Footer";
import Resume from "../Resume/Resume";
import portfolio from "../../assets/profile/portfolio.js";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: portfolio.profile,
      resume: portfolio.resume,
      emailConfig: portfolio.emailConfig,
      toastConfig: portfolio.toastConfig,
      clockLoaderConfig: portfolio.clockLoaderConfig,
    };
  }

  render() {
    return (
      <>
        <Profile profile={this.state.profile} />
        <Resume resume={this.state.resume} />
        <ContactMe
          emailConfig={this.state.emailConfig}
          toastConfig={this.state.toastConfig}
          clockLoaderConfig={this.state.clockLoaderConfig}
        />
        <Footer links={this.state.profile.links} />
      </>
    );
  }
}
