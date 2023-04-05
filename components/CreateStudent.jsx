import React, { useState, useEffect } from 'react';
import { Link} from 'react-router-dom';
// import { withRouter } from "react-router";

// Custom hook for handling input boxes
// saves us from creating onChange handlers for them individually
const useInput = init => {
  const [ value, setValue ] = useState(init);
  const onChange = e => {
    setValue(e.target.value);
  };
  // return the value with the onChange function instead of setValue function
  return [ value, onChange ];
};

const CreateStudent = props => {
  const [ name, nameOnChange ] = useInput('');
  const [ gender, genderOnChange ] = useInput('');
  const [ birth_year, birthYearOnChange ] = useInput('');
  const [ eye_color, eyeColorOnChange ] = useInput('');


  return (
    <section className="mainSection createCharContainer">
      <header className="pageHeader">
        <h2>Add Students to the Roster</h2>
        <Link to="/" className="backLink">
          <button type="button" className="btnSecondary">
              Back to Roster
          </button>
        </Link>
      </header>

    </section>
  );
};

export default CreateStudent;