const express = require('express');
const router = express.Router();
const db=require("../../models/user");

/* Sample Authenticated Rout. */
router.get('/', function(req, res, next) {
  res.send({username:req.user.username,token:req.user.token});
});

module.exports = router;    