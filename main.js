var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var buffs = require('./routes/buffs');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/buffApp', function(err) {
    if(err) {
        console.log('connection error', err);
    } else {
        console.log('connection successful');
    }
});

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes)
app.use('/buffs', buffs);
//routes.initialize(app);
//app.use('/buffs', buffs);

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port
	
  console.log("Example app listening at http://%s:%s", host, port)

})