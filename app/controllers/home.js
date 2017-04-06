var express = require('express'),
  router = express.Router(),
  Article = require('../models/article');
  config = require('../../config/config');
  

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
  var articles = [new Article(), new Article()];
    res.render('index', {
      title: config.app.name,
      articles: articles
    });
});
