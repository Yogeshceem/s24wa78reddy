var express = require('express');
const newLocal = express.Router();

/* GET the page. */
newLocal.get('/', function(req, res, next) {
  res.render('mydata', { title: 'Yogesh' });
});

module.exports = newLocal;