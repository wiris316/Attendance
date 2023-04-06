import React from 'react'; 

const StudentCard = (prop) => {
  const {fName, lName, Absent, Present} = prop;
  return (
    <div className="container">
      <div className="card">
        <h3 className="title">{fName} {lName}</h3><br/>
        <div className="attendance-body">


          
          <div className="attendance-info">
            Attended: {Present}
            <div>
              <div class="bar-container">
                <div class="attendance present">{Present}</div>
              </div><br/>
              Absent: {Absent}<br />
  
              <div class="bar-container">
              <div class="attendance absent">{Absent}</div>
              </div>
            </div><br />
            



          </div>
          <div className="attendance-buttons">
            <button id="present-button">Present</button>
            <button id="absent-button">Absent</button>
            <button id="delete-button">Delete</button>
          </div>
          
        </div>

      </div>
    </div> 
  );
};

export default StudentCard;