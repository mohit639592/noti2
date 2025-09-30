const mongoose = require("mongoose");
const connect =()=>{
    mongoose.connect("mongodb+srv://mohit_sharma:Radhaji369@cluster0.mco0ufx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(()=>{
        console.log("Server Connected");
    })
    .catch((err)=>{
        console.log(err);
    })
}

module.exports = connect;