import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./login.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Sidebar from "./components/sidebar.component.js";
import "./components/styles.css";
import classes from './assets/classes.png'
import scheduling from './assets/scheduling.png'
import community from './assets/community.png'
import mailbox from './assets/mailbox.png'
import achievements from './assets/achievements.png'
import socialInitiatives from './assets/Welfare.png'
import settings from './assets/settings.png'
import dashboard from './assets/dashboard.png'


let navItems = [
    {id: 1, link: "", imgSrc: dashboard, title: "Dashboard" },
    {id: 2, link: "", imgSrc: classes, title: "Classes" },
    {id: 3, link: "", imgSrc: scheduling, title: "Scheduling" },
    {id: 4, link: "", imgSrc: community, title: "Community" },
    {id: 5, link: "", imgSrc: mailbox, title: "Mailbox" },
    {id: 6, link: "", imgSrc: achievements, title: "Achievements" },
    {id: 7, link: "", imgSrc: socialInitiatives, title: "Social Initiatives" },
    {id: 8, link: "", imgSrc: settings, title: "Settings" }
    ]

ReactDOM.render(
    <BrowserRouter>
        <Sidebar books={navItems}/>
    </BrowserRouter>,
    document.getElementById("root")
);

serviceWorker.unregister();