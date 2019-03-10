import React from "react";
import {
  Jumbotron,
  Container,
  Row,
  Col,
  Image,
  Button,
  ToggleButtonGroup
} from "react-bootstrap";
import "./Home.css";
import "./Play.css";
import axios from "axios";

let Play = ({
  loadDefinition,
  loadGame,
  word,
  questionNumber,
  answer,
  score,
  strike,
  skips,
  definition
}) => {
  const startGame = () => {
    axios
      .get("/definition/random")
      .then(({ data }) => {
        loadGame(data);
        // dispatch({type: "LOAD_DEFINITON", definition: data.definition});
      })
      .catch();
  };

  const submitAnswer = e => {
    e.preventDefault();
    answer(e.target.value);
    console.log(e.target.value);
    // dispatch({type: "ANSWER", submittedAnswer: e.target.value})
    axios
      .get("/definition/random")
      .then(({ data }) => {
        loadDefinition(data);
        console.log(data);
        // dispatch({type: "LOAD_DEFINITON", definition: data.definition});
      })
      .catch();
  };

  return (
    <Container>
      <Row>
        <Col className="p-4" sm={8}>
          <h2>Correctly Define and Spell:</h2>

          <div>{definition}</div>
          <Row>
            <Col />
            <Col>
              <form>
                <input className="definitionAnswer" type="text" />
                <button onClick={e => submitAnswer(e)}>Submit</button>
              </form>
            </Col>
          </Row>

          <Row>
            <Col />

            <Col />
          </Row>

          <hr />
          <button onClick={() => startGame()}>Play</button>
        </Col>
        <Col sm={4}>
          <Jumbotron className="jumboChalkboard">
            <Col>
              <h2 className="homeChalkWhite">SCOREBOARD</h2>
              <p>{score} points</p>
              <hr />
              <Row className="strikesBox">
                <Col>
                  <h3>STRIKES</h3>
                  <Row className="strikeCount">
                    <Col className="strike">{strike}</Col>
                    {/* <Col className="noStrike">X</Col>
                  <Col className="noStrike">X</Col> */}
                  </Row>
                </Col>
                <Col>
                  <h3>SKIPS</h3>
                  <Row className="skipCount">
                    <Col className="skip">X</Col>
                    <Col className="skip">X</Col>
                    <Col className="usedSkip">X</Col>
                  </Row>{" "}
                </Col>
              </Row>
            </Col>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
};
export default Play;
