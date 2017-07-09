var express = require('express');
var router = express.Router();
var Exercice = require('../models/exercice');

router.post('/api/user', function(req, res) {
  if (req.body) {
    res.json({success:true});
  }else{
    res.status(400).json(errors);
  }
});

router.get('/api', function(req, res) {
  var Exercies = Exercice.find({}, 'title').exec(function(err, exercices) {
    if (err) {
      res.send('error occured')
    } else {
      res.json(exercices);
    }
  });
});

router.get('/api/:_id', function(req, res) {
  var Exercies = Exercice.findOne({
    _id: req.params._id
  }, ['rips', "title"]).exec(function(err, exercices) {
    if (err) {
      res.send('error occured')
    } else {
      res.json(exercices);
    }
  });
});

//send new exercise to database
router.post('/api/insert', function(req, res) {

  var newRip = new Exercice();

  newRip.title = req.body.title;

  newRip.save(function(err, exercice) {
    if (err) {
      res.send('error saving exercice');
    } else {
      res.redirect('/');
    }
  });
});

router.delete('/api/:_id', function(req, res) {
  Exercice.findOneAndRemove({
    _id: req.params._id
  }, function(err, rip) {
    if (err) {
      console.log('err occured');
    } else {
      res.status(200);
    }
  });
});

// updated exercise title
router.put('/api/:id', function(req, res) {
  Exercice.findByIdAndUpdate({
    _id: req.params.id
  }, {
    $set: {
      title: req.body.title
    }
  }, {
    new: true
  }, function(err, exercice) {
    if (err)
      throw err;
    res.send(exercice);
  });
});

//add new rip to exercies by id
router.put('/api/rip/:id', function(req, res) {
  Exercice.findOneAndUpdate({
    _id: req.params.id
  }, {
    $push: {
      "rips": {
        rip: req.body.rip
      }
    }
  }, {
    safe: true,
    upsert: true,
    new: true
  }, function(err, newRip) {
    if (err) {
      console.log('err occured');
    } else {
      res.status(200);
    }
  });
});

//delete one of rip if someone will want change amount
router.delete('/api/rip/:id', function(req, res) {
  Exercice.findOneAndUpdate({
    _id: req.params.id
  }, {
    $pull: {
      "rips": {
        _id: req.body._id
      }
    }
  }, function(err, newRip) {
    if (err) {
      console.log('err occured');
    } else {
      res.status(200);
    }
  });
});

module.exports = router;
