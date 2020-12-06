import React, { Component } from "react";
import "./discussionDetailPage.css";
import DiscussionDetail from "../../components/discussion/discussionDetail.component.js";
import { Redirect } from "react-router-dom";
// Bunch of pictures
import Headerbar from "../..//components/headerbar/HeaderTaskbar.js";
import Sidebar from "../..//components/sidebar/sidebar.component.js";
import profile from "../../assets/profile.png";
import classes from "../../assets/classes.png";
import scheduling from "../../assets/scheduling.png";
import community from "../../assets/community.png";
import mailbox from "../../assets/mailbox.png";
import socialInitiatives from "../../assets/Welfare.png";
import dashboard from "../../assets/dashboard.png";
// End of pictures

let headerItems = { link: "/profile", title: "Discussion Board", profileImg: profile };

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

class DiscussionListPage extends Component {
  state = {

  };

  render() {
    if (!localStorage.getItem("token")) {
      return <Redirect to="/login" />;
    }
    return (
      <React.Fragment>
        <Sidebar books={navItems} />
        <Headerbar icons={headerItems} />
        <div className="profileBox">
          <DiscussionDetail handle = {this.props.match.params.handle}/>
        </div>
      </React.Fragment>
    );
  }
}
export default DiscussionListPage;
