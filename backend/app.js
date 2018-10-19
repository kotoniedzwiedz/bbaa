const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/users');

const app = express();

mongoose.connect('mongodb+srv://devant:deVantpass!23@cluster0-4wgzy.mongodb.net/test?retryWrites=true').then(() => {
  console.log('connected');
}).catch(()=> {
  console.log('not connected');
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS");
  next();
});

app.use('/api/users', usersRoutes);

module.exports = app;
