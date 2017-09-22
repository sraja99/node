var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hello satishraja World");
});

app.listen(5000);
