import React from "react";
import { Component } from "react";

import Month from './Month.js'
import Row from "./Row.js"
import '../src/style.css'

class App extends Component {
  render() {
    return (

    <div>
      <h1>Daily Attendance</h1>
        <Month />
    </div>
    )
  }
}



export default App; 