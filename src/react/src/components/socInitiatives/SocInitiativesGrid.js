import React, { Component, useState } from "react";
import styled from "styled-components";
//import "./about.css";

import { RecipeReviewCard } from "./SocInitiativesCard.js";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "290px",
    paddingRight: "80px"
  }
});

export default function SocInitiativesGrid() {
  const [socIn, setSocIn] = useState([
    {
      title: "The Canadian Red Cross",
      text:
        "The Canadian Red Cross is a Canadian humanitarian charitable organization, and one of 190 national Red Cross and Red Crescent societies. The organization receives funding from both private donations and from Canadian government departments.",
      image: "socIn12.svg"
    },
    {
      title: "Toronto Humane Society",
      text:
        "It is the mission of Toronto Humane Society to promote the humane care and protection of all animals and to prevent cruelty and suffering. Following no kill principles, Toronto Humane Society aspires to be a best-in-class animal shelter – working in partnership with the community to find creative solutions and improve outcomes for all animals. Our 2020-2025 Strategic plan was created to guide us as we work to achieve that ambitious goal.",
      image: "socIn9.svg"
    },
    {
      title: "The Salvation Army",
      text:
        "The Salvation Army is a Christian organization that gives hope and support to vulnerable people in 400 communities across Canada and in 131 countries. The Salvation Army exists to share the love of Jesus Christ, meet human needs and be a transforming influence in the communities of our world.",
      image: "socIn1.svg"
    },
    {
      title: "Canada Helps Canadon",
      text:
        "CanadaHelps is a registered charity dedicated to increasing charitable giving across Canada. We do that by serving both donors and charities. For donors, we offer a one-stop shop for discovering, donating, or fundraising online for any registered Canadian charity. We process donations made using our site, disburse the funds to the charities and provide instant or anytime access tax receipts directly to the donors.",
      image: "socIn2.svg"
    },
    {
      title: "The RCCO",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "socIn3.svg"
    },
    {
      title: "UNICEF Canada",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "socIn8.svg"
    },
    {
      title: "Vermilion & District Housing",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "socIn5.svg"
    },
    {
      title: "World Vision",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "socIn7.svg"
    },
    {
      title: "Firefighters Society",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "socIn10.svg"
    },
    {
      title: "Sick Kids Foundation",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "socIn6.svg"
    },
    {
      title: "PMAST",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "socIn4.svg"
    },
    {
      title: "The Kiwanis",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "socIn11.svg"
    }
  ]);

  const classes = useStyles();
  return (
    <Container>
      <Grid
        container
        spacing={6}
        className={classes.gridContainer}
        justify="center"
      >
        {socIn.map(socIn => (
          <Grid item>
            <RecipeReviewCard
              title={socIn.title}
              text={socIn.text}
              image={socIn.image}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  width: 100%;
`;
