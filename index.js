const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Body Parser middelware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Set Static Path
app.use(express.static(path.join(__dirname, 'public')));

const users = [
    {
        id: 1,
        first_name: 'John',
        last_name: 'Doe',
        email: 'johndoe@gmail.com'
    },
    {
        id: 2,
        first_name: 'Bob',
        last_name: 'Smith',
        email: 'bobsmith@gmail.com'
    },
    {
        id: 3,
        first_name: 'Jill',
        last_name: 'Jackson',
        email: 'jjackson@gmail.com'
    }
];

app.get('/', function(req, res){
    res.render('index', {
        title: 'Customers',
        users: users
    });
});

app.post('/users/add', function(req, res) {
    const newUser = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
    };

    console.log(newUser);
});

app.listen(3000, function(){
    console.log("Server started on port 3000...");
});