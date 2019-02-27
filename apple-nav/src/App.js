import React, { Component } from "react";
import NavHeader from "./components/NavHeader";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import NavHome from "./components/NavHome";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let section = "";
    let subsection = "";

    if (this.props.match) {
      section = this.props.match.params.section;
      subsection = this.props.match.params.subsection;
    }
    //
    return (
      <div className="App">
        <NavHeader />
        <Route exact path="/" component={Home} />
        <Route exact path="/:section" component={NavHome} />
        <Route path="/:section/:subsection" component={NavHome} />
      </div>
    );
  }
}

export default App;
