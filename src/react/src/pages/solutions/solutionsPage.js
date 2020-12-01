import React, { Component } from "react";
import Solution from "../../components/solutions/solutions.js";
import styled from "styled-components";
import OutsideNavbar from "../../components/navbar/outsideNavbar.js";

class SolutionsPage extends Component {
  render() {
    return (
      <Container>
        <OutsideNavbar />
        <Solution />
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

export default SolutionsPage;
