import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Container, Row, Col, Image, Button } from "react-bootstrap";
import "./Home.css";
import PlayCountdown from "./PlayCountdown";

export default class Play extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h2>The definition is:</h2>
            <ol>
              <li>
                (printing) a block of type without a raised letter; used for
                spacing between words or sentences
              </li>
              <li>the unlimited expanse in which everything is located</li>
            </ol>
            <input type="text" />
            <hr />
            <PlayCountdown />
          </Col>
          <Jumbotron className="jumboChalkboard">
            <Col>
              <h2 className="homeChalkWhite">SCOREBOARD</h2>
              <p>10 words correctly spelled in a row</p>
              <hr />
              <Row>
                <Col>
                  <h3>STRIKES</h3>
                  <h3 className="redStrike">X X</h3>
                </Col>
                <Col>
                  <h3>SKIPS</h3>
                  <h3 className="blueSkip">S S</h3>
                </Col>
                <Col>
                  <h3 className="redStrike"> </h3>
                </Col>
              </Row>
            </Col>
          </Jumbotron>
        </Row>
      </Container>
    );
  }
}
