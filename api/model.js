const mongoose = require('mongoose')

const helpDeskSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please enter your name']
        },        
        email: {
            type: String,
            required: [true, 'Please enter your e-mail']
        },
        description: {
            type: String,
            required: [true, 'Please enter a description']
        },
        status: {
            type: String,
            required: false
        },
    }
)

const HelpDesk = mongoose.model('Help-Desk', helpDeskSchema)

module.exports = HelpDesk