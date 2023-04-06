import React from 'react'; 
import DeleteStudent from './DeleteStudent'

const StudentCard = (prop) => {
  const {fName, lName, Absent, Present} = prop;
  
  const handleDelete = e => {
    fetch('/students/delete', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({firstname: fName})
    })
    .catch(err=> console.log('Error handling delete'))
    console.log('yelllooooooow do somethingggg')
  }
  
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
            <button onClick={handleDelete}>CLICK CLICK CLICK</button>
          </div>
          
        </div>

      </div>
    </div> 
  );
};

export default StudentCard;