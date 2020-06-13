const express = require('express');
const bodyParser = require('body-parser');
const path = require("path");
const app = express();
const port = process.env.PORT || 6000;
const mongoose = require("mongoose");
const routes = require("./routes");
const authenticatedRoutes=require('./server/AuthRoutes/index');
const cors=require("cors");
const db= require('./models')
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes);

//connect to mongoDB
const uri = process.env.MONGODB_URI || "mongodb://localhost/dbprofiles";
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    autoIndex: false,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Mongo connection established successfully.");
  })
  .catch(console.error);


  const JWT_SECRET="samplesecret";

  const md5=require("md5");
  const jwt = require('jsonwebtoken');
  const passport = require('passport');
  const LocalStrategy = require('passport-local').Strategy;
  const passportJWT = require("passport-jwt");
  const JWTStrategy   = passportJWT.Strategy;
  const ExtractJWT = passportJWT.ExtractJwt;
  passport.use(new LocalStrategy({
          usernameField: 'username',
          passwordField: 'password'
      }, 
      function (username, password, cb) {
        console.log("authUser")
        try {db.User.findOne({
          username:username
        }).then(user=>{
          if (!user) {
            console.log("no user")
              return cb(null, false, {message: 'Incorrect email or password.'});
          }
          if(user.password===(password)) {
            console.log(user)
           return cb(null, user, {message: 'Logged In Successfully'});
          } else {
            console.log("wrong password")
            return cb(null, false, {message: 'Incorrect email or password.'});
          }
          
        },error=>{
          console.log(error)
          cb(null, false, {message: 'Incorrect email or password1.'})}).catch(error=>{
          console.log(error)
          cb(null, false, {message: 'Incorrect email or password2.'})
        });
      } catch(error){
      console.log(error)
      }
    }));
  
  passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey   : JWT_SECRET
  },
  function (jwtPayload, cb) {
    //find the user in db if needed. This functionality may be omitted if you store everything you'll need in JWT payload.
    return db.Profiles.findOne({_id:jwtPayload._id})
        .then(user => {
            const token = jwt.sign(user.toObject(), JWT_SECRET);
            return cb(null, {...user.toObject(),token});
        })
        .catch(err => {
            return cb(err);
        });
  }
  ));
  // Define middleware here
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  
  app.post("/login",(req,res)=>{
    passport.authenticate('local', {session: false}, (err, user, info) => {
      console.log("information",info)
      if (err || !user) {
        
          return res.status(400).json({
              message: 'Something is not right',
              user   : user
          });
      }
      const token = jwt.sign(user.toObject(), JWT_SECRET);
      return res.json({username:user.username, token});
  })(req, res);
  });  
  
  app.post("/",(req,res)=>{
    passport.authenticate('local', {session: false}, (err, user, info) => {
      if (err || !user) {
        
          return res.status(400).json({
              message: 'Something is not right',
              user   : user
          });
      }
      const token = jwt.sign(user.toObject(), JWT_SECRET);
      return res.json({username:user.username, token});
  })(req, res);
  });
  
  app.use('/authenticated', passport.authenticate('jwt', {session: false}), authenticatedRoutes);
  
  app.get("/",(req,res)=>{
    res.sendStatus(200);
  })


app.listen(port, () => console.log(`Listening on port ${port}`));