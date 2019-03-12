import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Container, Row, Col, Image, Button } from "react-bootstrap";
import "./Home.css";

export default class Login extends Component {
  render() {
    return (
      <Container>
        <Jumbotron>
          <h2>LOGIN AT JORDAN'S LOGIN FUNHOUSE</h2>
          <p>#FTS</p>
          <p>We ❤️️ ATL</p>
        </Jumbotron>
      </Container>
    );
  }
}
