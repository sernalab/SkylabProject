const mongoose = require('mongoose');
const collection = 'projects'

const ProjectSchema = new mongoose.Schema({
    project_name: {
	    type: String,
		required: true
    },
    description: {
		type: String,
		required: true	
    },
    img: {
    	type: String,
		required: true
    }
}, { collection })

module.exports = mongoose.model('Project', ProjectSchema);
