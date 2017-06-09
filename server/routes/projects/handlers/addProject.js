const Project = require( __base + 'models/Pizza')

function addPizza( req, res ) {
	const { project_name, description, image } = req.body
	const project	= new Project( { name, description, image } )
	project.save()
		.then( () => res.status(200).json({ msg: 'project inserted properly'}) )
		.catch( () => res.status(500).json({ msg: 'error inserting project'}) )
}

module.exports = addProject