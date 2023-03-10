import React, { Component } from "react";
import Profile from "./Profile/Profile";
import ProfileFooter from "./ProfileFooter/ProfileFooter";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <Profile />
        <ProfileFooter />
      </div>
    );
  }
}
