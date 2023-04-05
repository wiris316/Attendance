const path = require('path');
const express = require('express');

const app = express();
const PORT = 3000;


//////// ROUTE HANDLERS
const studentRoute = require('./routes/studentRoute')

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use('/style.css', express.static(path.join(__dirname, 'src/style.css')));
app.use('/students', studentRoute)


app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, './src/index.html'))
})

app.get('/yellow', (req, res) => {
  res.status(200).send('hi change smoething')
})

app.get('/green', (req, res) => {
  res.status(200).send('hi greenie change smoething')
})


///// GLOBAL ERROR HANDLER //////////
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' }, 
  };
  const errorObj = Object.assign(defaultErr, err);
  console.log(errorObj.log);

  return res.status(errorObj.status).json(errorObj.message);
});


app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`)
})



module.exports = app; 