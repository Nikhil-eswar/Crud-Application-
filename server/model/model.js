const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    patientName : {
        type : String,
        required: true
    },
    mobile : {
        type: Number,
        required: true,
    },
    gender : String,
    doctor : {
        type : String,
        required: true
    },
    department : {
        type : String,
        required: true
    },
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;