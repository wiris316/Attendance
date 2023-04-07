import React, { useState, useEffect } from 'react';
const NPS = require('../models/lessonModels');


// const apiKey = "LE9nqFrnQZn5oCUH3qOpQhAPVl3dpPQvWJkuX7Ju"
// const apiUrl = "https://developer.nps.gov/api/v1/lessonplans?limit=10&start=5&q=lessons";

// fetch(apiUrl, {
//   headers: {
//     "Authorization": `Bearer ${apiKey}`
//   }
// })
// .then(response => {
//   if (response.ok) {
//     return response.json();
//   }
//   throw new Error("Network response was not ok.");
// })
// .then(data => {
//   console.log(data);
// })
// .catch(error => {
//   console.error("There was a problem fetching the data:", error);
// });

const LessonPlans = () => {
  console.log('yo')
  return [
    <div>
    <div className="LessonPlanTemp">
        <h1 id="Lesson">Lesson Plan</h1>
        <p>__________________________________________________________</p>
        <p>__________________________________________________________</p>
        <p>__________________________________________________________</p>
        <p>__________________________________________________________</p>
        <p>__________________________________________________________</p>
        <p>__________________________________________________________</p>
        <p>__________________________________________________________</p>
      </div>
      {/* <nav className="nav2">
        <button>Science</button>
        <button>Math</button>
        <button>Phonics</button>
        <button>Art</button>
      </nav> */}
      </div>
    ]
}

export default LessonPlans;

