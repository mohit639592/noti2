const express = require("express");
const router = express.Router();
const pass = require("../models/pass.model")


router.get("/",(req,res)=>{
    res.render("index");
})

module.exports = router;