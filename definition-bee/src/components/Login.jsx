import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { Jumbotron, Container, Row, Col, Image, Button } from "react-bootstrap";
import "./Home.css";


export default class Login extends Component {

//handles google login on click
login(){
    axios
      .get("definition/google")
      .then(({ data }) => {
        console.log(data)
      })
      .catch();
  };

  render() {
    return (
      <Container>
        <Jumbotron>
          <h2>LOGIN AT JORDAN'S LOGIN FUNHOUSE</h2>
          <p>#FTS</p>
          <p>We ❤️️ ATL</p>
          <button onClick = {()=>this.login()}>log in</button>
        </Jumbotron>
      </Container>
    );
  }
}
