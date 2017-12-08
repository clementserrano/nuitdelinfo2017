'use strict';

const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

// Connect
const connection = (closure) => {
    return MongoClient.connect('mongodb://127.0.0.1:27017/nuitdelinfo2017', (err, db) => {
        if (err) return console.log(err);

        closure(db);
    });
};

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};

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
  connection((db) => {
        db.collection('gestes')
            .find()
            .toArray()
            .then((gestes) => {
                response.data = gestes;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
	});
};


