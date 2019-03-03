import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Container, Row, Col, Image, Button } from "react-bootstrap";
import "./Home.css";
import PlayCountdown from "./PlayCountdown";

export default class Play extends Component {
  render() {
    return (
      <Container>
        <Jumbotron>
          <Row>
            <Col>
              <h2>The definition is:</h2>
              <p>arrange or fold as a cover or protection</p>
              <input type="text" />
              <hr />
              <PlayCountdown />
            </Col>
            <Col>
              <h2>SCOREBOARD</h2>
              <p>10 words correctly spelled in a row</p>
              <hr />
              <Row>
                <Col>
                  <h3 className="redStrike">X</h3>
                </Col>
                <Col>
                  <h3 className="redStrike">X</h3>
                </Col>
                <Col>
                  <h3 className="redStrike">X</h3>
                </Col>
              </Row>
            </Col>
          </Row>
        </Jumbotron>
      </Container>
    );
  }
}
