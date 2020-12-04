import React, { Component } from "react";
import Header from "../../components/headerbar/HeaderTaskbar.js";
import User from "../../components/messages/User.js";
import profile from "../../assets/profile.png";
import Sidebar from "../..//components/sidebar/sidebar.component.js";
import classes from "../../assets/classes.png";
import scheduling from "../../assets/scheduling.png";
import community from "../../assets/community.png";
import mailbox from "../../assets/mailbox.png";
import achievements from "../../assets/achievements.png";
import socialInitiatives from "../../assets/Welfare.png";
import settings from "../../assets/settings.png";
import dashboard from "../../assets/dashboard.png";

let headerItems = { link: "/profile", title: "Messaging", profileImg: profile };

let navItems = [
  { id: 1, link: "/dashboard", imgSrc: dashboard, title: "Dashboard" },
  { id: 2, link: "/allclasslist", imgSrc: classes, title: "Classes" },
  { id: 3, link: "/schedule", imgSrc: scheduling, title: "Scheduling" },
  { id: 4, link: "", imgSrc: community, title: "Community" },
  { id: 5, link: "/messageuser", imgSrc: mailbox, title: "Messaging" },
  { id: 6, link: "", imgSrc: achievements, title: "Achievements" },
  {
    id: 7,
    link: "/socialinitiatives",
    imgSrc: socialInitiatives,
    title: "Social Initiatives"
  },
  { id: 8, link: "", imgSrc: settings, title: "Settings" }
];

class SpecifyUserPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Sidebar books={navItems} />
        <Header icons={headerItems} />
        <User />
      </React.Fragment>
    );
  }
}

export default SpecifyUserPage;
