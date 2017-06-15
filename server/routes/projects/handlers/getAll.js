const Project = require( __base + 'models/Project')

function getAll( req, res ) {
	Project.find()
		.then( projects => res.json(projects) )
}

module.exports = getAll
