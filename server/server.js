const express = require('express');
const bodyParser = require('body-parser');

// Start listening for requests on a specific port
const PORT = process.env.PORT || 5000;

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

const houses = require('./routes/house.router');
app.use('/house', houses);

// Serve back static files by default
app.use(express.static('server/public'));


app.listen(PORT, () => {
  console.log('listening on port', PORT);
});
