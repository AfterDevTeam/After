const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const cors = require('cors');

const PORT = process.env.PORT || 3000;
const apiRouter = require('./routes/api')
const testRouter = require('./routes/testRouter')

// Handle Parsing Request Body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Define Route Handlers
app.use('/api', apiRouter)



// This is for test. Delete it when you are done
app.use('/test', testRouter)

app.use(express.static(path.join(__dirname, './build')));

app.get('/', (req, res) => {
  //console.log("It's working!");
  return res
    .status(200)
    .sendFile(path.resolve(__dirname, '../client/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});

module.exports = app;
