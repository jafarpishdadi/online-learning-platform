import React, { Component } from "react";
import FAQ from "../../components/faq/faq.js";
import "./faqPage.css";
import OutsideNavbar from "../../components/navbar/outsideNavbar.js";

// Bunch of pictures
import Pricing from "../../assets/pricing.PNG";
import styled from "styled-components";

// End of pictures

// Borrowed code from https://medium.com/javascript-in-plain-english/react-building-an-accessible-faq-component-bac135116532

class FAQPage extends Component {
  render() {
    return (
      <React.Fragment>
        <OutsideNavbar />
        <Container>
          <Image>
            <img src={Pricing} alt="Map"></img>
          </Image>
          <h3 className="faq-header">Frequently Asked Questions</h3>
          <div className="FAQBox">
            <FAQ>
              <FAQ.QAItem>
                <FAQ.Question answerId="q1">
                  {(isOpen, onToggle) => {
                    return (
                      <>
                        <b>
                          What additional features or benefits does U-Impactiy
                          Learning provide?
                        </b>
                        {isOpen ? "     ▲" : "     ▼"}
                      </>
                    );
                  }}
                </FAQ.Question>
                <FAQ.Answer id="q1">
                  All the features and benefits your imagination can reach!{" "}
                </FAQ.Answer>
              </FAQ.QAItem>
              <FAQ.QAItem>
                <FAQ.Question answerId="q2">
                  {(isOpen, onToggle) => {
                    return (
                      <>
                        <b>What happens at the end of my free trial?</b>
                        {isOpen ? "     ▲" : "     ▼"}
                      </>
                    );
                  }}
                </FAQ.Question>
                <FAQ.Answer id="q2">
                  {" "}
                  After your free trial, you automatically will be charged for a
                  subscription on a monthly or annual basis (at your choice)
                  unless you cancel.{" "}
                </FAQ.Answer>
              </FAQ.QAItem>
              <FAQ.QAItem>
                <FAQ.Question answerId="q3">
                  {(isOpen, onToggle) => {
                    return (
                      <>
                        <b>How will you bill me?</b>
                        {isOpen ? "     ▲" : "     ▼"}
                      </>
                    );
                  }}
                </FAQ.Question>
                <FAQ.Answer id="q3">
                  {" "}
                  We offer both monthly and annual billing. Depending on what
                  option you choose, your subscription will be renewed at the
                  end of each month or at the end of each year. If you choose to
                  pay annually, you'll save up to 29% compared to paying
                  monthly.{" "}
                </FAQ.Answer>
              </FAQ.QAItem>
              <FAQ.QAItem>
                <FAQ.Question answerId="q4">
                  {(isOpen, onToggle) => {
                    return (
                      <>
                        <b>Can I change or cancel my plan later on?</b>
                        {isOpen ? "     ▲" : "     ▼"}
                      </>
                    );
                  }}
                </FAQ.Question>
                <FAQ.Answer id="q4">
                  {" "}
                  Yes. You can downgrade or cancel anytime from your settings
                  page. If you cancel, you will lose your Premium features at
                  the end of your billing cycle. Be sure you use all your InMail
                  messages before the cancellation goes into effect.{" "}
                </FAQ.Answer>
              </FAQ.QAItem>
              <FAQ.QAItem>
                <FAQ.Question answerId="q5">
                  {(isOpen, onToggle) => {
                    return (
                      <>
                        <b>What is your refund policy?</b>
                        {isOpen ? "     ▲" : "     ▼"}
                      </>
                    );
                  }}
                </FAQ.Question>
                <FAQ.Answer id="q5">
                  {" "}
                  U-Impactify does not offer refunds except in certain
                  situations and jurisdictions, as noted in our refund policy.{" "}
                </FAQ.Answer>
              </FAQ.QAItem>
              <FAQ.QAItem>
                <FAQ.Question answerId="q6">
                  {(isOpen, onToggle) => {
                    return (
                      <>
                        <b>Can I expense my membership?</b>
                        {isOpen ? "     ▲" : "     ▼"}
                      </>
                    );
                  }}
                </FAQ.Question>
                <FAQ.Answer id="q6">
                  {" "}
                  Many employers find U-Impactify so valuable that they'll pay
                  for their employees' subscriptions. At the end of your
                  purchase, you'll receive the receipt in your email that you
                  can use to file an expense report.{" "}
                </FAQ.Answer>
              </FAQ.QAItem>
            </FAQ>
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
  flex-direction: column;
  align-items: center;
  margin-bottom: 10rem;

  h3 {
    margin-right: 20rem;
  }
`;

const Image = styled.div`
  height: 3.8rem;
  margin-bottom: 60rem;
`;

export default FAQPage;
