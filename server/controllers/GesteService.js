'use strict';

exports.addGeste = function(args, res, next) {
  /**
   * Ajouter un geste
   * 
   *
   * body Order Informations sur le geste
   * returns Order
   **/
  var examples = {};
  examples['application/json'] = "";
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.deleteGeste = function(args, res, next) {
  /**
   * Supprimer un geste
   * 
   *
   * orderId Long ID du geste à supprimer
   * no response value expected for this operation
   **/
  res.end();
}

exports.getGestes = function(args, res, next) {
  /**
   * Retourne la liste des gestes qui sauvent
   * Retourne la liste des gestes qui sauvent
   *
   * returns Map
   **/
  var examples = {};
  examples['application/json'] = {
  "key" : 0
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

