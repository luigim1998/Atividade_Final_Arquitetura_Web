const mongoose = require('mongoose');

const postBlogSchema = mongoose.Schema({
	title:{
		type: String,
        required: [true, 'Title field is required']
	}, 
	body:{
		type: String,
        required: [true, 'Text body field is required']
	}, 
	author:{
		type: String,
        required: [true, 'Author field is required']
	}
})

const PostBlog = mongoose.model('PostBlog', postBlogSchema);

module.exports = PostBlog;