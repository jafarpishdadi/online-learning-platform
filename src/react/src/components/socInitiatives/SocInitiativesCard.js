import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import styled from "styled-components";
import "./socInitiativesCard.css";

const useStyles = makeStyles(theme => ({
  root: {
    minWidth: 305,
    maxWidth: 305
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  }
}));

export const RecipeReviewCard = ({ title, text, image }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <Container>
        <CardContent>
          <Wrapper>
            <Logo>
              <img
                className="logoPicture"
                src={require(`../../assets/${image}`)}
                alt=""
              />
            </Logo>
            <h3>{title}</h3>
          </Wrapper>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <button className="socInButton">Learn More</button>
          </IconButton>
        </CardActions>
      </Container>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Text>
            <p>{text}</p>
          </Text>
        </CardContent>
      </Collapse>
    </Card>
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

  h3 {
    font-size: 20px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.82);
    font-family: Open Sans;
    margin-bottom: 0rem;
  }
`;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.div`
  .logoPicture {
    height: 3.8rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`;

const Text = styled.div`
  p {
    font-size: 14px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.82);
    font-family: Open Sans;
  }
`;
