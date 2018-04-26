const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

const app = express();
//Passport JS configuration, including routing directions/CallbackURL for user returning
passport.use(new GoogleStrategy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback'
}, (accessToken) => {
  console.log(accessToken);

}));

//google string is in passport, this asks for profile and email from the possible scopes
app.get('/auth/google',
 passport.authenticate('google', {
  scope:['profile', 'email']
})) 

app.get('/auth/google/callback', passport.authenticate('google'));


app.get("/", (req, res) => {
  res.send({
    hello: "world"
  });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT);
