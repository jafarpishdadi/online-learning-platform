import React, { Component } from "react";
import "./createEventPage.css";
import Headerbar from "../..//components/headerbar/HeaderTaskbar.js";
import Sidebar from "../..//components/sidebar/sidebar.component.js";
import profile from "../../assets/profile.png";
import Laptop from "../../assets/laptoplady.png";
import classes from "../../assets/classes.png";
import scheduling from "../../assets/scheduling.png";
import community from "../../assets/community.png";
import mailbox from "../../assets/mailbox.png";
import achievements from "../../assets/achievements.png";
import socialInitiatives from "../../assets/Welfare.png";
import settings from "../../assets/settings.png";
import dashboard from "../../assets/dashboard.png";
import calendar from "../../assets/calendar.png";
import { Redirect } from "react-router-dom";
import CreateEvent from "../..//components/createEvent/createEvent.component.js";

let headerItems = {
  link: "/profile",
  title: "Create a New Event",
  profileImg: profile
};

let navItems = [
  { id: 1, link: "/dashboard", imgSrc: dashboard, title: "Dashboard" },
  { id: 2, link: "/allclasslist", imgSrc: classes, title: "Classes" },
  { id: 3, link: "/schedule", imgSrc: scheduling, title: "Scheduling" },
  { id: 4, link: "/discussionList", imgSrc: community, title: "Community" },
  { id: 5, link: "/messageuser", imgSrc: mailbox, title: "Live Chat" },
  {
    id: 6,
    link: "/socialinitiatives",
    imgSrc: socialInitiatives,
    title: "Social Initiatives"
  }
];

class CreateEventPage extends Component {
  render() {
    if (!localStorage.getItem("token")) {
      return <Redirect to="/login" />;
    }
    return (
      <React.Fragment>
        <Sidebar books={navItems} />
        <Headerbar icons={headerItems} />
        <div class="box-2">
          <div class="picture-book">
            <img src={calendar} alt="Map"></img>
            <h1 class="header-create-class">Create the Event</h1>
          </div>
          <div>
            <p>
              Use the form below to create an event that members of UImpactify
              can join
            </p>
            <div class="picture">
              {" "}
              <img src={Laptop} alt="Map"></img>
            </div>
          </div>
          <CreateEvent />
        </div>
      </React.Fragment>
    );
  }
}

export default CreateEventPage;
