var router = require('express').Router();

// global people list variable
var list = [];

router.get('/', function(req, res) {
    console.log('in get list route');
   res.send(list);
});

router.post('/', function(req, res) {
   var person = req.body;    
   console.log('in post list route', person);
   list.push(person);
   res.sendStatus(201);
});

module.exports = router;

