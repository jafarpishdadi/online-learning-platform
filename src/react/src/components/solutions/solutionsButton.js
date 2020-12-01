import React, { Component } from "react";
import "./solutionsButton.css";
import styled from "styled-components";
import student from "../../assets/solutionsStudent.svg";
import instructor from "../../assets/solutionsInstructor.svg";

const STYLES = ["btn--primary", "btn--secondary"];

export const SolutionsButton = ({ children, type, onClick, buttonStyle }) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  return (
    <button className={`btn ${checkButtonStyle}`} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

/*
var HoverButton = React.createClass({
    getInitialState: function () {
        return {hover: false};
    },

    mouseOver: function () {
        this.setState({hover: true});
    },

    mouseOut: function () {
        this.setState({hover: false});
    },

    render: function() {
        var label = "foo";
        if (this.state.hover) {
            label = "bar";
        }
        return React.createElement(
            "button",
            {onMouseOver: this.mouseOver, onMouseOut: this.mouseOut},
            label
        );
    }
});

React.render(React.createElement(HoverButton, null), document.body); */
