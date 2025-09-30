const mongoose = require("mongoose")
const passSchema = new mongoose.Schema({
    email:{
        type: String,
        require: true
    },
    password:{
        type: String,
        required: true
    }
})

const passmodel = mongoose.model("pass",passSchema);

module.exports = passmodel;