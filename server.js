const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

app.use('/style.css', express.static(path.join(__dirname, 'src/style.css')));


app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, './src/index.html'))
  // res.send('hi')
})



app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`)
})

module.exports = app; 