const mongoose = require('mongoose')

const blogSchema = mongoose.Schema({
    id : {
        type: String,
        required: true,
    },
     password: {
        type: String,
        required: true,
    },

},{timestamps:true})

const blogModel = mongoose.model('blog_model',blogSchema)

module.exports = blogModel