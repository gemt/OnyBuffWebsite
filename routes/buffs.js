var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Buff = require('../models/Buff.js');


/* GET /buffs listing. */
router.get('/', function(req, res, next) {
	console.log("listing buffs")
  Buff.find(function (err, buffs) {
    if (err) return next(err);
    res.json(buffs);
  });
});

/* POST /buffs */
router.post('/', function(req, res, next) {
	console.log("adding buff")
  Buff.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;