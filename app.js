//Run project in developer mode with the terminal command "npm run dev"

// ----------- SETUP ----------------------------

    // Installed Dependencies
        const express = require("express");
        const mongoose = require('mongoose');
        const session = require('express-session');
        const cors = require('cors')

    // Import configuration settings, which are set in a hidden .env file in the root directory and exported from config.js
        const {
            PORT,
            DB_URI,
        } = require('./config');


// ----------- SERVER ---------------------

    const app = express(); // Initialize express

    // Set app to render static ejs views
        app.set('view engine', 'ejs'); // Set ejs files to be rendered as views
        app.set('views', './src/views') // point to directory that views are found in
        app.use(express.static('./src/public')); // point to directory that static files are found in
        app.use(cors()); //allows for cross origin resource sharing(Not used for this project)

    // Initialize Express Bodyparser
        app.use(express.json());
        app.use(express.urlencoded({ extended: true }));

    // Initialize Express-Session - TO DO: ADD THIS CODE AFTER SERVER RESTFUL API IS WORKING

    // Set routes
        const routes = require('./src/routes/routes'); //Router dependency is defined in imported file.
        app.use('/', routes)

    // Activate client (app) to begin listening on port.
        app.listen(PORT, () => {
            console.log(`SERVER STATUS: Successfully began running on port ${PORT}`);
        });

// ----------- DATABASE --------------------------
    
    // Connect
        mongoose.connect(DB_URI, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true})
                .then(() => console.log("DATABASE STATUS: Successfully connected to MongoDB Atlas"))
                .catch((err) => console.log("DATABASE STATUS: Error connecting to MongoDB Atlas:", err))