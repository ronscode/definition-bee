import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Container, Row, Col, Image, Button } from "react-bootstrap";
import "./Home.css";

export default class About extends Component {
  render() {
    return (
      <Container>
        <Jumbotron>
          <h2>ABOUT</h2>
          <p>RULES</p>
          <p>ABOUT US</p>
        </Jumbotron>
        <Link to="/about">
          <Button bsStyle="primary">About </Button>
        </Link>
      </Container>
    );
  }
}
