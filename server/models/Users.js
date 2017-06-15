const mongoose = require('mongoose');
const collection = 'users'

const UserSchema = new mongoose.Schema({
        project_name: String ,
        github_repo: String,
        heroku_url: String,
        description: String,
        img: String,
        promotion: {
            type: String
        },
        email: {
            type: String
        },
        github_user: {
            type: String
        },
        description_work: {
            type: String
        },
        project_name: {
            type: String
        },
        project_made: {
            type: String
        },
        description_project: {
            type: String
        },
        user: {
            name: {
                type: String
            },
            promotion: {
                type: String
            },
            email: {
                type: String
            },
            github: {
                type: String
            },
            description: {
                type: String
            }
        }},
        { collection })

    module.exports = mongoose.model('User', UserSchema);

