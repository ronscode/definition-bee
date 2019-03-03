import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Container, Row, Col, Image, Button } from "react-bootstrap";
import "./Home.css";

export default class Play extends Component {
  render() {
    return (
      <Container>
        <Jumbotron>
          <h2>PLAY THE GAME</h2>
          <p>SPELL WORDS HERE</p>
        </Jumbotron>
        <Link to="/about">
          <Button bsStyle="primary">About </Button>
        </Link>
      </Container>
    );
  }
}
