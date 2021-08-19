const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({

    //User also has the field of _id, which is automatically created upon generation.

    username: {
        type: String,
        required: [false],
    },

    email: {
        type: String,
        required: [true, "Please enter a valid email"],
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Please enter a valid email"
        }
    },

    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [8, "Password must be 8 characters or longer"]
    },

    admin: {
        type: Boolean,
        required: [false, "please write 'true' or 'false' whether the user is an adminstrator or not."],
    },

    favorite_recipes: [{
        type: String,
        required: [false],
    }],

}, {timestamps: true});

const User = mongoose.model('User', UserSchema)

module.exports = User;