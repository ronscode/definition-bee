import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Play from "./components/Play";
import About from "./components/About";
import Navbar from "./components/CustomNavbar";

var unirest = require("unirest");
const RapidAPI = require("rapidapi-connect");
const rapid = new RapidAPI(
  "DefinitionBee",
  "7ee2744e37mshd8a5306a0515f48p13e6a7jsn51a27e9f1337"
);

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/play" component={Play} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;

// // Old code I'm saving
// var unirest = require("unirest");
// const RapidAPI = require("rapidapi-connect");
// const rapid = new RapidAPI(
//   "DefinitionBee",
//   "7ee2744e37mshd8a5306a0515f48p13e6a7jsn51a27e9f1337"
// );

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       items: [],
//       isLoaded: false
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then(res => res.json())
//       .then(json => {
//         this.setState({
//           isLoaded: true,
//           items: json
//         });
//       });
//   }

//   render() {
//     var { isLoaded, items } = this.state;

//     if (!isLoaded) {
//       return <div>Loading...</div>;
//     } else {
//       return (
//         <div className="App">
//           <div>
//             <ul>
//               {items.map(item => (
//                 <li key={item.id}>
//                   {item.name} | {item.email}
//                 </li>
//               ))}
//               ;
//             </ul>
//             <button>Button</button>
//           </div>
//         </div>
//       );
//     }
//   }
// }
