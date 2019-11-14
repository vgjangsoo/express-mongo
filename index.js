const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

//Body Parser middelware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Set Static Path
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
    res.send("Hello");
});

app.listen(3000, function(){
    console.log("Server started on port 3000...");
});