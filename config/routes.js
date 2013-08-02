//var checkAuth = require('./public/js/checkAuth');

module.exports = function(app){

	//home route
	var home = require('../app/controllers/home');
	var login = require('../app/controllers/login');

	app.get('/', checkAuth, home.index);
	app.get('/login-form', home.loginform);
	app.get('/ciao', home.loginform);
	app.get('/views/:name', home.views);
	app.post('/login', login.login);

	function checkAuth(req, res, next) {
	  if (!req.session.user_id) {
	    res.redirect('/login-form');
	  } else {
	    next();
	  }
	}

};
