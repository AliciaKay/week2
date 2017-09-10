var express = require('express');
var bodyParser = require('body-parser');

// require routers
var indexRouter = require('./routes/index');
var personRouter = require('./routes/person');

var app = express();

//middleware
app.use(bodyParser.urlencoded({extended: true}));

// this serve all other client side files
// client.js, jquery, css
app.use(express.static('public')); // public folder

// Routes
app.use('/', indexRouter);
app.use('/list', personRouter);

app.listen(3000, function() {
    console.log('listening on 3000');
});