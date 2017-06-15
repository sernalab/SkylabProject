const Project = require( __base + 'models/Project')

function getProject (req,res) {

	const { id } = req.params

	Project.findById( id)
		.then( project => res.status(200).json({ project }) )
		.catch( () => res.status(500).json({ msg: `error getting user/ id ${id} `}) )

}

module.exports = getProject
