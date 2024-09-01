const mongoose = require('mongoose');

const forumSchema = new mongoose.Schema({
    title: String,
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }]
});

module.exports = mongoose.model('Forum', forumSchema);
