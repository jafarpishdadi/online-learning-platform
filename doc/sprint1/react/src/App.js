import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import logo from './logo.png';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Sidebar from "./components/sidebar.component";

import Login from "./components/login.component";

function App() {
  return (
  <Router>
    <div className="App">
      <Sidebar />
    </div>
  </Router>
  );
}

export default App;