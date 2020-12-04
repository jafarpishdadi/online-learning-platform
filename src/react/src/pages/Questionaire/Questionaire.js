import React, { Component } from "react";
import "./Questionaire.css";
import BackImage from "../../assets/undraw_questions.png";
import Confirm from "../../assets/confirm.png";
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

import Headerbar from "../..//components/headerbar/HeaderTaskbar.js";
import Sidebar from "../..//components/sidebar/sidebar.component.js";

import { Redirect } from "react-router-dom";

let headerItems = {
  link: "/profile",
  title: "Questionaire",
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

class Questionaire extends Component {
  constructor(props) {
    super(props);

    this.state = {
      done: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  componentDidMount() {
    if (window.token) {
      this.setState({ loggedIn: true });
    }
  }

  handleChange(event) {
    let name = event.target.name;
    let value = event.target.value;
    let data = {};
    data[name] = value;

    this.setState(data);
  }

  render() {
    if (this.state.done) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <React.Fragment>
        <Sidebar books={navItems} />
        <Headerbar icons={headerItems} />
        <img class="image" src={BackImage} alt="Map"></img>
        <form class="flex-column" onSubmit={this.submit}>
          <div className="d-flex page">
            <div>
              <h1 class="header text-dark font-weight-bold">
                Welcome to U-Impactify!
              </h1>
              <br />
              <h2 class="text-dark font-weight-bold">
                Check all that apply. Do you identify as a:
              </h2>
              <br />
              <div>
                <input type="checkbox"></input>Social entrepreneurs or
                intrapreneurs
              </div>
              <br />
              <div>
                <input type="checkbox"></input>Worker at a charity or a
                non-profit organization
              </div>
              <br />
              <div>
                <input type="checkbox"></input>Individual who wants to learn
                something new
              </div>
              <br />
              <div>
                <input type="checkbox"></input>Other: Please List:
                <input></input>
              </div>
              <br />

              <h2 class="text-dark font-weight-bold">
                Which category does your company fits in?
              </h2>
              <br />
              <div>
                <input type="checkbox"></input>Art & Culture
              </div>
              <br />
              <div>
                <input type="checkbox"></input>Civic and Environmental
              </div>
              <br />
              <div>
                <input type="checkbox"></input>Education
              </div>
              <br />
              <div>
                <input type="checkbox"></input>Health Services
              </div>
              <br />
              <div>
                <input type="checkbox"></input>International Relations and
                Development
              </div>
              <br />
              <div>
                <input type="checkbox"></input>Social and Legal Services
              </div>
              <br />
              <div>
                <input type="checkbox"></input>Other:<input></input>
              </div>
              <br />

              <h2 class="text-dark font-weight-bold">
                What do you want to learn more about? (select all that apply)
                <h3 class="note">
                  You may change your answers afterward in the Profile page.{" "}
                </h3>
              </h2>
              <br />
              <div>
                <input type="checkbox"></input>Accounting
              </div>
              <br />
              <div>
                <input type="checkbox"></input>Business
              </div>
              <br />
              <div>
                <input type="checkbox"></input>Communication
              </div>
              <br />
              <div>
                <input type="checkbox"></input>Design
              </div>
              <br />
              <div>
                <input type="checkbox"></input>Finance
              </div>
              <br />
              <div>
                <input type="checkbox"></input>Project Management
              </div>
              <br />
              <div>
                <input type="checkbox"></input>Other:<input></input>
              </div>
              <br />
            </div>
          </div>
          <button class="button">
            <span className="confirm">
              <img src={Confirm} alt="Map"></img>
            </span>
          </button>
          <button class="button">
            <span>
              <u>Skip this step</u>
            </span>
          </button>
        </form>
      </React.Fragment>
    );
  }

  submit(e) {
    e.preventDefault();
    this.setState({ done: true });
  }
}

export default Questionaire;
