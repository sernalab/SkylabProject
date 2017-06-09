const User = require( __base + 'models/Users')

function addUser( req, res ) {
	const { name_user, password, promotion, email, github_user, description_work, project_name, project_made, description_project } = req.body
	const user	= new User( { name_user, password, promotion, email, github_user, description_work, project_name, project_made, description_project } )
	user.save()
		.then( () => res.status(200).json({ msg: 'user inserted properly'}) )
		.catch( () => res.status(500).json({ msg: 'error inserting user'}) )
}

module.exports = addUser