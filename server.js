const express = require('express');
const errorHandler = require('./middleware/errorHandler.js');
const dotenv = require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use('/api/contacts', require('./manageRoutes/contactsRoutes.js'));
app.use(errorHandler);

app.listen(port, function(req, res){
    console.log(`The server is started at port ${port}`);
})