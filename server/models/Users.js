const mongoose = require('mongoose');
const collection = 'users'

const UserSchema = new mongoose.Schema({
        project_name: String ,
        github_repo: String,
        heroku_url: String,
        description: String,
        img: String,
        project_name: {
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
            github_repo: {
                type: String
            },
            description: {
                type: String
            }
        }},
        { collection })

    module.exports = mongoose.model('User', UserSchema);

