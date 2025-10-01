const express = require("express");
const router = express.Router();
const passmodel = require("../models/pass.model");


router.get("/",(req,res)=>{
    res.render("index");
})

router.get("/secret-vault-unlock",(req,res)=>{
    res.render("vault/secret")
})

router.get("/secret-vault-page",(req,res)=>{
    res.render("vault/vault")
});
// Fetch all passwords
router.get("/secret-vault", async (req, res) => {
    try {
      const passwords = await passmodel.find(); // MongoDB collection
      res.json({ success: true, passwords });
    } catch (err) {
      console.error(err);
      res.status(500).json({ success: false, error: "Server error" });
    }
  });


  router.delete("/secret-vault/:id", async (req, res) => {
    try {
      const id = req.params.id;
      await passmodel.findByIdAndDelete(id);
      res.json({ success: true });
    } catch (err) {
      console.error(err);
      res.status(500).json({ success: false, error: "Server error" });
    }
  });
  
  

router.post("/secret-vault", async (req, res) => {
    try {
      const { password, label, username, url } = req.body;
  
      const newPass = await passmodel.create({
        password,
        label,
        username,
        url
      });
  
      res.json({ success: true, password: newPass });
    } catch (err) {
      console.error(err);
      res.status(500).json({ success: false, error: "Server error" });
    }
  });
  
module.exports = router;
