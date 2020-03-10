//Import the React and ReactDOM Libraries
import React from "react";
import ReactDOM from "react-dom";

//Create a React Component
const App = () => {
  const buttonLabel = "Click Me!";
  return (
    <div>
      <label className="label" htmlFor="name">
        Enter Name:
      </label>
      <input id="name" type="text"></input>
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {buttonLabel}
      </button>
    </div>
  );
};

//Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
