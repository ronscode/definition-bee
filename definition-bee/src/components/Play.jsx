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
import "./StrikeCount";

import axios from "axios";
import Timer from "react-compound-timer";
import "./CountDownTimer";
import CountDownTimer from "./CountDownTimer";

let Play = ({
  loadDefinition,
  loadGame,
  word,
  questionNumber,
  answer,
  score,
  strike,
  skips,
  definition,
  checkStrike
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
    let ans = document.getElementById("answer").value;
    answer(ans.toLowerCase());
    checkStrike();

    // console.log(e.target.value)
    // dispatch({type: "ANSWER", submittedAnswer: e.target.value})
    axios.get("/definition/random").then(({ data }) => {
      loadDefinition(data);
      //console.log(data)
      // dispatch({type: "LOAD_DEFINITON", definition: data.definition});
    });
  };

  class StrikeCount extends React.Component {
    render() {
      return (
        <div>
          <h3>The Strike Count Is</h3>
          <p>
            {(() => {
              switch (strike) {
                case 0:
                  return <span className="strike"> </span>;
                case 1:
                  return <span className="strike">X</span>;
                case 2:
                  return <span className="strike">X X</span>;
                case 3:
                  return <span className="strike">X X X</span>;
                default:
                  return "#FFFFFF";
              }
            })()}
          </p>
        </div>
      );
    }
  }

  return (
    <Container>
      <Row>
        <Col className="p-4" sm={8}>
          <h2>Correctly Define and Spell:</h2>

          <div>
            {questionNumber}
            <br />
            {definition}
          </div>
          <Row>
            <Col />
            <Col>
              <form>
                <input id="answer" className="definitionAnswer" type="text" />
                <button onClick={e => submitAnswer(e)}>Submit</button>
              </form>
            </Col>
          </Row>

          <Row>
            <Col />
            <CountDownTimer />
            <hr />

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
                    <Col className="strike">
                      <hr />
                      <StrikeCount />
                      {console.log("the count is " + strike)}
                    </Col>
                    {/* <Col className="noStrike">X</Col>
                  <Col className="noStrike">X</Col> */}
                  </Row>
                </Col>
                <Col>
                  <h3>SKIPS</h3>
                  <Row className="skipCount">
                    <Col className="skip">S</Col>
                    <Col className="skip">S</Col>
                    <Col className="usedSkip">S</Col>
                  </Row>{" "}
                </Col>

                <hr />
              </Row>
            </Col>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
};
export default Play;
