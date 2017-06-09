const mongoose = require('mongoose');
const collection = 'projects'

const ProjectSchema = new mongoose.Schema({
    name: "John Doe",
    password: "J0hnD03!x4",
    promotion: ["2016-04", "2016-07", "2016-9",  "2017-01", "2017-04", "2017-07"],
    made: ["Javascript", "VueJS"],
    email: "john.doe@gmail.com",
    working: true
    name: {
	    type: String,
		required: true
    },
    password: {
		type: String,
		required: true	
    },
    promotion: {
    	type: Number,
		required: true
    }
}, { collection })

module.exports = mongoose.model('Project', ProjectSchema);
