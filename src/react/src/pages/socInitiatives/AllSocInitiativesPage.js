import React, { Component } from "react";
import SocInitiativesGrid from "../../components/socInitiatives/SocInitiativesGrid.js";
import styled from "styled-components";

import Headerbar from "../..//components/headerbar/HeaderTaskbar.js";
import Sidebar from "../..//components/sidebar/sidebar.component.js";
import profile from "../../assets/profile.png";
import classes from "../../assets/classes.png";
import scheduling from "../../assets/scheduling.png";
import community from "../../assets/community.png";
import mailbox from "../../assets/mailbox.png";
import socialInitiatives from "../../assets/Welfare.png";
import dashboard from "../../assets/dashboard.png";
import { Redirect } from "react-router-dom";

let headerItems = {
  link: "/profile",
  title: "Social Initiatives",
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

class AllSocInitiativesPage extends Component {
  render() {
    if (!localStorage.getItem("token")) {
      return <Redirect to="/login" />;
    }
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
