const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const cors = require('cors');

const PORT = process.env.PORT || 3000;
const apiRouter = require('./routes/api')

// Handle Parsing Request Body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Define Route Handlers
app.use('/api', apiRouter)


app.use(express.static(path.join(__dirname, './build')));

app.get('/', (req, res) => {
<<<<<<< HEAD
  //console.log("It's working!");
  return res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
});
app.use(express.static(path.join(__dirname, './build')));

=======
  console.log("It's working!");
  return res
    .status(200)
    .sendFile(path.resolve(__dirname, '../client/index.html'));
});
>>>>>>> 34368b57a2533d76d4b12df2612c68357228af35

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});

module.exports = app;
