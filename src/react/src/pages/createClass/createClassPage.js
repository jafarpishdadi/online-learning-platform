import React, { Component } from "react";
import "./createClassPage.css";
import Headerbar from "../..//components/headerbar/HeaderTaskbar.js";
import Sidebar from "../..//components/sidebar/sidebar.component.js";
import profile from "../../assets/profile.png";
import Laptop from "../../assets/laptoplady.png";
import classes from "../../assets/classes.png";
import scheduling from "../../assets/scheduling.png";
import community from "../../assets/community.png";
import mailbox from "../../assets/mailbox.png";
import socialInitiatives from "../../assets/Welfare.png";
import dashboard from "../../assets/dashboard.png";
import bookclass from "../../assets/book-class.png";
import { Redirect } from "react-router-dom";
import CreateClass from "../..//components/createClass/createClass.component.js";

let headerItems = {
  link: "/profile",
  title: "Create a New Course",
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

class CreateClassPage extends Component {
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
            <img src={bookclass} alt="Map"></img>
            <h1 class="header-create-class">Create the Course</h1>
          </div>
          <div>
            <p>
              Use the form below to create a class that students can register in
              for UImpactify
            </p>
            <div class="picture">
              {" "}
              <img src={Laptop} alt="Map"></img>
            </div>
          </div>
          <CreateClass />
        </div>
      </React.Fragment>
    );
  }
}

export default CreateClassPage;
