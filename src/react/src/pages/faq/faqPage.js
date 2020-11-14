import React, { Component } from 'react'
import FAQ from '../../components/faq/faq.js'
import './faqPage.css'
import { Redirect } from 'react-router-dom';

// Bunch of pictures
import Headerbar from  '../..//components/headerbar/HeaderTaskbar.js'
import Sidebar from '../..//components/sidebar/sidebar.component.js'
import profile from '../../assets/profile.png'
import classes from '../../assets/classes.png'
import scheduling from '../../assets/scheduling.png'
import community from '../../assets/community.png'
import mailbox from '../../assets/mailbox.png'
import achievements from '../../assets/achievements.png'
import socialInitiatives from '../../assets/Welfare.png'
import settings from '../../assets/settings.png'
import dashboard from '../../assets/dashboard.png'
// End of pictures

// Borrowed code from https://medium.com/javascript-in-plain-english/react-building-an-accessible-faq-component-bac135116532

let headerItems = {link: '/sidebar', title: 'Frequently Asked Questions', profileImg: profile }

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

class FAQPage extends Component {
	render() {
        if (!localStorage.getItem('token')) {
            return <Redirect to='/login' />
        }
		return (
      <React.Fragment>
                <Sidebar books={navItems}/>
                <Headerbar icons={headerItems}/>
            <div className="FAQBox">
              <FAQ>
                <FAQ.QAItem>
                  <FAQ.Question answerId="q1">
                    {(isOpen, onToggle) => {
                      return (
                        <>
                          {isOpen ? "⋁" : "⋀"}
                          <span>What additional features or benefits does U-Impactiy Learning provide?</span>
                        </>
                      );
                    }}
                  </FAQ.Question>
                  <FAQ.Answer id="q1">All the features and benefits your imagination can reach! </FAQ.Answer>
                </FAQ.QAItem>
                <FAQ.QAItem>
                  <FAQ.Question answerId="q2">
                    {(isOpen, onToggle) => {
                      return (
                        <>
                          {isOpen ? "⋁" : "⋀"}
                          <span>What happens at the end of my free trial?</span>
                        </>
                      );
                    }}
                  </FAQ.Question>
                  <FAQ.Answer id="q2"> After your free trial, you automatically will be charged for a subscription on a monthly or annual basis (at your choice) unless you cancel. </FAQ.Answer>
                </FAQ.QAItem>
                <FAQ.QAItem>
                  <FAQ.Question answerId="q3">
                    {(isOpen, onToggle) => {
                      return (
                        <>
                          {isOpen ? "⋁" : "⋀"}
                          <span>How will you bill me?</span>
                        </>
                      );
                    }}
                  </FAQ.Question>
                  <FAQ.Answer id="q3"> We offer both monthly and annual billing. Depending on what option you choose, your subscription will be renewed at the end of each month or at the end of each year. If you choose to pay annually, you'll save up to 29% compared to paying monthly. </FAQ.Answer>
                </FAQ.QAItem>
                <FAQ.QAItem>
                  <FAQ.Question answerId="q4">
                    {(isOpen, onToggle) => {
                      return (
                        <>
                          {isOpen ? "⋁" : "⋀"}
                          <span>Can I change or cancel my plan later on?</span>
                        </>
                      );
                    }}
                  </FAQ.Question>
                  <FAQ.Answer id="q4"> Yes. You can downgrade or cancel anytime from your settings page. If you cancel, you will lose your Premium features at the end of your billing cycle. Be sure you use all your InMail messages before the cancellation goes into effect. </FAQ.Answer>
                </FAQ.QAItem>
                <FAQ.QAItem>
                  <FAQ.Question answerId="q5">
                    {(isOpen, onToggle) => {
                      return (
                        <>
                          {isOpen ? "⋁" : "⋀"}
                          <span>What is your refund policy?</span>
                        </>
                      );
                    }}
                  </FAQ.Question>
                  <FAQ.Answer id="q5"> U-Impactify does not offer refunds except in certain situations and jurisdictions, as noted in our refund policy. </FAQ.Answer>
                </FAQ.QAItem>
                <FAQ.QAItem>
                  <FAQ.Question answerId="q6">
                    {(isOpen, onToggle) => {
                      return (
                        <>
                          {isOpen ? "⋁" : "⋀"}
                          <span>Can I expense my membership?</span>
                        </>
                      );
                    }}
                  </FAQ.Question>
                  <FAQ.Answer id="q6"> Many employers find U-Impactify so valuable that they'll pay for their employees' subscriptions. At the end of your purchase, you'll receive the receipt in your email that you can use to file an expense report. </FAQ.Answer>
                </FAQ.QAItem>
              </FAQ>
            </div>
      </React.Fragment>
          );
	}
}
export default FAQPage
