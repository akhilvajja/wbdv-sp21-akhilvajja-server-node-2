// TODO: review https://expressjs.com/
const express = require('express')
require('dotenv').config();
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
const uri = process.env.MONGODB_URI;
// parse application/json
app.use(bodyParser.json())

const session = require('express-session')

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    // cookie: { secure: true }
}))


const mongoose = require('mongoose');
mongoose.connect(uri,
    {useNewUrlParser: true, useUnifiedTopology: true});



// configure CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});

const demos = require('./controllers/demo-controller');
demos(app);

// const quizzesController = require("./controllers/quizzes-controller")
// quizzesController(app)

require("./controllers/quizzes-controller")(app)
require("./controllers/question-controller")(app)

app.listen(process.env.PORT);