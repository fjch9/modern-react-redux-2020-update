//Import the React and ReactDOM Libraries
import React, { Component } from "react";
import ReactDOM from "react-dom";

//Create a React Component
const App = () => {
  return <div> Hello there! </div>;
};

//Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));

export default class index extends Component {
  render() {
    return <div></div>;
  }
}
