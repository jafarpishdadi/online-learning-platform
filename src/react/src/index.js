import React, { useReducer } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Sidebar from "./components/sidebar/sidebar.component.js";
import CreateAccount from "./components/createAccount/createAccount.component.js";
import CreateAccountPage from "./pages/createAccount/createAccount.js";
import LogInPage from "./pages/login/login.js";
import Logout from "./components/createAccount/logout.component.js";
import "./components/createAccount/loginAndSignup.css";
import SchedulePage from "./pages/schedulePage/schedulePage.js";
import OutsideNavbar from "./components/navbar/outsideNavbar.js";
import classes from "./assets/classes.png";
import scheduling from "./assets/scheduling.png";
import community from "./assets/community.png";
import mailbox from "./assets/mailbox.png";
import achievements from "./assets/achievements.png";
import socialInitiatives from "./assets/Welfare.png";
import settings from "./assets/settings.png";
import dashboard from "./assets/dashboard.png";
import Headerbar from "./components/headerbar/HeaderTaskbar.js";
import Classes from "./components/yourClasses/yourClasses.component.js";
import Events from "./components/events/events.component.js";
import News from "./components/news/news.component.js";
import profile from "./assets/profile.png";
import DashPage from "./pages/dashboard/dashboard.component.js";
import AllClassListPage from "./pages/Classes/classes.js";
import AllEventListPage from "./pages/Events/events.js";
import CreateClass from "./components/createClass/createClass.component.js";
import CreateEvent from "./components/createEvent/createEvent.component.js";
import ClassList from "./components/createClass/classList.component.js";
import ProfilePage from "./pages/profile/profilePage.js";
import FAQPage from "./pages/faq/faqPage.js";
import Studentclasses from "./components/Classes-Student/studentClasses.component.js";
import DiscussionDetailPage from "./pages/discussion/discussionDetailPage.js";
import DiscussionListPage from "./pages/discussion/discussionListPage.js"
import MessagePage from "./pages/message/MessagePage.js";
import SpecifyUserPage from "./pages/message/SpecifyUserPage.js";
import CreateClassPage from "./pages/createClass/createClassPage.js";
import CreateEventPage from "./pages/createEvent/createEventPage.js";
import AllEventsList from "./components/events/eventlist";
import Questionaire from "./pages/Questionaire/Questionaire.js";
import AboutPage from "./pages/about/aboutPage.js";
import SolutionsPage from "./pages/solutions/solutionsPage.js";
import InstructorClasses from "./components/yourClasses/instructorClasses.component.js";
import Solution from "./components/solutions/solutions";
import AllSocInitiativesPage from "./pages/socInitiatives/AllSocInitiativesPage.js";
import HomePage from "./pages/home/homePage.js"

window.token = localStorage.getItem("token");

let navItems = [
  { id: 1, link: "", imgSrc: dashboard, title: "Dashboard" },
  { id: 2, link: "", imgSrc: classes, title: "Classes" },
  { id: 3, link: "", imgSrc: scheduling, title: "Scheduling" },
  { id: 4, link: "", imgSrc: community, title: "Community" },
  { id: 5, link: "", imgSrc: mailbox, title: "Mailbox" },
  { id: 6, link: "", imgSrc: achievements, title: "Achievements" },
  { id: 7, link: "", imgSrc: socialInitiatives, title: "Social Initiatives" },
  { id: 8, link: "", imgSrc: settings, title: "Settings" }
];

let headerItems = { link: "/profile", title: "Dashboard", profileImg: profile };

ReactDOM.render(
  <Router>
    <Switch>
      // home page
      <Route exact path="/home">
        <HomePage />
      </Route>
      // discussionList
      <Route exact path="/discussionList">
        <DiscussionListPage />
      </Route>
      // discussionDetail
      <Route exact path="/discussionDetail/:handle" component = {DiscussionDetailPage}>
      </Route>
      // FAQ page
      <Route exact path="/FAQ">
        <FAQPage />
      </Route>
      // profile page
      <Route exact path="/profile">
        <ProfilePage />
      </Route>
      // login page
      <Route exact path="/login">
        <LogInPage />
      </Route>
      // dashboard
      <Route exact path="/dashboard">
        <DashPage />
      </Route>
      // create account page
      <Route exact path="/create">
        <CreateAccountPage />
      </Route>
      // yourclasses comp
      <Route exact path="/classes">
        <Classes />
      </Route>
      // studentclasses comp
      <Route exact path="/studentclasses">
        <Studentclasses />
      </Route>
      // events
      <Route exact path="/events">
        <Events />
      </Route>
      // newscomp
      <Route exact path="/news">
        <News />
      </Route>
      // schedule page
      <Route exact path="/schedule">
        <SchedulePage />
      </Route>
      // newscomp
      <Route exact path="/createclass">
        <CreateClass />
      </Route>
      <Route exact path="/classlist">
        <ClassList />
      </Route>
      <Route exact path="/allclasslist">
        <AllClassListPage />
      </Route>
      <Route exact path="/alleventlist">
        <AllEventListPage />
      </Route>
      <Route exact path="/logout">
        <Logout />
      </Route>
      <Route exact path="/messageuser">
        <SpecifyUserPage />
      </Route>
      <Route exact path="/message">
        <MessagePage />
      </Route>
      <Route exact path="/classcreation">
        <CreateClassPage />
      </Route>
      <Route exact path="/eventcreation">
        <CreateEventPage />
      </Route>
      <Route exact path="/createevent">
        <CreateEvent />
      </Route>
      // about
      <Route exact path="/about">
        <AboutPage />
      </Route>
      // solutions
      <Route exact path="/solutions">
        <SolutionsPage />
      </Route>
      //instructorclass
      <Route exact path="/iclasses">
        <InstructorClasses />
      </Route>
      <Route exact path="/eventlist">
        <AllEventsList />
      </Route>
      <Route exact path="/questionaire">
        <Questionaire />
      </Route>
      // socialinitiatives
      <Route exact path="/socialinitiatives">
        <AllSocInitiativesPage />
      </Route>
      // side bar
      <Route path="/sidebar">
        <Sidebar books={navItems} />
        <Headerbar icons={headerItems} />
      </Route>
    </Switch>
  </Router>,
  document.getElementById("root")
);

serviceWorker.unregister();
