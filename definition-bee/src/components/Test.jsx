import React, { Component } from "react";

export default class AnswerButton extends React.Component {
  // This syntax ensures `this` is bound within handleClick.
  // Warning: this is *experimental* syntax.
  handleClick = () => {
    console.log("this button is:", this.value);
  };

  render() {
    return <input onSubmit={this.handleClick}>Click me</input>;
  }
}
