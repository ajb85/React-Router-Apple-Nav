import React, { Component } from "react";
import NavHeader from "./components/NavHeader";
import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <NavHeader />
        </Router>
      </div>
    );
  }
}

export default App;
