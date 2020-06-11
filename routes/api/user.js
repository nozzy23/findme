const router = require("express").Router();
const profiles = require('../../models/user');

// this is the route /api/user/register

router.post("/register",async (req,res)=>{
    const {username,
        password,
        phoneNumber,
        email,
        unit} = req.body;


       try {const newUser= await profiles.create(req.body)

        res.json(newUser);} catch (err) { console.log(err)
            res.sendStatus(500);
        }
  });

  router.post("/",async (req,res)=>{
    const {username,
        password,} = req.body;
       try {const newUser= await profiles.create(req.body)
        res.json(newUser);} catch (err) { console.log(err)
            res.sendStatus(500);
        }
  });


  

  module.exports= router;