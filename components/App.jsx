import React from "react";
import { Component } from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import Month from './Month.js'
import Row from "./Row.js"
import Students from "./Students.jsx"
import StudentCard from "./StudentCard.jsx";
import '../src/style.css'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <header>
          <nav>
            <Link to='/'>Attendance Sheet</Link>
            <br></br>
            <Link to='/student'>Student Cards</Link>
            <br></br>
            <Link to='/roster'>Roster</Link>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path='/' element={<Month/>} />
            <Route path='/roster' element={<Students/>} />
            <Route path='/student' element={<StudentCard/>} />
          </Routes>
        </main>
    </BrowserRouter>

    )
  }
}



export default App; 