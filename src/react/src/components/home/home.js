import React, { Component } from "react";
import styled from "styled-components";
import backgroundHome from "../../assets/backgroundHome.svg";
import macPicture2 from "../../assets/macPicture2.png";
import whyUImpactify from "../../assets/whyUImpactify.svg";
import whoWeServe from "../../assets/whoWeServe.svg";
import testimonials from "../../assets/testimonials.svg";
import "./home.css";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <Container>
				<div class="row">
					<div class="column" className="col1">
						<br/>
						<br/>
						<br/>
						<h6> What is U-Impactify </h6>
						<h3> An online learning platform <br/> for social entrepreneurs <br/> and intrapreneurs </h3>
						<td>
							<Link to="/create">
							<button className="btn btn-get-started">  GET STARTED  </button>
							</Link>
						</td>
						<td className="spacing">
							<br/>
						</td>
						<td>
							<h6> Request an instant demo </h6>
						</td>
					</div>
					<div class="column" className="col3">
						<br/>
					</div>
					<div class="column" className="col2">
						<MacPic>
							<img className="macPicture" src={macPicture2} alt="" />
						</MacPic>
					</div>
				</div>
        <Wrapper>
					<br/>
          <img className="whyUImpactifyImg" src={whyUImpactify} alt="" />
					<Link to="/about">
            <button className="btn btn-get-started">  Learn More About What U-Impactify Does </button>
          </Link>
					<br/>
				</Wrapper>
				<Content>
						<br/>
						<br/>
						<img className="whoWeServe" src={whoWeServe} alt="" />
						<br/>
						<br/>
						<img className="testimonials" src={testimonials} alt="" />
						<br/>
						<br/>
						<div class="row">
							<div class="column">
								<td>
									<Link to="/create">
									<button className="btn btn-get-started">  GET STARTED  </button>
									</Link>
								</td>
								<td className="spacing">
									<br/>
								</td>
								<td>
									<h6> Request an instant demo </h6>
								</td>
							</div>
						</div>
						<br/>
						<br/>
        </Content>
      </Container>
    );
  }
}

const TestimonialSection = styled.div`
	
	align: center;
`;

const Container = styled.div`
  background: #fcfcfb;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
	
	.col3 {
		width: 10rem
	}
  h3 {
    font-size: 46px;
    font-weight: 700;
    color: rgba(0, 0, 0, 0.82);
    font-family: Open Sans;
	}
	.spacing {
		width: 3rem;
	}
`;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${backgroundHome});
  background-position: center;
  background-size: cover;
	background-repeat: no-repeat;
	.whyUImpactifyImg {
		margin-left: auto;
		margin-right: auto;
		display: block;
	}
`;


const MacPic = styled.div`
  .macPicture {
    height: 25rem;
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
	.spacing {
		width: 3rem;
	}
`;

export default Home;
