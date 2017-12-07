'use strict';

var url = require('url');

var Inforoute = require('./InforouteService');

module.exports.addInforoute = function addInforoute (req, res, next) {
  Inforoute.addInforoute(req.swagger.params, res, next);
};

module.exports.deleteInforoute = function deleteInforoute (req, res, next) {
  Inforoute.deleteInforoute(req.swagger.params, res, next);
};

module.exports.getAllInforoute = function getAllInforoute (req, res, next) {
  Inforoute.getAllInforoute(req.swagger.params, res, next);
};

module.exports.getInfoById = function getInfoById (req, res, next) {
  Inforoute.getInfoById(req.swagger.params, res, next);
};

module.exports.updateInforoute = function updateInforoute (req, res, next) {
  Inforoute.updateInforoute(req.swagger.params, res, next);
};
