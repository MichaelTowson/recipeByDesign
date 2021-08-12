// Dependencies
const express = require("express");
const mongoose = require('mongoose');
const session = require('express-session');
const cors = require('cors')

// initialize express
const app = express();

// Load config setting the .env path to /config/.env
dotenv.config({ path: './config/.env' });

// connect to database
connectDb();