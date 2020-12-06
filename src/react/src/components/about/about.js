import React, { Component } from "react";
import styled from "styled-components";
import backgroundAbout from "../../assets/backgroundAbout.svg";
import macPicture from "../../assets/macPicture.svg";
import social from "../../assets/teacherInClassSittingDown.svg";
import instructor from "../../assets/teacherInClassStandingUp.svg";
import "./about.css";

class About extends Component {
  render() {
    return (
      <Container>
        <h3> About U-Impactify </h3>
        <Wrapper>
          <MacPic>
            <img className="macPicture" src={macPicture} alt="" />
          </MacPic>
          <Content>
            <h3 className="title1">What is U-IMPACTIFY ?</h3>
            <p>
              U-Impactify is an online learning platform that supports hybrid
              learning (online learning & offline meetups) model. We are helping
              <br />
              impact specialists to create their best learning modules around
              social entrepreneurship and 21st-century skills. On the other
              side, <br /> social ventures and intrapreneurs will be part of
              this curated and gamified learning support group to grow and
              thrive.
            </p>
            <h3 className="title2">What are we aiming for?</h3>
            <Pictures>
              <Social>
                <img className="social" src={social} alt="" />
                <h3 className="title1">Social Initatives</h3>
                <h3 className="title2">(Non-Profits, Charities, CSRs etc.)</h3>
                <p>
                  • Helps students to gain new skiills or
                  <br />
                  knowledge to apply in their <br />
                  organization. <br /> <br /> • Builds a learning community to
                  share <br />
                  expertise and experience.
                </p>
                <p className="secondPoint"></p>
              </Social>
              <Instructor>
                <img className="instructor" src={instructor} alt="" />
                <h3>Instructors</h3>
                <p>
                  • Helps instructors to get more clients.
                  <br />
                  <br /> • Helps instructor to create and manage
                  <br />
                  their courses.
                </p>
              </Instructor>
            </Pictures>
          </Content>
        </Wrapper>
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
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    font-size: 46px;
    font-weight: 700;
    color: rgba(0, 0, 0, 0.82);
    font-family: Open Sans;
    margin-top: 6rem;
    margin-bottom: 4rem;
  }
`;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${backgroundAbout});
  background-position: center bottom;
  background-size: cover;
  background-repeat: no-repeat;
`;

const MacPic = styled.div`
  .macPicture {
    height: 45rem;
    margin-top: 0rem;
    margin-bottom: 4rem;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .title1 {
    font-weight: 600;
    color: rgba(0, 0, 0, 0.82);
    font-family: Open Sans;
    font-size: 32px;
    margin-bottom: 4rem;
  }
  p {
    font-weight: normal;
    color: #3e4345;
    font-family: Open Sans;
    font-size: 22px;
  }
  .title2 {
    font-weight: 600;
    color: rgba(0, 0, 0, 0.82);
    font-family: Open Sans;
    font-size: 32px;
    margin-top: 9rem;
    margin-bottom: 4rem;
  }
`;

const Pictures = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 7rem;
`;

const Social = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 10rem;

  img {
    height: 20rem;
    margin-top: 0rem;
  }

  .title1 {
    font-weight: 600;
    color: rgba(0, 0, 0, 0.82);
    font-family: Open Sans;
    font-size: 32px;
    margin-top: 0rem;
    margin-bottom: 0rem;
  }

  .title2 {
    font-weight: normal;
    color: #919699;
    font-family: Open Sans;
    font-size: 16px;
    margin-top: 0rem;
  }

  p {
    font-weight: normal;
    color: #3e4345;
    font-family: Open Sans;
    font-size: 22px;
    margin-top: 0rem;
    margin-bottom: 11rem;
  }
`;

const Instructor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 10rem;

  img {
    height: 20rem;
  }

  h3 {
    font-weight: 600;
    color: rgba(0, 0, 0, 0.82);
    font-family: Open Sans;
    font-size: 32px;
    margin-top: 1rem;
  }

  p {
    font-weight: normal;
    color: #3e4345;
    font-family: Open Sans;
    font-size: 22px;
    margin-top: 1rem;
    margin-bottom: 27rem;
  }
`;

export default About;
