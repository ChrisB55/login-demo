const express = require('express');
const mongoose= require('mongoose');
const keys = require('./config/keys');
require ('./models/User');
require ('./services/passport');

const app = express();
mongoose.connect('mongoURI');



require('./routes/authRoutes')(app);

app.get("/", (req, res) => {
  res.send({
    hello: "world"
  });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT);
