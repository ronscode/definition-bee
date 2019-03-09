import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Container, Row, Col, Image, Button } from "react-bootstrap";
import "./Home.css";

export default class AddWord extends Component {
  render() {
    return (
      <Container>
        <Jumbotron>
          <h2>Add a Word and Definition</h2>
          <input id="word" />
          <input id="definition" />
          <p>ABOUT US</p>
        </Jumbotron>
        <Link to="/about">
          <Button bsStyle="primary">About </Button>
        </Link>
      </Container>
    );
  }
}
