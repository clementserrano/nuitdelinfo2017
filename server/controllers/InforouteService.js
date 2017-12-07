'use strict';

exports.addInforoute = function(args, res, next) {
  /**
   * Signaler une inforoute
   * 
   *
   * body Inforoute Info a ajouter a la liste des inforoutes
   * no response value expected for this operation
   **/
  res.end();
}

exports.deleteInforoute = function(args, res, next) {
  /**
   * Supprimer une inforoute
   * 
   *
   * petId Long Inforoute a supprimer
   * api_key String  (optional)
   * no response value expected for this operation
   **/
  res.end();
}

exports.getAllInforoute = function(args, res, next) {
  /**
   * Recuperer toutes les inforoutes
   * Multiple status values can be provided with comma separated strings
   *
   * returns List
   **/
  var examples = {};
  examples['application/json'] = [ {
  "infoType" : "travaux",
  "lattitude" : 6.0274563,
  "id" : 0,
  "heureCollecte" : "2000-01-23T04:56:07.000+00:00",
  "longitude" : 1.4658129
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.getInfoById = function(args, res, next) {
  /**
   * Obtenir une inforoute
   * Retourne une inforoute
   *
   * petId Long ID de l info route a renvoyer
   * returns Inforoute
   **/
  var examples = {};
  examples['application/json'] = {
  "infoType" : "travaux",
  "lattitude" : 6.0274563,
  "id" : 0,
  "heureCollecte" : "2000-01-23T04:56:07.000+00:00",
  "longitude" : 1.4658129
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.updateInforoute = function(args, res, next) {
  /**
   * Mettre a jour une inforoute existante
   * 
   *
   * body Inforoute Inforoute a mettre a jour
   * no response value expected for this operation
   **/
  res.end();
}

