import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import BoardList from "./BoardList";
import SignUp from "./SignUp";
import "./App.css";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>React Board</h1>
          <ul className="header">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/board">Board List</NavLink>
            </li>
            <li>
              <NavLink to="/signUp">Sign Up</NavLink>
            </li>
          </ul>
          <div className="content"></div>
          <Route exact path="/" component={Home} />
          <Route exact path="/board" component={BoardList} />
          <Route exact path="/signUp" component={SignUp} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
