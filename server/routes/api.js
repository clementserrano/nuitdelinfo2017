const express = require('express'); 
const router = express.Router(); 
const MongoClient = require('mongodb').MongoClient; 
const ObjectID = require('mongodb').ObjectID; 
 
// Connect 
const connection = (closure) => { 
    return MongoClient.connect('mongodb://127.0.0.1:27017/nuitdelinfo2017', (err, db) => { 
        if (err) return console.log(err); 
 
        closure(db); 
    }); 
}; 
 
// Error handling 
const sendError = (err, res) => { 
    response.status = 501; 
    response.message = typeof err == 'object' ? err.message : err; 
    res.status(501).json(response); 
}; 
 
// Response handling 
let response = { 
    status: 200, 
    data: [], 
    message: null 
}; 
 
// Get users 
router.get('/users', (req, res) => { 
    connection((db) => { 
        db.collection('users') 
            .find() 
            .toArray() 
            .then((users) => { 
                response.data = users; 
                res.json(response); 
            }) 
            .catch((err) => { 
                sendError(err, res); 
            }); 
    }); 
});

// Get accidents 
router.get('/accidents', (req, res) => { 
    connection((db) => { 
        db.collection('accidents') 
            .find() 
            .toArray() 
            .then((accidents) => { 
                response.data = accidents; 
                res.json(response); 
            }) 
            .catch((err) => { 
                sendError(err, res); 
            }); 
    }); 
});

// Add accident
router.post('/accidents/add', (req, res) => {
    connection((db) => { 
        db.collection('accidents') 
            .insert(req.body.accident)
            .then(() => { 
                res.data = "Insertion réussie";
                res.json(response); 
            }) 
            .catch((err) => { 
                sendError(err, res); 
            }); 
    }); 
});

// Ask a question to chatbot
router.post('/chatbot/ask', (req, res) => {
    console.log("/chatbot/ask " + req);
    response.data = "Je réponds";
    res.json(response); 
});
 
module.exports = router;