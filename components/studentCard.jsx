import React, {useState} from 'react'; 
import DeleteStudent from './DeleteStudent'

const StudentCard = (prop) => {
  const { fName, lName, Absent, Present } = prop;
  const [Present2, setPresent] = useState(Present)
  // console.log('present2 herereeee', Present2)
  
  const handleDelete = e => {
    fetch('/students/delete', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({firstname: fName})
    })
    .then(()=> window.location.reload())
    .catch(err=> console.log('Error handling delete'))
    console.log('yelllooooooow do somethingggg')
  }

  // const increment = (e) => {
  // const 
  //   { Present } ++;
  //   return { Present };
  // }
  
  return (
    <div className="container">
      <div className="card">
        <h3 className="title">{fName} {lName}</h3><br/>
        <div className="attendance-body">


          
          <div className="attendance-info">
            Attended: {Present2}
            <div>
              <div className="bar-container">
                <div className="attendance present">{Present2}</div>
              </div><br/>
              Absent: {Absent}<br />
  
              <div className="bar-container">
              <div class="attendance absent">{Absent}</div>
              </div>
            </div><br />
            



          </div>
          <div className="attendance-buttons">
            <button onClick={() => setPresent( Present2+1 )} id="present-button">Present</button>
            <button id="absent-button">Absent</button>
            <button onClick={handleDelete}>DELETE</button>
          </div>
          
        </div>

      </div>
    </div> 
  );
};

export default StudentCard;