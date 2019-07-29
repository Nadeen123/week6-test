// write the query to post the data into Database
const dbConnection = require('../db_connection');

const postData = (result, cb) => {
	dbConnection.query(
		`INSERT INTO cities (city_name,country) VALUES ($1,$2)`,
		[ result.city_name, result.country ],
		(err, res) => {
			if (err) {
				return cb(err);
			}
			console.log('data from post  data what to insert', res);
			cb(null, res);
		}
	);
};
module.exports = postData;
