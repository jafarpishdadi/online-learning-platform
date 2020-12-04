import React, { Component } from "react";
import Home from "../../components/home/home.js";
import styled from "styled-components";
import OutsideNavbar from "../../components/navbar/outsideNavbar.js";

class HomePage extends Component {
  render() {
    return (
      <Container>
        <OutsideNavbar />
        <Home />
      </Container>
    );
  }
}

const Container = styled.div`
  background: #fcfcfb;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;

export default HomePage;
