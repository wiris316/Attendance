import React from 'react'; 

const StudentCard = (prop) => {
  const {fName, lName, attendance, absence} = prop;
  return (
    <div class="container">
      <div class="card">
        <h3 class="card-title">{fName}{lName}</h3><br/>
        <div class="attendance-body">
          <div className="attendance-info">
            Attended: {attendance}<br/>
            Absent: {absence}
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