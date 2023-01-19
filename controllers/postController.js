const post = require('../models/postModel')

const savePost = async(req,res) => {
    const newUser = req.body;
    const form = new post(newUser)
    const result = await form.save()
    res.status(201).send({status:true})
}

module.exports = { savePost }