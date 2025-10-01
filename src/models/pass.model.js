const mongoose = require("mongoose")
const passSchema = new mongoose.Schema({
    password:{
        type: String,
        require: true
    },
    label:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    url:{
        type: String,
        required: true
    }
})

const passmodel = mongoose.model("pass",passSchema);

module.exports = passmodel;