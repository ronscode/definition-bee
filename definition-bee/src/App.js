import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';

class App extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="App">
        
      </div>
    );
  }
}

let mapStateToProps = (state) =>{
  return {
    definition : state.definition
    
  }
}

// }
// let mapDispatchToProps = (dispatch) =>{

// }

export default connect(
  mapStateToProps,
  null

)(App);
