var express = require('express');
var router = express.Router();

// Home
router.get('/', function(req, res) {
   res.render('index', { title: 'Calentics'});
});

router.get('/c/:id', function(req , res){
   res.render('calendar', { title: 'Calentics', id: req.params.id});
});
module.exports = router;