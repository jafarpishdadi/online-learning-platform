import React, { Component } from "react";
import "./events.css";
import Headerbar from "../../components/headerbar/HeaderTaskbar.js";
import Sidebar from "../../components/sidebar/sidebar.component.js";
import profile from "../../assets/profile.png";
import classes from "../../assets/classes.png";
import scheduling from "../../assets/scheduling.png";
import community from "../../assets/community.png";
import mailbox from "../../assets/mailbox.png";
import socialInitiatives from "../../assets/Welfare.png";
import dashboard from "../../assets/dashboard.png";
import { Redirect } from "react-router-dom";
import AllEventsList from "../../components/events/eventlist.js";

let headerItems = {
  link: "/profile",
  title: "Join a New Event",
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

class AllEventListPage extends Component {
  render() {
    if (!localStorage.getItem("token")) {
      return <Redirect to="/login" />;
    }
    return (
      <React.Fragment>
        <Sidebar books={navItems} />
        <Headerbar icons={headerItems} />
        <div class="box-2">
          <AllEventsList />
        </div>
      </React.Fragment>
    );
  }
}

export default AllEventListPage;
