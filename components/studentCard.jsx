import React, {useState} from 'react'; 
import DeleteStudent from './DeleteStudent'

const StudentCard = (prop) => {
  const { fName, lName, Absent, Present } = prop;
  const [Present2, setPresent] = useState(Present)
  const [Absent2, setAbsent] = useState(Absent)
  // console.log('present2 herereeee', Present2)
  
  const handleDelete = e => {
    const confirmation = () => {
      const answer = confirm("Are you sure you want to delete this student?")

      if (answer) {
        fetch('/students/delete', {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ firstname: fName })
        })
          .then(() => window.location.reload())
          .catch(err => console.log('Error handling delete'))
        console.log('yelllooooooow do somethingggg')
      } else console.log('Cancelled')
      }
    confirmation();
    }


  // const increment = (e) => {
  // const 
  //   { Present } ++;
  //   return { Present };
  // }
  
  return (
    <div className="container">
      <div className="card">
      <button id="delete-button" onClick={handleDelete}>DELETE</button>
        <h3 className="title">{fName} {lName}</h3>
        <div className="attendance-body">


          
          <div className="attendance-info">
            Attended: {Present2}
            <div>
              <div className="bar-container">
                <div className="attendance present">{Present2}</div>
              </div><br/>
              Absent: {Absent2}<br />
  
              <div className="bar-container">
              <div class="attendance absent">{Absent2}</div>
              </div>
            </div><br />
            



          </div>
          <div className="attendance-buttons">
            <button onClick={() => setPresent( Present2+1 )} id="present-button">Present</button>
            <button onClick={() => setAbsent(Absent2-1) } id="absent-button">Absent</button>
          </div>
          
        </div>

      </div>
    </div> 
  );
};

export default StudentCard;