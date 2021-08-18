const dotenv = require('dotenv')
dotenv.config({ path: './.env'}) //Project requires that developer create a .env with the settings specified below in the root directory.

module.exports = {
    DB_URI: process.env.DB_URI, //Format: DB_URI = mongodb+srv://<user>:<password>@<cluster>.qfz9i.mongodb.net/Cluster0?retryWrites=true&w=majority
    PORT: process.env.PORT 
}