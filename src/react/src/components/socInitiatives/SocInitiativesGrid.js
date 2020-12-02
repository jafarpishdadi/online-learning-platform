import React, { Component } from "react";
import styled from "styled-components";
//import "./about.css";

import Card from "./SocInitiativesCard.js";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "40px",
    paddingRight: "40px"
  }
});

export default function SocInitiativesGrid() {
  const classes = useStyles();
  return (
    <Container>
      <Grid
        container
        spacing={4}
        className={classes.gridContainer}
        justify="center"
      >
        <Grid item>
          <Card />
        </Grid>
        <Grid item>
          <Card />
        </Grid>
        <Grid item>
          <Card />
        </Grid>
        <Grid item>
          <Card />
        </Grid>
        <Grid item>
          <Card />
        </Grid>
        <Grid item>
          <Card />
        </Grid>
        <Grid item>
          <Card />
        </Grid>
        <Grid item>
          <Card />
        </Grid>
        <Grid item>
          <Card />
        </Grid>
        <Grid item>
          <Card />
        </Grid>
      </Grid>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`;
