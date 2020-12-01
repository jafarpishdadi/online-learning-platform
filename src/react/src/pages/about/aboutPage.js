import React, { Component } from "react";
import About from "../../components/about/about.js";
import styled from "styled-components";
import OutsideNavbar from "../../components/navbar/outsideNavbar.js";

class AboutPage extends Component {
  render() {
    return (
      <Container>
        <OutsideNavbar />
        <About />
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

export default AboutPage;
