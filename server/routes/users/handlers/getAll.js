const User = require(  '../../../models/Users')

function getAll( req, res ) {
	User.find()
		.then( users => res.json(users) )
}

module.exports = getAll