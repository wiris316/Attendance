import React from 'react'; 

const StudentCard = (prop) => {
  const {fName, lName, Absent, Present} = prop;
  return (
    <div className="container">
      <div className="card">
        <h3 className="title">{fName} {lName}</h3><br/>
        <div className="attendance-body">
          <div className="attendance-info">
            Absent: {Absent}<br/>
            Attended: {Present}
          </div>
          <div className="attendance-buttons">
            <button id="present-button">Present</button>
            <button id="absent-button">Absent</button>
          </div>
          
        </div>

      </div>
    </div> 
  );
};

export default StudentCard;