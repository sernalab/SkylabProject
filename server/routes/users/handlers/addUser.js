const User = require('../../../models/Users')

function addUser(req, res) {
    const {
        name,
        password,
        promotion,
        made,
        email,
        github,
        description_work,
        project_name,
        description_project,
        working
    } = req.body
    const user = new User({ 
    	project_name,
      	description: description_project,
      	user: {
	        name,
	        promotion,
	        email,
	        github,
	        description: description_work 
	    	}
	    })
    	user.save()
	        .then(() => res.status(200).json({ msg: 'user inserted properly' }))
	        .catch(() => res.status(500).json({ msg: 'error inserting user' }))
}

module.exports = addUser
