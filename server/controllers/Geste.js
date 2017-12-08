'use strict';

var url = require('url');

var Geste = require('./GesteService');

module.exports.addGeste = function addGeste (req, res, next) {
  Geste.addGeste(req.swagger.params, res, next);
};

module.exports.deleteGeste = function deleteGeste (req, res, next) {
  Geste.deleteGeste(req.swagger.params, res, next);
};

module.exports.getGestes = function getGestes (req, res, next) {
  Geste.getGestes(req.swagger.params, res, next);
};
