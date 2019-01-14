const express = require('express');
const fetch = require('node-fetch');

const app = new express();
const url = 'https://api.varzesh3.com/v2.0/leaguestat/widget/5/471';

const fetchJsonData = async () => {
  try {
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
};

app.use(express.static(__dirname+"/static"));
app.use(express.json());

app.use('/', function(req, res, next) {
  console.log(1);
  next();
});

app.get('/', function(req, res) {
  console.log('home Mid');
  res.sendFile(__dirname + '/static/home.html');
});

app.get('/login.html', function(req, res) {
  console.log('login Mid');
  res.sendFile(__dirname + '/static/login.html');
});

app.listen(3088, () => console.log('app is runing on port 3088'));
