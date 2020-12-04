import React, { Component } from "react";
import Calendar from "../../components/calendar/calendar.component.js";
import Header from "../../components/headerbar/HeaderTaskbar.js";
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

let headerItems = { link: "/profile", title: "Schedule", profileImg: profile };

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
let selectedDate = [{ id: 1, date: window.localStorage.getItem("date") }];

class SchedulePage extends Component {
  render() {
    return (
      <React.Fragment>
        <Sidebar books={navItems} />
        <Header icons={headerItems} />
        <div class="d-flex flex-row p-2">
          <div class="d-flex flex-column">
            <Calendar theDate={selectedDate} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SchedulePage;
