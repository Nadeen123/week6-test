const dbConnection = require('../db_connection');

const getData = (cb) => {
	dbConnection.query(`select * from cities`, (err, res) => {
		if (err) {
			return cb(err);
		}
		console.log('from database', res.rows);
		cb(null, res.rows);
	});
};

module.exports = getData;