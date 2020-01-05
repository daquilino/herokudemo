var express = require('express');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 8080;

// Sets up static folder
app.use(express.static(path.join(__dirname,'/public')))

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req,res)=>res.send("Hello"));

app.listen(PORT,()=>console.log(`Listening on port: ${PORT}`));