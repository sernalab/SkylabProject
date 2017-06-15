const mongoose = require('mongoose');
const collection = 'projects'

const ProjectSchema = new mongoose.Schema({
	project_name: String,
	github_repo: String,
	heroku_url: String,
	description: String,
	promotion: String,
	email: String,
	github_user: String,
	description_work: String,
	project_name: String,
	project_made: String,
	description_project: String,
	user: {
		name: String,
		promotion: String,
		email: String,
		github: String,
		description: String
	}
},
{ collection })

module.exports = mongoose.model('Project', ProjectSchema);

