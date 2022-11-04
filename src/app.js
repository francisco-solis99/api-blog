const path = require('path');
const express = require('express');
const sequelize = require('./config/db'); //get sequelize
const routes = require('./routes/index.routes');
require('ejs');

const app = express();

// Config
app.set('nameApp', 'Blog');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); //using the middleware to convert the respons in a valid JS object
app.use('/', routes); // add the routes

// Sequelize connection
try {
  sequelize.authenticate();
  sequelize.sync();
  console.log('Connected to DB');
} catch (error) {
  console.log('Unable to connect to DB: ', error);
}

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Listening the ${app.get('nameApp')} on port ${PORT}`);
});
