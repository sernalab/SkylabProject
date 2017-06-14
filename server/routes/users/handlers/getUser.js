const User = require( '../../../models/Users')

function getUser (req,res) {
	const { id } = req.params

	User.findById( id)
		.then( (user) => res.status(200).json({user}) )
		.catch( () => res.status(500).json({ msg: `error getting user/ id ${id} `}) )
}

module.exports = getUser