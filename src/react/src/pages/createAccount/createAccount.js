import React, { Component } from "react";
import CreateAccount from "../../components/createAccount/createAccount.component";
import "./createAccount.css";
import OutsideNavbar from "../../components/navbar/outsideNavbar.js";
import Picture from "../../assets/createPicture.png";
import styled from "styled-components";

class CreateAccountPage extends Component {
  render() {
    return (
      <React.Fragment>
        <OutsideNavbar />
        <Container>
          <div className="picture-create">
            <Image>
              <img src={Picture} alt="Map"></img>
            </Image>
          </div>
          <div className="create-account">
            <CreateAccount />
          </div>
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
  margin-bottom: 43rem;
  margin-left: 3rem;
`;

export default CreateAccountPage;
