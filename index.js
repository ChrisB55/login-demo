const express = require('express');
require ('./services/passport');



const app = express();

require('./routes/authRoutes')(app);

app.get("/", (req, res) => {
  res.send({
    hello: "world"
  });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT);
