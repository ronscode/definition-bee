import React, { component} from "react";
import { ToggleButton, ToggleButtonGroup } from "react-bootstrap";

export default class PlayPause extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleChange = this.handleChange.bind(this);
  
      this.state = {
        value: [1, 3],
      };
    }
  
    handleChange(value, event) {
      this.setState({ value });
    }
  
    render() {
      return (
        <ToggleButtonGroup
          type="checkbox"
          value={this.state.value}
          onChange={this.handleChange}
        >
          <ToggleButton value={1}>Play</ToggleButton>
          <ToggleButton value={2}>Pause</ToggleButton>
        </ToggleButtonGroup>
      );
    }
  }
  