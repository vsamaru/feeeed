import React, { Component } from "react";
import { render } from "react-dom";

import * as Demo from "./demo";

import { Hook, Console } from "console-feed";

class App extends React.Component {
  state = {
    logs: Demo.Initial
  };

  componentDidMount() {
    Hook(
      window.console,
      log => {
        this.setState({ logs: [...this.state.logs, log] });
      },
      false
    );
    Demo.Logs();
  }

  render() {
    return (
      <div style={{ backgroundColor: "#242424" }}>
        <Console logs={this.state.logs} variant="dark" />
      </div>
    );
  }
}

// Disable code-sandbox console
if (console.feed) {
  Object.keys(console.feed.pointers).forEach(key => {
    console[key] = console.feed.pointers[key];
  });
}

render(<App />, document.getElementById("root"));
