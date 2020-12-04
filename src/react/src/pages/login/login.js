import React, { Component } from "react";
import Login from "../../components/createAccount/login.component";
import "./login.css";
import OutsideNavbar from "../../components/navbar/outsideNavbar.js";
import Picture from "../../assets/loginPicture.png";
import styled from "styled-components";

class LoginPage extends Component {
  render() {
    return (
      <React.Fragment>
        <OutsideNavbar />
        <Container>
          <Image>
            <img src={Picture} alt="Map"></img>
          </Image>
          <Login />
        </Container>
      </React.Fragment>
    );
  }
}

const Container = styled.div`
  background: #fcfcfb;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Image = styled.div`
  height: 3.8rem;
  margin-right: 20rem;
  margin-bottom: 35rem;
`;

export default LoginPage;
