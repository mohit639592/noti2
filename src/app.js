const express = require("express")
const path = require("path")
const passroute = require("./routes/pass.route")
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.set("view engine","ejs")
app.set("views",path.join(__dirname,"views"))

app.use("/",passroute)
module.exports = app;