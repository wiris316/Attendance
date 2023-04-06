import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// const db = require('../models/studentModels');
// import { withRouter } from "react-router";

// Custom hook for handling input boxes
// saves us from creating onChange handlers for them individually
// const useInput = init => {
//   const [ value, setValue ] = useState(init);
//   const onChange = e => {
//     setValue(e.target.value);
//   };
//   // return the value with the onChange function instead of setValue function
//   return [ value, onChange ];
// };

const CreateStudent = props => {
  const [ fName, setfName ] = useState('');
  const [lName, setlName] = useState('');
  const [ birthday, setbirthday ] = useState('');

  
  const handlefNameChange = e => {
    const newValue = e.target.value
    setfName(newValue);
  }
  const handlelNameChange = e => {
    const newValue = e.target.value
    setlName(newValue);
  }
  const handlebirthdayChange = e => {
    const newValue = e.target.value
    setbirthday(newValue);
  }


  ///////// ATTEMPT TO CAPTURE FROM USER INPUT ///////////
  const handleSubmit = e => {
    // e.preventDefault();
    fetch('/students/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({firstname: fName, lastname: lName})
    })
      .then(req => console.log(req.body))
      .then(data => {
        console.log('datatatata', data);
        setfName('');
        setlName('');
      })
    .catch(err=> console.log('Error handling submit'))
  }

  // const handleSubmit = e => {
  //   console.log('submit button clicked')
  //   console.log('Form Values:', fName, lName, birthday)
  //   // const queryStr = `
  //   // INSERT INTO PEOPLE (firstname, lastname)
  //   // VALUES ('first1', 'last1')
  //   // RETURNING *;
  //   // `
  //   // db.query(queryStr);

  // }



  return (
    <section className="createStudentForm">
      <header className="pageHeader">
        <h2>Add Students to the Roster</h2>
        <div className="StudentInfoFields">
          <label htmlFor="fName"></label>
          {/* <input name="fName" placeholder="FirstName" value="First Name" onChange={handlefNameChange} required/> */
        <input name="fName" placeholder="First Name" onChange={handlefNameChange} required/> }
        </div>
        <div className="StudentInfoFields">
          <label htmlFor="fName"></label>
          {/* <input name="fName" placeholder="LastName" value="Last Name" onChange={handlelNameChange} required/> */
          <input name="lName" placeholder="Last Name" onChange={handlelNameChange} required/> }
        </div>
        <div className="StudentInfoFields">
          <label htmlFor="birthday"></label>
          {/* <input name="birthday" placeholder="Birthday" /*value={birth_year} onChange={birthYearOnChange}/* /> */
            <input name="birthday" placeholder="Birthday" onChange={handlebirthdayChange} />}
          
        </div>
        <div className="StudentInfoFields">
          <label htmlFor="gender">Gender: </label>
          <select name="gender" id="gender-select"> </select>
        </div>
        <button type="submit" onClick={handleSubmit} >SUBMIT</button>

        <Link to="/" className="backLink">
          <button type="button" className="btnSecondary">
              Back to Attendance Sheet
          </button>
        </Link>
      </header>

    </section>
  );
};

export default CreateStudent;