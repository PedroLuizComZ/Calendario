const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");

const server = express();

server.use(routes);
mongoose.connect('mongodb+srv://admin:calendario123@calendario-smsbj.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Oi pedro!!');
});

server.listen(3333);
