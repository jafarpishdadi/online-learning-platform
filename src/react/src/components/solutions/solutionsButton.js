import React, { Component } from "react";
import "./solutionsButton.css";
import styled from "styled-components";
import student from "../../assets/solutionsStudent.svg";
import instructor from "../../assets/solutionsInstructor.svg";

const STYLES = ["solutions--btn--primary", "solutions--btn--secondary"];

export const SolutionsButton = ({ children, type, onClick, buttonStyle }) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  return (
    <button
      className={`solutions--btn ${checkButtonStyle}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
