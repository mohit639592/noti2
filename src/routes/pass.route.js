const express = require("express");
const router = express.Router();
const pass = require("../models/pass.model")


router.get("/",(req,res)=>{
    res.render("index");
})

router.get("/secret-vault-unlock",(req,res)=>{
    res.render("secret")
})

router.get("/secret-vault",(req,res)=>{
    res.render("vault")
})
module.exports = router;