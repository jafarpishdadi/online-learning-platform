import React, { Component } from "react";
import SocInitiativesGrid from "../../components/socInitiatives/SocInitiativesGrid.js";
import styled from "styled-components";

import Headerbar from "../..//components/headerbar/HeaderTaskbar.js";
import Sidebar from "../..//components/sidebar/sidebar.component.js";
import DashboardCalendarComponent from "../..//components/calendar/dashboardCalendar.component.js";
import Picture from "../../assets/createPicture.png";
import profile from "../../assets/profile.png";
import classes from "../../assets/classes.png";
import scheduling from "../../assets/scheduling.png";
import community from "../../assets/community.png";
import mailbox from "../../assets/mailbox.png";
import achievements from "../../assets/achievements.png";
import socialInitiatives from "../../assets/Welfare.png";
import settings from "../../assets/settings.png";
import dashboard from "../../assets/dashboard.png";

let headerItems = {
  link: "/profile",
  title: "Social Initiatives",
  profileImg: profile
};

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

class AllSocInitiativesPage extends Component {
  render() {
    return (
      <React.Fragment>
        <SidebarWrapper>
          <Sidebar books={navItems} />
        </SidebarWrapper>
        <HeaderbarWrapper>
          <Headerbar icons={headerItems} />
        </HeaderbarWrapper>
        <GridWrapper>
          <SocInitiativesGrid />
        </GridWrapper>
      </React.Fragment>
    );
  }
}

const SidebarWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const HeaderbarWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`;

const GridWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  margin-top: 3rem;
`;

export default AllSocInitiativesPage;
