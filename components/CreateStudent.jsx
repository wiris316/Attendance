// import React, { useState, useEffect } from 'react';
// import { Link, withRouter } from 'react-router-dom';

// // Custom hook for handling input boxes
// // saves us from creating onChange handlers for them individually
// const useInput = init => {
//   const [ value, setValue ] = useState(init);
//   const onChange = e => {
//     setValue(e.target.value);
//   };
//   // return the value with the onChange function instead of setValue function
//   return [ value, onChange ];
// };

// const CreateStudent = props => {
//   const [ name, nameOnChange ] = useInput('');
//   const [ gender, genderOnChange ] = useInput('');
//   const [ birth_year, birthYearOnChange ] = useInput('');
//   const [ eye_color, eyeColorOnChange ] = useInput('');


//   return (
//     <section className="mainSection createCharContainer">
//       <header className="pageHeader">
//         <h2>Add New Student Here</h2>
//         <Link to="/" className="backLink">
//           <button type="button" className="btnSecondary">
//               Back to all characters
//           </button>
//         </Link>
//       </header>
//     </section>
//   );
// };

// export default withRouter(CreateStudent)