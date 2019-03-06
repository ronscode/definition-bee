import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Container, Row, Col, Image, Button, ToggleButtonGroup } from "react-bootstrap";
import "./Home.css";
import "./Play.css"
import PlayCountdown from "./PlayCountdown";
import LastGames from "./LastGames";
import PlayPause from "./PlayPause"

export default class Play extends Component {
  render() {
    return (
      <Container>

  <Row>
    <Col className="p-4" sm={8}>
    <h2>Correctly Define and Spell:</h2>
            <ol>
              <li>
                (printing) a block of type without a raised letter; used for
                spacing between words or sentences
              </li>
              <li>the unlimited expanse in which everything is located</li>
            </ol>
            <Row>
              <Col></Col>
              <Col>
              <input className="definitionAnswer" type="text" />
              </Col>
              <Col></Col>
            </Row>
            
            <Row>
            <Col></Col>
            <Col> <PlayPause /></Col>
            <Col></Col>
              </Row>
           
            <hr />
            <PlayCountdown /></Col>
    <Col sm={4}>
    <Jumbotron className="jumboChalkboard">
            <Col>
              <h2 className="homeChalkWhite">SCOREBOARD</h2>
              <p>10 points</p>
              <hr />
              <Row className="strikesBox">
                <Col>
                  <h3>STRIKES</h3>
                  <Row className="strikeCount">
                  <Col className="strike">X</Col>
                  <Col className="noStrike">X</Col>
                  <Col className="noStrike">X</Col>
                  </Row>

                </Col>
                <Col>
                  <h3>SKIPS</h3>
                  <Row className="skipCount">
                  <Col className="skip">X</Col>
                  <Col className="skip">X</Col>
                  <Col className="usedSkip">X</Col>
                  </Row>                </Col>
              </Row>
            </Col>
          </Jumbotron>
    </Col>
  </Row>
   
      
      </Container>
    );
  }
}

