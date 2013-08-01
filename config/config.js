module.exports = {
	root: require('path').normalize(__dirname + '/..'),
	app: {
		name: 'magnet'
	},
	port: 3000,
	db: 'mongodb://localhost/magnet'
};
