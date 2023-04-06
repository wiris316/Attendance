import React from "react";
import { Component } from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import Month from './Month.js'
import Students from "./Students.jsx"
import StudentCard from "./StudentCard.jsx";
import CreateStudent from "./CreateStudent.jsx";
import '../src/style.css'

class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
        <header>
          <nav>
            <Link to='/attendance'>Weekly Attendance Sheet</Link>
            <br></br>
            <Link to='/student'>Student Cards</Link>
            <br></br>
            <Link to='/'>Roster</Link>
        <Link to='/add'>
          <button className="add-button" type="button">Add New Student</button>
        </Link>
            <br></br>
          </nav><br/>

        </header>
        <main>
          <Routes>
            <Route path='/attendance' element={<Month/>} />
            <Route path='/' element={<Students/>} />
            <Route path='/student' element={<StudentCard/>} />
            <Route path='/add' element={<CreateStudent/>} />
          </Routes>
        </main><br/>
    </BrowserRouter>

    )
  }
}



export default App; 