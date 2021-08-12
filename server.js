// Dependencies
const express = require("express");
const mongoose = require('mongoose');
const session = require('express-session');
const dotenv = require('dotenv')
const cors = require('cors')

// initialize express
const app = express();

// Load config setting the .env path
dotenv.config({ path: '/.env' });

// connect to database
connectDb();

//Calling our packages
app.set('view engine', 'ejs'); // sets the view engine to render our ejs
app.use(express.static('public')); // tells express to serve up these 'static' files
app.use(cors()); //allows for cross origin resource sharing(Not used for this project)

//body-parsing middleware (required to parse incoming JSON)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"))