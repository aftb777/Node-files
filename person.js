const mongoose = require("mongoose")

// Create Schema

const personSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    age : {
        type : Number,
        required : true
    },
    work : {
        type : String,
        enum : ['chef', 'owner', 'manager'],
        required : true
    },
    mobile : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    address : {
        type : String,
    },
    salary : {
        type : Number,
        required : true
    }
});

// Create Person Modal

const Person = mongoose.model('Person', personSchema); // created module name person
module.exports = Person; // Now export it to person