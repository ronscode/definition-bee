import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Container, Row, Col, Image, Button } from "react-bootstrap";
import "./Home.css";
import Countdown from "./Countdown";
import Test from "./Test";
import RandomWord from "./RandomWord";
import LastGames from "./LastGames";

export default class Home extends Component {
  render() {
    return (
      <Container>
        <Jumbotron className="jumboChalkboard">
          <h2 className="homeChalkWhite">Welcome to the Definition Bee.</h2>
          <p className="homeChalk">
            Correctly spell the word for each definition that appears on the
            screen in <b>7 seconds or less.</b> For each correct answer you'll
            get 1 point. Miss a word? 3 strikes and you're out. Good luck.
            You'll need it.
          </p>
          <Link to="/play">
            <Button variant="warning">Click here if you're ready...</Button>
          </Link>
        </Jumbotron>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            
          </Col>
        </Row>
        <Row> 
            <Col>
            <h2>Top 10 Definers</h2>
            </Col>
            <Col>
            <h2>Last 10 Scores</h2>
             <LastGames />
            </Col>
        </Row>
      </Container>
    );
  }
}