// // const { Pool } = require('pg');

// // const NPS_URI = 'curl -X GET "https://developer.nps.gov/api/v1/lessonplans?limit=10&start=5&q=lessons" -H  "accept: application/json"'

// // const API_KEY = "LE9nqFrnQZn5oCUH3q0pQhAPVl3dpPQvWJkuX7Ju"
// // const pool = new Pool({
// //   connectionString: NPS_URI
// // })


// // module.exports = {
// //   query: (text, params, callback) => {
// //     console.log('executed query', text);
// //     return pool.query(text, params, callback);
// //   }
// // };


// const apiKey = "your-api-key";
// const apiUrl = "https://api.example.com/data";

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