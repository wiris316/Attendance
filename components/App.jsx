import React from "react";
import { Component } from "react";

import Row from "./Row.js"
import '../src/style.css'

class App extends Component {
  render() {
    return (

    <div>
      <h1>Daily Attendance</h1>
        <Row />
        <Row />
        <Row />
        <Row />
    </div>
    )
  }
}



export default App; 