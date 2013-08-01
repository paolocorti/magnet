var mongoose = require('mongoose'),
  User = mongoose.model('User');

exports.views = function (req, res) {
  console.log(req)
  var name = req.params.name;
  res.render(name);
};

exports.index = function(req, res){
  res.render('home/index');
};


