import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Container, Row, Col, Image, Button } from "react-bootstrap";
import "./Home.css";
import "./Play.css"
import PlayCountdown from "./PlayCountdown";
import LastGames from "./LastGames";

export default class Play extends Component {
  render() {
    return (
      <Container>

  <Row>
    <Col className="p-4" sm={8}>
    <h2>The Definition Is:</h2>
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
           
            <hr />
            <PlayCountdown /></Col>
    <Col sm={4}>
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
    </Col>
  </Row>
  <Row>
    <Col sm><h3>Correctly Spelled History</h3>
    <p>burly | slimy | spoil | size | legs | questionable | terrific | furry | acrid | enthusiastic | ancient | road | babies | weather | cakes | increase | drain | green | brave | encouraging</p>
    </Col>
    <Col sm><h3>Top 10 Players</h3>
    <ol>
      <li>Mario</li>
      <li>Zelda</li>
      <li>Donkey Kong</li>
      <li>Zaphod</li>
      <li>Luke</li>
      <li>Luigi</li>
      <li>Halo Guy</li>
      <li>Kirby</li>
      <li>Micky</li>
      <li>Charzar</li>

    </ol>
    </Col>
    <Col sm><h3>Last 10 Scores</h3>
    <LastGames />
    
    
    </Col>
  </Row>

      </Container>
    );
  }
}
