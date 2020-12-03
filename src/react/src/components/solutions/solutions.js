import React, { Component, useState } from "react";
import styled from "styled-components";
import "./solutions.css";
import { SolutionsButton } from "./solutionsButton.js";
import main from "../../assets/solutionsComponent.svg";

export const Solution = () => {
  const [firstStyle, setFirstStyle] = useState("solutions--btn--primary");
  const [secondStyle, setSecondStyle] = useState("solutions--btn--secondary");

  const [title, setTitle] = useState("Develop New Skills and Knowledge");

  const [text, setText] = useState(
    "Enhance your skills sets and knowledges to advance your business."
  );

  const [image, setImage] = useState("solutionsStudent.svg");

  const setUser = (firstStyle, secondStyle, title, text, image) => {
    setFirstStyle(firstStyle);
    setSecondStyle(secondStyle);
    setTitle(title);
    setText(text);
    setImage(image);
  };

  return (
    <Container>
      <Wrapper>
        <TextBox>
          <h3>Solutions</h3>
          <p>
            U-Impactify is an eLearning platform helps you to make <br />
            an impact as you learn.
          </p>
          <Buttons>
            <SolutionsButton
              className="firstButton"
              onClick={() => {
                setUser(
                  "solutions--btn--primary",
                  "solutions--btn--secondary",
                  "Develop New Skills and Knowledge",
                  "Enhance your skills sets and knowledges to advance your business.",
                  "solutionsStudent.svg"
                );
              }}
              type="button"
              buttonStyle={firstStyle}
            >
              Students
            </SolutionsButton>
            <SolutionsButton
              onClick={() => {
                setUser(
                  "solutions--btn--secondary",
                  "solutions--btn--primary",
                  "Teach or Coach for Students’ Success",
                  "Host live sessions with students and clients, anywhere, anytime with the U-Impactify.",
                  "solutionsInstructor.svg"
                );
              }}
              type="button"
              buttonStyle={secondStyle}
            >
              Instructors
            </SolutionsButton>
          </Buttons>
        </TextBox>
        <Image>
          <img src={main} alt="" />
        </Image>
      </Wrapper>
      <User>
        <h3>{title}</h3>
        <p>{text}</p>
        <img src={require(`../../assets/${image}`)} alt="" />
      </User>
    </Container>
  );
};

const Container = styled.div`
  background: #fcfcfb;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Image = styled.div`
  img {
    height: 35rem;
    margin-top: 6rem;
  }
`;

const TextBox = styled.div`
  h3 {
    font-size: 46px;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.82);
    font-family: Open Sans;
    margin-top: 2rem;
    margin-right: 34rem;
  }
  p {
    font-weight: normal;
    color: #3e4345;
    font-family: Open Sans;
    font-size: 22px;
  }
`;

const Buttons = styled.div`
  .firstButton {
    margin-right: 3rem;
  }
`;

const User = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 8rem;
  margin-bottom: 12rem;

  h3 {
    font-size: 36px;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.82);
    font-family: Open Sans;
  }
  p {
    font-weight: normal;
    color: #3e4345;
    font-family: Open Sans;
    font-size: 22px;
  }

  img {
    height: 8rem;
    margin-top: 4rem;
  }
`;
export default Solution;
