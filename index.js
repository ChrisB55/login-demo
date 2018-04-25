const express = require('express');
const passsport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();

passsport.use(new GoogleStrategy());

app.get("/", (req, res) => {
  res.send({ hello: "world" });
});

const PORT = process.env.PORT || 4000 ;
app.listen(PORT);
