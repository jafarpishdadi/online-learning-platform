import React, { Component } from "react";
import Profile from "../../components/profile/profile.component.js";
import "./profilePage.css";
import { Redirect } from "react-router-dom";
import axios from "axios";
// Bunch of pictures
import Headerbar from "../..//components/headerbar/HeaderTaskbar.js";
import Sidebar from "../..//components/sidebar/sidebar.component.js";
import profile from "../../assets/profile.png";
import classes from "../../assets/classes.png";
import scheduling from "../../assets/scheduling.png";
import community from "../../assets/community.png";
import mailbox from "../../assets/mailbox.png";
import achievements from "../../assets/achievements.png";
import socialInitiatives from "../../assets/Welfare.png";
import settings from "../../assets/settings.png";
import dashboard from "../../assets/dashboard.png";
// End of pictures

let headerItems = { link: "/profile", title: "Profile", profileImg: profile };

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

class ProfilePage extends Component {
  state = {
    educations: [],
    skills: [],
    completedCourses: [],
    languages: [],
    name: "",
    description: "",
    timeJoin: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: ""
  };
  componentDidMount() {
    axios
      .post("http://127.0.0.1:8103/api/db_get_profile", {
        username: localStorage.getItem("username")
      })
      .then(response => {
        console.log(response);
        this.setState({ educations: response.data["educations"] });
        this.setState({ skills: response.data["skills"] });
        this.setState({ completedCourses: response.data["completed_courses"] });
        this.setState({ languages: response.data["languages"] });
        this.setState({ name: response.data["name"] });
        this.setState({ description: response.data["description"] });
        this.setState({ timeJoin: response.data["time_join"] });
        this.setState({ firstName: response.data["first_name"] });
        this.setState({ lastName: response.data["last_name"] });
        this.setState({ phoneNumber: response.data["phone_number"] });
      })
      .catch(error => {
        console.log(error);
      });
    axios
      .post("http://127.0.0.1:8103/api/db_get_user_email", {
        username: localStorage.getItem("username")
      })
      .then(response => {
        console.log(response);
        console.log(response.data["email"]);
        this.setState({ email: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    if (!localStorage.getItem("token")) {
      return <Redirect to="/login" />;
    }
    return (
      <React.Fragment>
        <Sidebar books={navItems} />
        <Headerbar icons={headerItems} />
        <div className="profileBox">
          <Profile
            educations={this.state.educations}
            skills={this.state.skills}
            completedCourses={this.state.completedCourses}
            languages={this.state.languages}
            name={this.state.name}
            description={this.state.description}
            timeJoin={this.state.timeJoin}
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            email={this.state.email}
            phoneNumber={this.state.phoneNumber}
          />
        </div>
      </React.Fragment>
    );
  }
}
export default ProfilePage;
